import React from 'react';
import { Row, Col, Card } from 'antd';
import { CheckCircleOutlined, ThunderboltOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function SustainabilityPage() {
  useSEO({
    title: 'Sustainability & Environmental Stewardship | PlantX Global',
    description: 'Our environmental commitments: 100% peat-free substrates, closed-loop water recirculation, and solar-powered propagation.',
  });

  const commitments = [
    { title: '100% Peat-Free Mediums', desc: 'Preserving fragile global peat bogs by using sustainably harvested coco-coir, pine bark, and biochar mixes.' },
    { title: 'Closed-Loop Water Recirculation', desc: 'Rainwater harvesting reservoirs and UV-sanitized runoff recycling reducing freshwater consumption by 85%.' },
    { title: 'Solar-Powered Climate Control', desc: 'Rooftop solar arrays powering our greenhouse ventilation and environmental sensors.' },
    { title: 'Biodegradable & Recyclable Packaging', desc: 'Timber framing sourced from certified sustainable forestry with zero single-use plastics.' },
  ];

  return (
    <div>
      <PageHero
        badge="Environmental Stewardship"
        title="Cultivating a Greener Tomorrow"
        description="We believe global botanical trade must operate in harmonious balance with natural ecosystems, biodiversity conservation, and zero carbon footprint goals."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Sustainability' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        <Row gutter={[24, 24]}>
          {commitments.map((c, i) => (
            <Col xs={24} sm={12} key={i}>
              <Card
                bordered
                style={{ borderRadius: '16px', height: '100%', background: '#FFFFFF' }}
                bodyStyle={{ padding: '32px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CheckCircleOutlined style={{ color: '#059669', fontSize: '22px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
                    {c.title}
                  </h3>
                </div>
                <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {c.desc}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
