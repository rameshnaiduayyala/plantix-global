import React from 'react';
import { Row, Col, Card, Button, Tag } from 'antd';
import {
  SafetyCertificateOutlined,
  CheckCircleFilled,
  ContainerOutlined,
  EnvironmentOutlined,
  CarOutlined,
  CompassOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function ImportExportPage() {
  useSEO({
    title: 'Pan-India Plant Supply & Interstate Logistics | PlantX Global Kadiam',
    description: 'Bulk plant supply and dedicated interstate transport from Kadiam, Andhra Pradesh to Hyderabad, Bangalore, Chennai, Mumbai, Delhi-NCR and across India.',
  });

  const supplySteps = [
    { title: '1. Nursery Selection in Kadiam', desc: 'Direct selection of hardened, healthy specimens from our propagation grounds in Venkayammapeta, Kadiam.' },
    { title: '2. Batch Grading & Caliper Audits', desc: 'Grading height, canopy spread, stem caliber, and robust root-ball development.' },
    { title: '3. Plant Health & Quality Check', desc: 'Rigorous inspection by senior agronomists ensuring 100% pest-free, vigorous living stock.' },
    { title: '4. Transit Documentation & Gate Passes', desc: 'Complete commercial invoices, transport e-way bills, and transit documentation.' },
    { title: '5. Protective Root-Ball Packing', desc: 'Moisture-locking burlap wraps, coco-peat root retention, and protective canopy netting.' },
    { title: '6. Dedicated Interstate Transport', desc: 'Loaded onto closed container trucks and open platform lorries configured for living plants.' },
    { title: '7. Regional Highway Transit', desc: 'Optimized transit routes ensuring overnight and fast 1-3 day arrival across Indian states.' },
    { title: '8. On-Site Unloading & Placement', desc: 'Assistance with site staging, crane lifting for mature trees, and landscape planting.' },
  ];

  const indianRegions = [
    {
      region: 'South India Hubs',
      cities: 'Hyderabad, Bengaluru, Chennai, Kochi, Visakhapatnam, Vijayawada, Coimbatore, Mysuru',
      transit: 'Same Day to 24-48 Hours Direct Delivery',
      tag: 'FASTEST CORRIDOR',
    },
    {
      region: 'West India Hubs',
      cities: 'Mumbai, Pune, Ahmedabad, Surat, Nagpur, Goa, Nashik, Vadodara',
      transit: '36 - 60 Hours Dedicated Truck Dispatch',
      tag: 'DAILY TRIPS',
    },
    {
      region: 'North & Central India Hubs',
      cities: 'Delhi-NCR, Jaipur, Lucknow, Chandigarh, Bhopal, Indore, Raipur',
      transit: '48 - 72 Hours Temperature-Shielded Freight',
      tag: 'NORTH CORRIDOR',
    },
    {
      region: 'East & North-East India Hubs',
      cities: 'Kolkata, Bhubaneswar, Cuttack, Patna, Guwahati, Ranchi',
      transit: '40 - 72 Hours Coastal Highway Transit',
      tag: 'EAST CORRIDOR',
    },
  ];

  return (
    <div>
      <PageHero
        badge="All-India Nursery Network"
        title="Pan-India Plant Supply, Direct from Kadiam."
        description="Reliable bulk plant deliveries and project consignments from the nursery capital of India (Kadiam, AP) to developers, landscapers, and resorts across all Indian states."
        theme="teal"
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Pan-India Supply' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        {/* Intro Section */}
        <Row gutter={[48, 36]} align="middle" style={{ marginBottom: '60px' }}>
          <Col xs={24} lg={12}>
            <span style={{ color: '#0F766E', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Interstate Logistics &amp; Wholesale
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#064E3B', margin: '8px 0 16px' }}>
              Direct Farm-to-Site Plant Transport Across India
            </h2>
            <p style={{ color: '#64746B', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              Located in <strong>Venkayammapeta, Kadiam Mandal</strong> (Andhra Pradesh), PlantX Global operates at the heart of India's largest plant cultivation belt. We supply full truckloads (FTL) and project-specific manifests with dedicated logistics across every Indian state.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/request-quote">
                <Button type="primary" size="large" style={{ background: '#0F766E', borderColor: '#0F766E', fontWeight: 700, borderRadius: '10px' }}>
                  Request Pan-India Supply Quote
                </Button>
              </Link>
              <Link to="/bulk-orders">
                <Button size="large" style={{ borderRadius: '10px', fontWeight: 600 }}>
                  Upload Project BOQ / Manifest
                </Button>
              </Link>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80"
                  alt="Mature Landscape Trees in Kadiam"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' }}
                />
              </Col>
              <Col span={12}>
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                  alt="Palms and Tropical Plants"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' }}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* 8-Step Supply Roadmap */}
        <div style={{ marginBottom: '64px' }}>
          <div className="plantx-section-header">
            <span className="plantx-section-badge" style={{ color: '#0F766E', background: '#F0FDFA' }}>
              Interstate Workflow
            </span>
            <h2 className="plantx-section-title">The Kadiam Dispatch &amp; Delivery Framework</h2>
            <p className="plantx-section-desc">
              Every shipment follows an unbroken protocol to protect delicate foliage and maintain moisture during highway transit across India.
            </p>
          </div>

          <Row gutter={[20, 20]}>
            {supplySteps.map((step, idx) => (
              <Col xs={24} sm={12} lg={6} key={idx}>
                <Card
                  bordered
                  style={{
                    borderRadius: '16px',
                    height: '100%',
                    background: '#FFFFFF',
                    boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
                  }}
                  bodyStyle={{ padding: '24px' }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#F0FDFA',
                      color: '#0F766E',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
                    {step.title.replace(/^\d+\.\s*/, '')}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#64746B', lineHeight: 1.5, margin: 0 }}>
                    {step.desc}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* All India Delivery Routes */}
        <div>
          <div className="plantx-section-header">
            <span className="plantx-section-badge" style={{ color: '#0F766E', background: '#F0FDFA' }}>
              Nationwide Coverage
            </span>
            <h2 className="plantx-section-title">Major Indian Supply Corridors from Kadiam</h2>
          </div>

          <Row gutter={[24, 24]}>
            {indianRegions.map((hub, idx) => (
              <Col xs={24} sm={12} key={idx}>
                <Card
                  bordered
                  style={{ borderRadius: '16px', background: '#FFFFFF' }}
                  bodyStyle={{ padding: '24px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <EnvironmentOutlined style={{ color: '#0F766E', fontSize: '18px' }} />
                      <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
                        {hub.region}
                      </h3>
                    </div>
                    <Tag color="#059669" style={{ fontWeight: 700, margin: 0 }}>
                      {hub.tag}
                    </Tag>
                  </div>
                  <div style={{ color: '#64746B', fontSize: '13px', lineHeight: 1.6, marginBottom: '12px' }}>
                    Major Delivery Cities: <strong style={{ color: '#17201B' }}>{hub.cities}</strong>
                  </div>
                  <div style={{ color: '#0F766E', fontSize: '12.5px', fontWeight: 600 }}>
                    <CarOutlined style={{ marginRight: '6px' }} /> Average Transit: {hub.transit}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
