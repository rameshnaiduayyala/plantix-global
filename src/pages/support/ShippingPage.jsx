import React from 'react';
import { Row, Col, Card } from 'antd';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function ShippingPage() {
  useSEO({
    title: 'Shipping & Logistics Policy | PlantX Global',
    description: 'Learn about our temperature-controlled domestic and international plant shipping procedures from Kadiam.',
  });

  return (
    <div>
      <PageHero
        badge="Freight Logistics"
        title="Shipping &amp; Delivery Policies"
        description="Every plant is living cargo. Explore our engineered transit packaging and international container protocols from our nursery complex in Kadiam."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Shipping & Delivery' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card bordered style={{ borderRadius: '16px', height: '100%' }} bodyStyle={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}>
                Domestic Supply &amp; Project Freight
              </h3>
              <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                Dispatches originate directly from our nursery propagation grounds in Venkayammapeta, Kadiam. Dedicated trucks and specialized plant carriers transport live root-ball specimens safely across India.
              </p>
              <ul style={{ paddingLeft: '18px', color: '#64746B', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Dedicated Closed Container Trucks for large project consignments.</li>
                <li>Express air cargo for rare cultivars and collector tropical foliage.</li>
                <li>Direct on-site staging and crane unloading assistance for mature trees.</li>
              </ul>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card bordered style={{ borderRadius: '16px', height: '100%' }} bodyStyle={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}>
                International FCL &amp; Air Logistics
              </h3>
              <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
                Cross-border botanical consignments utilize calibrated temperature data-logging to ensure zero chilling or heating injury during maritime or flight transit.
              </p>
              <ul style={{ paddingLeft: '18px', color: '#64746B', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Reefer Sea Containers (18°C Controlled): 8-18 Days to UAE, Europe, and Asia ports.</li>
                <li>Charter &amp; Priority Air Cargo: 2-4 Days with direct airport quarantine handling.</li>
                <li>Official Phytosanitary inspection certificate included with all commercial manifests.</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
