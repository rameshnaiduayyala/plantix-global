import React from 'react';
import { Row, Col, Card } from 'antd';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import { nurseryFacilities } from '../../data/services';

export default function FacilitiesPage() {
  useSEO({
    title: 'Our Facilities & Cleanroom Labs | PlantX Global',
    description: 'Explore the high-tech botanical greenhouses, tissue culture cleanrooms, and automated packing facilities at PlantX Global.',
  });

  return (
    <div>
      <PageHero
        badge="Botanical Infrastructure"
        title="High-Tech Greenhouse Facilities"
        description="Our multi-acre propagation complexes utilize Dutch greenhouse technology, closed-loop irrigation, and sterile micropropagation laboratories."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Facilities' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        <Row gutter={[32, 32]}>
          {nurseryFacilities.map((fac, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card
                bordered
                style={{ borderRadius: '16px', overflow: 'hidden', height: '100%' }}
                cover={<img src={fac.image} alt={fac.title} style={{ height: '220px', objectFit: 'cover' }} />}
                bodyStyle={{ padding: '24px' }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
                  {fac.title}
                </h3>
                <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  {fac.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
