import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { GlobalOutlined, SafetyCertificateOutlined, CheckCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function PlantSourcingPage() {
  useSEO({
    title: 'Custom Plant Sourcing & Rare Specimen Procurement | PlantX Global',
    description: 'We locate and procure rare cultivars, mature specimen trees, and exotic tropicals from accredited nurseries across the world.',
  });

  return (
    <div>
      <PageHero
        badge="Botanical Procurement"
        title="Bespoke Plant Sourcing Worldwide"
        description="Finding the impossible: rare variegated cultivars, centuries-old olive trees, and mature architectural specimens sourced with genetic pedigree verification."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Services', to: '/services' },
          { title: 'Plant Sourcing' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        <Row gutter={[48, 36]} align="middle" style={{ marginBottom: '50px' }}>
          <Col xs={24} md={12}>
            <span style={{ color: '#059669', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px' }}>
              Collector &amp; Enterprise Procurement
            </span>
            <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#064E3B', margin: '8px 0 16px' }}>
              Your Direct Link to the World's Premier Growers
            </h2>
            <p style={{ color: '#64746B', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
              When standard catalog inventory doesn't meet your landscape architect’s exacting requirements, our global procurement agronomists step in. We conduct on-site root health audits, biometric measurements, and quarantine hardening before shipping.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#17201B' }}>
                <CheckCircleOutlined style={{ color: '#059669' }} /> Rare Variegated Aroids (Monstera Albo, Pink Princess, Caramel Marble)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#17201B' }}>
                <CheckCircleOutlined style={{ color: '#059669' }} /> Century-Old Gnarled Specimen Olive Trees &amp; Ancient Bonsai
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#17201B' }}>
                <CheckCircleOutlined style={{ color: '#059669' }} /> High-Caliper Canary &amp; Medjool Landmark Palms
              </div>
            </div>

            <Link to="/request-quote">
              <Button type="primary" size="large" style={{ background: '#064E3B', borderColor: '#064E3B', fontWeight: 700, borderRadius: '8px' }}>
                Submit Custom Sourcing Request <ArrowRightOutlined />
              </Button>
            </Link>
          </Col>

          <Col xs={24} md={12}>
            <img
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80"
              alt="Rare Exotic Botanical Sourcing"
              style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '20px', border: '1px solid #DDE8E1' }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
