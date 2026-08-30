import React from 'react';
import { Row, Col, Card, Divider, Avatar } from 'antd';
import {
  SafetyCertificateOutlined,
  GlobalOutlined,
  HeartOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function AboutPage() {
  useSEO({
    title: 'About Us | Founded by Ramesh Ayyala - PlantX Global',
    description: 'Learn about PlantX Global, founded by Ramesh Ayyala in Venkayammapeta, Kadiam, Andhra Pradesh. 25-year botanical nursery heritage and global export infrastructure.',
  });

  const values = [
    { title: 'Botanical Integrity', desc: 'Genetically authentic mother stock, disease-indexed tissue culture, and environmentally balanced cultivation in Kadiam.' },
    { title: 'Global Reliability', desc: 'Uncompromising cold-chain logistics ensuring living flora arrives in peak physiological health anywhere in the world.' },
    { title: 'Ecological Responsibility', desc: 'Peat-free substrates, solar-powered shade houses, and advanced closed-loop irrigation recycling.' },
    { title: 'Enduring Partnerships', desc: 'Dedicated horticultural account managers supporting landscape projects from concept design through decades of growth.' },
  ];

  return (
    <div>
      <PageHero
        badge="About PlantX Global"
        title="Growing Plants. Building Partnerships."
        description="Founded by Ramesh Ayyala in the horticultural hub of Kadiam, PlantX Global bridges master nursery propagation with international supply chains and landscape architecture."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'About Us' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        {/* Story Section */}
        <Row gutter={[48, 36]} align="middle" style={{ marginBottom: '64px' }}>
          <Col xs={24} lg={12}>
            <span style={{ color: '#059669', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px' }}>
              Our Story &amp; Origins
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#064E3B', margin: '8px 0 16px' }}>
              Rooted in Kadiam, Flourishing Worldwide
            </h2>
            <p style={{ color: '#64746B', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
              PlantX Global was founded by <strong>Ramesh Ayyala</strong> in <strong>Venkayammapeta, Kadiam Mandal</strong> (East Godavari District, Andhra Pradesh, India)—the world-renowned epicenter of botanical nursery cultivation.
            </p>
            <p style={{ color: '#64746B', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
              What began as a passionate horticultural propagation nursery has grown under Ramesh Ayyala's leadership into a premier global enterprise supplying exotic tropicals, mature specimen trees, architectural palms, and turnkey landscape solutions across international markets.
            </p>
            <div style={{ background: '#F7FAF7', padding: '16px 20px', borderRadius: '12px', borderLeft: '4px solid #059669' }}>
              <div style={{ fontWeight: 700, color: '#064E3B', fontSize: '14px' }}>
                Primary Nursery Complex:
              </div>
              <div style={{ fontSize: '13px', color: '#64746B', marginTop: '4px' }}>
                Venkayammapeta, Kadiam Mandal, East Godavari District, PIN - 533126, Rajahmundry Rural, Andhra Pradesh, India.
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
              alt="PlantX Global Nursery in Kadiam"
              style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '20px', border: '1px solid #DDE8E1' }}
            />
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row gutter={[24, 24]} style={{ marginBottom: '64px' }}>
          <Col xs={24} md={12}>
            <Card
              bordered
              style={{ borderRadius: '16px', height: '100%', background: '#F7FAF7', borderColor: '#DDE8E1' }}
              bodyStyle={{ padding: '32px' }}
            >
              <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Our Mission</span>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#064E3B', margin: '8px 0 12px' }}>
                To Bring the World's Finest Living Flora to Every Space
              </h3>
              <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                We empower landscapers, developers, and green enthusiasts by delivering healthy, acclimatized, and phytosanitary-certified plants through an efficient, transparent, and eco-conscious global supply chain.
              </p>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              bordered
              style={{ borderRadius: '16px', height: '100%', background: '#F0FDFA', borderColor: '#CCFBF1' }}
              bodyStyle={{ padding: '32px' }}
            >
              <span style={{ color: '#0F766E', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>Our Vision</span>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#064E3B', margin: '8px 0 12px' }}>
                The Global Standard in Botanical Trade &amp; Landscape Innovation
              </h3>
              <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                To be the planet's premier botanical partner, driving sustainable cultivation techniques, preserving rare biodiversity, and transforming urban landscapes into lush biological sanctuaries.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Values */}
        <div>
          <div className="plantx-section-header">
            <span className="plantx-section-badge">Core Pillars</span>
            <h2 className="plantx-section-title">The Values That Guide Us</h2>
          </div>

          <Row gutter={[24, 24]}>
            {values.map((v, i) => (
              <Col xs={24} sm={12} key={i}>
                <Card
                  bordered
                  style={{ borderRadius: '16px', height: '100%', background: '#FFFFFF' }}
                  bodyStyle={{ padding: '28px' }}
                >
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
                    {v.title}
                  </h4>
                  <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    {v.desc}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
