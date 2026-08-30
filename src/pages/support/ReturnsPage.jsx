import React from 'react';
import { Row, Col, Card } from 'antd';
import { SafetyCertificateOutlined, CheckCircleFilled } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function ReturnsPage() {
  useSEO({
    title: 'Returns & Guarantee Policy | PlantX Global',
    description: 'Our 30-Day live plant health guarantee and damaged botanical replacement policy.',
  });

  return (
    <div>
      <PageHero
        badge="Quality Assurance"
        title="Returns &amp; Botanical Guarantee"
        description="Every plant from PlantX Global is backed by our 30-day healthy arrival guarantee."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Returns & Guarantee' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card bordered style={{ borderRadius: '16px', height: '100%' }} bodyStyle={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <SafetyCertificateOutlined style={{ color: '#059669', fontSize: '26px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
                  30-Day Live Plant Guarantee
                </h3>
              </div>
              <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.7 }}>
                We guarantee that your plants will arrive in healthy, viable condition. If a plant dies or shows signs of severe transit failure within 30 days of arrival despite adhering to our care instructions, simply send a photo to our support team for an immediate replacement or full store credit.
              </p>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card bordered style={{ borderRadius: '16px', height: '100%' }} bodyStyle={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <CheckCircleFilled style={{ color: '#059669', fontSize: '26px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
                  Damaged Package Protocol
                </h3>
              </div>
              <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.7 }}>
                In the rare event of transit damage by the courier, photograph the damaged box and botanical foliage within 48 hours of receipt. We file courier claims and expedite a fresh specimen from the nursery immediately without waiting for return shipping.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
