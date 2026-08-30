import React from 'react';
import { Row, Col, Card, Button, Divider, Tag } from 'antd';
import {
  CheckCircleOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function LandscapingPage() {
  useSEO({
    title: 'Commercial & Estate Landscaping Solutions | PlantX Global',
    description: 'Transforming luxury spaces with mature specimen palms, architectural trees, and turnkey landscaping design and maintenance.',
  });

  const services = [
    { title: 'Landscape Architecture & 3D Design', desc: 'Masterplanning, botanical microclimate zoning, and full architectural visualization.' },
    { title: 'Turnkey Installation & Crane Placement', desc: 'Large specimen tree positioning, soil preparation, and hardscape integration.' },
    { title: 'Commercial Estate Maintenance', desc: 'Proactive seasonal pruning, integrated pest management, and nutrient scheduling.' },
    { title: 'Resort & Hospitality Landscaping', desc: 'Lush tropical aesthetics, poolside privacy screening, and grand driveway boulevards.' },
    { title: 'Smart Weather-Adaptive Irrigation', desc: 'Automated subsurface drip lines that conserve up to 40% water.' },
  ];

  const gallery = [
    { title: 'Azura Ocean Resort & Spa', category: 'Hospitality', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
    { title: 'Skyline Urban Corporate Park', category: 'Commercial', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80' },
    { title: 'Mediterranean Villa Estate', category: 'Residential', image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80' },
    { title: 'Botanical Rooftop Garden Oasis', category: 'Urban Rooftop', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div>
      <PageHero
        badge="Masterplan Landscaping"
        title="Beautiful Spaces Start with the Right Plants."
        description="We partner with luxury developers, hoteliers, and architects to conceive and build living landscapes of timeless character and enduring beauty."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Services', to: '/services' },
          { title: 'Landscaping' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        {/* Core Capabilities */}
        <div style={{ marginBottom: '64px' }}>
          <div className="plantx-section-header">
            <span className="plantx-section-badge">Full Lifecycle</span>
            <h2 className="plantx-section-title">Our Landscaping Capabilities</h2>
            <p className="plantx-section-desc">
              From the initial horticultural blueprint to the final tree placement and long-term vitality.
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {services.map((item, idx) => (
              <Col xs={24} sm={12} md={8} key={idx}>
                <Card
                  bordered
                  style={{ borderRadius: '16px', height: '100%', background: '#FFFFFF' }}
                  bodyStyle={{ padding: '24px' }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#ECFDF5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      marginBottom: '16px',
                    }}
                  >
                    <EnvironmentOutlined />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#64746B', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Project Gallery */}
        <div style={{ marginBottom: '64px' }}>
          <div className="plantx-section-header">
            <span className="plantx-section-badge">Completed Projects</span>
            <h2 className="plantx-section-title">Selected Landscape Portfolio</h2>
            <p className="plantx-section-desc">
              A showcase of recent botanical architecture and commercial installations.
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {gallery.map((p, idx) => (
              <Col xs={24} sm={12} key={idx}>
                <Card
                  hoverable
                  style={{ borderRadius: '16px', overflow: 'hidden' }}
                  cover={
                    <div style={{ height: '260px', position: 'relative' }}>
                      <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                        <Tag color="#064E3B" style={{ fontWeight: 700 }}>{p.category}</Tag>
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: '20px' }}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', margin: 0 }}>{p.title}</h3>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Card */}
        <Card
          bordered
          style={{
            borderRadius: '20px',
            background: 'radial-gradient(120% 120% at 80% 20%, #064E3B 0%, #022C22 100%)',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
          bodyStyle={{ padding: '50px 32px' }}
        >
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
            Ready to Design Your Living Masterpiece?
          </h2>
          <p style={{ color: '#DDE8E1', fontSize: '16px', maxWidth: '600px', margin: '0 auto 28px' }}>
            Book a direct design and plant sourcing consultation with our lead botanical landscape architects.
          </p>
          <Link to="/contact">
            <Button
              type="primary"
              size="large"
              style={{
                background: '#84CC16',
                borderColor: '#84CC16',
                color: '#022C22',
                fontWeight: 700,
                height: '48px',
                padding: '0 32px',
                borderRadius: '10px',
              }}
            >
              Request Landscaping Consultation <ArrowRightOutlined />
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
