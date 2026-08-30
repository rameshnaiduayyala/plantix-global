import React, { useState, useEffect } from 'react';
import { Card, Table, Tag, Button, Row, Col, Space } from 'antd';
import {
  FileDoneOutlined,
  ShoppingOutlined,
  ContainerOutlined,
  PlusOutlined,
  ArrowRightOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import B2BStatCards from '../../components/b2b/B2BStatCards';
import B2BOrderTable from '../../components/b2b/B2BOrderTable';
import { orderService } from '../../services/orderService';
import { quoteService } from '../../services/quoteService';
import { formatCurrency, formatDate } from '../../utils/formatters';

export default function B2BDashboardPage() {
  useSEO({
    title: 'B2B Enterprise Portal | PlantX Global',
    description: 'Manage commercial orders, track container shipments, submit RFQs, and review wholesale pricing.',
  });

  const [orders, setOrders] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      orderService.getB2BOrders(),
      quoteService.getQuotes(),
      orderService.getB2BStats(),
    ]).then(([ords, qts, sts]) => {
      setOrders(ords);
      setQuotes(qts);
      setStats(sts);
      setLoading(false);
    });
  }, []);

  const quoteColumns = [
    {
      title: 'Quote ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <strong style={{ color: '#064E3B' }}>{text}</strong>,
    },
    {
      title: 'Project Title & Target',
      key: 'project',
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: 600, color: '#17201B' }}>{record.company}</div>
          <div style={{ fontSize: '12px', color: '#64746B' }}>{record.destination || record.businessType}</div>
        </div>
      ),
    },
    {
      title: 'Date Submitted',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (d) => <span style={{ color: '#64746B' }}>{formatDate(d)}</span>,
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <Tag color={record.statusTag === 'success' ? 'success' : 'processing'} style={{ fontWeight: 600 }}>
          {record.status}
        </Tag>
      ),
    },
    {
      title: 'Quoted Amount',
      key: 'amount',
      render: (_, record) => (
        <span style={{ fontWeight: 800, color: '#064E3B' }}>
          {record.quoteAmount ? formatCurrency(record.quoteAmount) : 'Processing'}
        </span>
      ),
    },
  ];

  return (
    <div>
      {/* Top Header Actions */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
            Enterprise B2B Dashboard
          </h1>
          <p style={{ color: '#64746B', fontSize: '14px', margin: '4px 0 0 0' }}>
            Azura Luxury Resorts &amp; Spa &bull; Commercial Wholesale Account #AE-99882
          </p>
        </div>

        <Space>
          <Link to="/request-quote">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{ background: '#0F766E', borderColor: '#0F766E', fontWeight: 600, borderRadius: '8px' }}
            >
              New RFQ Quote
            </Button>
          </Link>
          <Link to="/bulk-orders">
            <Button
              type="primary"
              icon={<ContainerOutlined />}
              style={{ background: '#064E3B', borderColor: '#064E3B', fontWeight: 600, borderRadius: '8px' }}
            >
              Start Bulk Order
            </Button>
          </Link>
        </Space>
      </div>

      {/* KPI Cards */}
      <div style={{ marginBottom: '32px' }}>
        <B2BStatCards stats={stats} />
      </div>

      {/* Recent Commercial Orders Table */}
      <Card
        bordered
        style={{
          borderRadius: '16px',
          boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
          marginBottom: '32px',
        }}
        bodyStyle={{ padding: '24px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
            Active &amp; Recent Commercial Shipments
          </h3>
          <Link to="/b2b/orders">
            <Button type="link" style={{ color: '#059669', fontWeight: 600, padding: 0 }}>
              View All Orders &rarr;
            </Button>
          </Link>
        </div>

        <B2BOrderTable orders={orders} />
      </Card>

      {/* Recent Quotes */}
      <Card
        bordered
        style={{
          borderRadius: '16px',
          boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
        }}
        bodyStyle={{ padding: '24px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
            Pending &amp; Completed Quotations (RFQ)
          </h3>
          <Link to="/request-quote">
            <Button type="link" style={{ color: '#059669', fontWeight: 600, padding: 0 }}>
              Submit New RFQ &rarr;
            </Button>
          </Link>
        </div>

        <Table
          columns={quoteColumns}
          dataSource={quotes}
          rowKey="id"
          pagination={false}
          scroll={{ x: 650 }}
        />
      </Card>
    </div>
  );
}
