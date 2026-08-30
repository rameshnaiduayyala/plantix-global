import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import { servicesList } from '../../data/services';

export default function ServicesPage() {
  useSEO({
    title: 'Botanical & Landscaping Services | PlantX Global',
    description: 'Comprehensive services including masterplan landscaping, international plant sourcing, nursery production, and phytosanitary trade.',
  });

  return (
    <div>
      <PageHero
        badge="Botanical Services"
        title="Comprehensive Plant &amp; Landscape Solutions"
        description="Integrated horticultural services engineered for property developers, resort operators, landscape architects, and municipal green initiatives."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Services' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {servicesList.map((srv, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <Card
                key={srv.id}
                bordered
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(6, 78, 59, 0.04)',
                }}
                bodyStyle={{ padding: '36px' }}
              >
                <Row gutter={[48, 32]} align="middle" direction={isEven ? 'rtl' : 'ltr'}>
                  <Col xs={24} md={12}>
                    <img
                      src={srv.image}
                      alt={srv.title}
                      style={{
                        width: '100%',
                        height: '320px',
                        objectFit: 'cover',
                        borderRadius: '16px',
                      }}
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      Service Offering 0{idx + 1}
                    </span>
                    <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#064E3B', margin: '8px 0 14px' }}>
                      {srv.title}
                    </h2>
                    <p style={{ color: '#64746B', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                      {srv.shortDesc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      {srv.features.map((feat, fi) => (
                        <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#17201B' }}>
                          <CheckCircleOutlined style={{ color: '#059669' }} /> {feat}
                        </div>
                      ))}
                    </div>

                    <Link to={`/services/${srv.slug}`}>
                      <Button
                        type="primary"
                        size="large"
                        style={{ background: '#064E3B', borderColor: '#064E3B', fontWeight: 600, borderRadius: '8px' }}
                      >
                        Explore Service Details <ArrowRightOutlined />
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
