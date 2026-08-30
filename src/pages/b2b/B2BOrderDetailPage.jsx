import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Tag, Table, Button, Timeline, Divider, message } from 'antd';
import {
  DownloadOutlined,
  PrinterOutlined,
  CheckCircleFilled,
  SafetyCertificateOutlined,
  ArrowLeftOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import { orderService } from '../../services/orderService';
import { formatCurrency, formatDate } from '../../utils/formatters';

export default function B2BOrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: order ? `B2B Order ${order.id} | PlantX Global` : 'B2B Order Details',
    description: 'Commercial order manifests and phytosanitary certificate verification.',
  });

  useEffect(() => {
    orderService
      .getB2BOrderById(id)
      .then((data) => {
        setOrder(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Card loading style={{ borderRadius: '16px' }} />;
  }

  if (!order) {
    return (
      <Card style={{ borderRadius: '16px', textAlign: 'center', padding: '40px' }}>
        <h3 style={{ color: '#064E3B' }}>B2B Order Not Found</h3>
        <Link to="/b2b/orders">
          <Button type="primary" style={{ marginTop: '16px' }}>Back to Orders</Button>
        </Link>
      </Card>
    );
  }

  const productColumns = [
    {
      title: 'Botanical Description & Spec',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <strong style={{ color: '#064E3B' }}>{text}</strong>,
    },
    {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty',
      render: (q) => <span>{q} units</span>,
    },
    {
      title: 'Wholesale Unit Rate',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
      render: (p) => <span>{formatCurrency(p)}</span>,
    },
    {
      title: 'Line Subtotal',
      dataIndex: 'subtotal',
      key: 'subtotal',
      render: (st) => <strong style={{ color: '#064E3B' }}>{formatCurrency(st)}</strong>,
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/b2b/orders" style={{ color: '#059669', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ArrowLeftOutlined /> Back to Commercial Orders
        </Link>
      </div>

      <Card
        bordered
        style={{
          borderRadius: '16px',
          boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
          marginBottom: '24px',
        }}
        bodyStyle={{ padding: '32px' }}
      >
        {/* Header summary */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #EEF2F0', paddingBottom: '24px', marginBottom: '24px', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
                {order.id}
              </h1>
              <Tag color="#0F766E" style={{ fontWeight: 700, margin: 0 }}>
                {order.poNumber}
              </Tag>
              <Tag color="success" style={{ fontWeight: 700, margin: 0 }}>
                {order.status}
              </Tag>
            </div>
            <div style={{ color: '#64746B', fontSize: '13px', marginTop: '6px' }}>
              Client: <strong>{order.company}</strong> &bull; Ordered on {formatDate(order.orderDate)}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button
              icon={<DownloadOutlined />}
              onClick={() => message.success('Downloading Phytosanitary Certificate & Commercial Invoice PDF...')}
            >
              Export Phyto PDF
            </Button>
            <Button icon={<PrinterOutlined />} onClick={() => window.print()}>
              Print Manifest
            </Button>
          </div>
        </div>

        {/* Info Grid */}
        <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
          <Col xs={24} sm={8}>
            <div style={{ background: '#F7FAF7', padding: '18px', borderRadius: '12px', border: '1px solid #DDE8E1' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#059669', fontWeight: 700, marginBottom: '4px' }}>
                Discharge Port &amp; Delivery
              </div>
              <div style={{ fontWeight: 700, color: '#064E3B' }}>{order.destinationPort}</div>
              <div style={{ fontSize: '12px', color: '#64746B', marginTop: '2px' }}>
                {order.containerType}
              </div>
            </div>
          </Col>

          <Col xs={24} sm={8}>
            <div style={{ background: '#F7FAF7', padding: '18px', borderRadius: '12px', border: '1px solid #DDE8E1' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#059669', fontWeight: 700, marginBottom: '4px' }}>
                Phytosanitary Protocol
              </div>
              <div style={{ fontWeight: 700, color: '#064E3B' }}>{order.phytosanitaryStatus}</div>
              <div style={{ fontSize: '12px', color: '#64746B', marginTop: '2px' }}>
                USDA / EU Plant Passport Compliant
              </div>
            </div>
          </Col>

          <Col xs={24} sm={8}>
            <div style={{ background: '#F7FAF7', padding: '18px', borderRadius: '12px', border: '1px solid #DDE8E1' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#059669', fontWeight: 700, marginBottom: '4px' }}>
                Commercial Payment Terms
              </div>
              <div style={{ fontWeight: 700, color: '#064E3B' }}>{order.paymentTerms}</div>
              <div style={{ fontSize: '12px', color: '#059669', marginTop: '2px', fontWeight: 600 }}>
                Deposit Paid: {formatCurrency(order.paidAmount)}
              </div>
            </div>
          </Col>
        </Row>

        {/* Product Manifest Table */}
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '16px' }}>
          Batch Plant Manifest ({order.totalItems} Specimens)
        </h3>

        <Table
          columns={productColumns}
          dataSource={order.products}
          rowKey="name"
          pagination={false}
          style={{ marginBottom: '24px' }}
        />

        {/* Financial Summary */}
        <Row justify="end" style={{ marginBottom: '32px' }}>
          <Col xs={24} sm={10}>
            <div style={{ background: '#F7FAF7', padding: '20px', borderRadius: '12px', border: '1px solid #DDE8E1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                <span style={{ color: '#64746B' }}>Commercial Subtotal:</span>
                <span style={{ fontWeight: 600 }}>{formatCurrency(order.totalAmount)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                <span style={{ color: '#64746B' }}>Phyto &amp; Inspection Fees:</span>
                <span style={{ color: '#059669', fontWeight: 600 }}>INCLUDED</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                <span style={{ color: '#64746B' }}>Ocean Freight / Crate Packaging:</span>
                <span style={{ color: '#059669', fontWeight: 600 }}>CIF PORT</span>
              </div>
              <Divider style={{ margin: '8px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 800, color: '#064E3B' }}>
                <span>Total Project Contract:</span>
                <span>{formatCurrency(order.totalAmount)}</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Timeline */}
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '16px' }}>
          Production &amp; Shipping Milestone Timeline
        </h3>

        <Timeline
          items={order.timeline.map((t) => ({
            color: '#059669',
            children: (
              <div>
                <strong style={{ color: '#064E3B' }}>{t.title}</strong>
                <div style={{ fontSize: '12px', color: '#64746B' }}>{t.date}</div>
              </div>
            ),
          }))}
        />
      </Card>
    </div>
  );
}
