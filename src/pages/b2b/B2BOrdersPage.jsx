import React, { useState, useEffect } from 'react';
import { Card, Input, Select, Button } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import B2BOrderTable from '../../components/b2b/B2BOrderTable';
import { orderService } from '../../services/orderService';

export default function B2BOrdersPage() {
  useSEO({
    title: 'Commercial Bulk Orders | B2B Portal',
    description: 'Track and manage your commercial bulk plant orders, phytosanitary manifests, and sea freight containers.',
  });

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    orderService.getB2BOrders().then((data) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  const filtered = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.poNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.company.toLowerCase().includes(search.toLowerCase()) ||
      o.destinationPort.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Card
        bordered
        style={{
          borderRadius: '16px',
          boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
        }}
        bodyStyle={{ padding: '28px' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
              Commercial Bulk Orders &amp; Containers
            </h2>
            <p style={{ color: '#64746B', fontSize: '13px', margin: '4px 0 0 0' }}>
              All purchase orders, container Reefer assignments, and phytosanitary certificates.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <Input
              placeholder="Search PO#, Order ID, Port..."
              prefix={<SearchOutlined style={{ color: '#94A39A' }} />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '240px', borderRadius: '8px' }}
            />
          </div>
        </div>

        <B2BOrderTable orders={filtered} />
      </Card>
    </div>
  );
}
