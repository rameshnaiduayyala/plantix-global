import React from 'react';
import { Row, Col, Card, Steps, Divider, Tag } from 'antd';
import {
  SafetyCertificateOutlined,
  GlobalOutlined,
  ContainerOutlined,
  CheckCircleFilled,
  FileDoneOutlined,
  CarOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import BulkOrderForm from '../../components/b2b/BulkOrderForm';

export default function BulkOrdersPage() {
  useSEO({
    title: 'Bulk Plant Orders & Wholesale Supply | PlantX Global',
    description: 'From hundreds to thousands of botanical specimens, PlantX Global supplies nursery-direct bulk plants to developers, resorts, and landscapers worldwide.',
  });

  const stats = [
    { value: '1,000+', label: 'Business Clients' },
    { value: '500+', label: 'Bulk Export FCLs' },
    { value: '20+', label: 'Countries Served' },
    { value: '25+', label: 'Years Expertise' },
  ];

  const processSteps = [
    {
      title: '1. Submit Request',
      description: 'Upload your bill of quantities (BOQ) or complete the project requirement form.',
    },
    {
      title: '2. Get Quotation',
      description: 'Receive itemized wholesale tier pricing, shipping estimates, and lead times.',
    },
    {
      title: '3. Confirm Order',
      description: 'Sign contract proforma and reserve live nursery production batches.',
    },
    {
      title: '4. Quality & Packing',
      description: 'Agricultural phytosanitary inspection, root-ball wrapping, and crating.',
    },
    {
      title: '5. Shipping & Delivery',
      description: 'Refrigerated reefer ocean container or expedited air cargo direct to site.',
    },
  ];

  return (
    <div>
      <PageHero
        badge="Enterprise Wholesale Supply"
        title="Bulk Plants. Better Supply."
        description="From hundreds to tens of thousands, PlantX Global supplies premium acclimatized plants to businesses, landscapers, developers, and retailers worldwide."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Bulk Orders' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '40px 24px 80px' }}>
        {/* Stats Strip */}
        <Row gutter={[20, 20]} style={{ marginBottom: '40px' }}>
          {stats.map((s, i) => (
            <Col xs={12} sm={6} key={i}>
              <Card
                bordered
                style={{
                  borderRadius: '16px',
                  textAlign: 'center',
                  background: '#FFFFFF',
                  boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
                }}
                bodyStyle={{ padding: '24px 16px' }}
              >
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#064E3B', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '13px', color: '#64746B', marginTop: '6px', fontWeight: 600 }}>
                  {s.label}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[36, 36]}>
          {/* Main Form (Left) */}
          <Col xs={24} lg={15}>
            <BulkOrderForm />
          </Col>

          {/* Right: Process & Advantages */}
          <Col xs={24} lg={9}>
            <Card
              bordered
              style={{
                borderRadius: '16px',
                background: '#FFFFFF',
                boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
                marginBottom: '24px',
              }}
              bodyStyle={{ padding: '28px' }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '20px' }}>
                Our Bulk Order Process
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {processSteps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#059669',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '13px',
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#064E3B', fontSize: '14px' }}>
                        {step.title}
                      </div>
                      <div style={{ color: '#64746B', fontSize: '13px', lineHeight: 1.5, marginTop: '2px' }}>
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card
              bordered
              style={{
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #022C22 0%, #064E3B 100%)',
                color: '#FFFFFF',
              }}
              bodyStyle={{ padding: '28px' }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                Enterprise Benefits
              </h3>
              <ul style={{ paddingLeft: '18px', color: '#DDE8E1', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
                <li>Wholesale Tier Volume Pricing Discounts</li>
                <li>Forward nursery crop reservation &amp; scheduled dispatches</li>
                <li>Full Gov Phytosanitary export certificates included</li>
                <li>Dedicated agronomy support &amp; planting consultation</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
