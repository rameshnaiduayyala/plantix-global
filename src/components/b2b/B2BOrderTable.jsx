import React from 'react';
import { Table, Tag, Button } from 'antd';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { formatCurrency, formatDate } from '../../utils/formatters';

export default function B2BOrderTable({ orders = [] }) {
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Order / PO Ref',
      key: 'id',
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: 700, color: '#064E3B' }}>{record.id}</div>
          <div style={{ fontSize: '12px', color: '#64746B' }}>{record.poNumber}</div>
        </div>
      ),
    },
    {
      title: 'Client Company',
      dataIndex: 'company',
      key: 'company',
      render: (text) => <span style={{ fontWeight: 600, color: '#17201B' }}>{text}</span>,
    },
    {
      title: 'Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (date) => <span style={{ color: '#64746B' }}>{formatDate(date)}</span>,
    },
    {
      title: 'Volume',
      key: 'volume',
      render: (_, record) => (
        <div>
          <span style={{ fontWeight: 600 }}>{record.totalItems} Plants</span>
          <div style={{ fontSize: '11px', color: '#0F766E' }}>{record.containerType}</div>
        </div>
      ),
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (val) => (
        <span style={{ fontWeight: 800, color: '#064E3B' }}>{formatCurrency(val)}</span>
      ),
    },
    {
      title: 'Phyto & Status',
      key: 'status',
      render: (_, record) => {
        let color = 'default';
        if (record.status.includes('Delivered')) color = 'success';
        else if (record.status.includes('Production') || record.status.includes('Transit')) color = 'processing';
        else if (record.status.includes('Customs')) color = 'warning';

        return (
          <div>
            <Tag color={color} style={{ fontWeight: 600 }}>
              {record.status}
            </Tag>
            <div style={{ fontSize: '11px', color: '#64746B', marginTop: '2px' }}>
              {record.phytosanitaryStatus}
            </div>
          </div>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: 'flex', gap: '6px' }}>
          <Link to={`/b2b/orders/${record.id}`}>
            <Button size="small" type="default" icon={<EyeOutlined />} style={{ borderRadius: '6px' }}>
              View Details
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={orders}
      rowKey="id"
      pagination={{ pageSize: 5 }}
      scroll={{ x: 750 }}
    />
  );
}
