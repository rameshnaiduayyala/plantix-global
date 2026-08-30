import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import {
  FileTextOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { formatCurrency } from '../../utils/formatters';

export default function B2BStatCards({ stats }) {
  const cards = [
    {
      title: 'Total Commercial Spend',
      value: formatCurrency(stats?.totalSpend || 142850),
      icon: <DollarOutlined style={{ color: '#059669', fontSize: '24px' }} />,
      bg: '#ECFDF5',
      borderColor: '#A7F3D0',
    },
    {
      title: 'Active Bulk Orders',
      value: stats?.activeOrdersCount || 4,
      icon: <SyncOutlined style={{ color: '#0F766E', fontSize: '24px' }} />,
      bg: '#F0FDFA',
      borderColor: '#99F6E4',
    },
    {
      title: 'Pending RFQ Quotes',
      value: stats?.pendingQuotesCount || 2,
      icon: <FileTextOutlined style={{ color: '#D97706', fontSize: '24px' }} />,
      bg: '#FFFBEB',
      borderColor: '#FDE68A',
    },
    {
      title: 'Containers Dispatched',
      value: `${stats?.shippedContainers || 18} Reefer FCL`,
      icon: <ContainerOutlined style={{ color: '#064E3B', fontSize: '24px' }} />,
      bg: '#F7FAF7',
      borderColor: '#DDE8E1',
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      {cards.map((card, idx) => (
        <Col xs={24} sm={12} lg={6} key={idx}>
          <Card
            bordered
            style={{
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              border: `1px solid ${card.borderColor}`,
              boxShadow: '0 2px 10px rgba(6, 78, 59, 0.03)',
            }}
            bodyStyle={{ padding: '20px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '13px', color: '#64746B', fontWeight: 600, marginBottom: '6px' }}>
                  {card.title}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#064E3B' }}>
                  {card.value}
                </div>
              </div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: card.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {card.icon}
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
