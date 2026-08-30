import React from 'react';
import { Row, Col, Divider, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Logo from '../common/Logo';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#022C22',
        color: '#DDE8E1',
        paddingTop: '64px',
        paddingBottom: '32px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="plantx-container">
        {/* Main Footer Columns */}
        <Row gutter={[32, 48]}>
          {/* Col 1: Brand & Bio */}
          <Col xs={24} sm={24} md={8} lg={6}>
            <Logo variant="light" size="default" />
            <p
              style={{
                color: '#94A39A',
                fontSize: '13px',
                lineHeight: 1.6,
                marginTop: '16px',
                marginBottom: '16px',
              }}
            >
              Plants. Landscapes. Worldwide. Premier international nursery grower, commercial landscape partner, and bulk exporter of healthy acclimatized flora from the horticultural heartland of Kadiam.
            </p>
            <div style={{ color: '#A3E635', fontSize: '13px', fontWeight: 700, marginBottom: '20px' }}>
              Founder: Ramesh Ayyala
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A3E635',
                }}
              >
                <InstagramOutlined style={{ fontSize: '18px' }} />
              </a>
              <a
                href="#linkedin"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A3E635',
                }}
              >
                <LinkedinOutlined style={{ fontSize: '18px' }} />
              </a>
              <a
                href="#twitter"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A3E635',
                }}
              >
                <TwitterOutlined style={{ fontSize: '18px' }} />
              </a>
            </div>
          </Col>

          {/* Col 2: Plants */}
          <Col xs={12} sm={8} md={4} lg={3}>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '18px' }}>
              Plants
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <Link to="/plants?category=indoor-plants" style={{ color: '#DDE8E1' }}>Indoor Plants</Link>
              <Link to="/plants?category=outdoor-plants" style={{ color: '#DDE8E1' }}>Outdoor Plants</Link>
              <Link to="/plants?category=exotic-plants" style={{ color: '#DDE8E1' }}>Exotic &amp; Rare</Link>
              <Link to="/plants?category=palms" style={{ color: '#DDE8E1' }}>Palms &amp; Tropicals</Link>
              <Link to="/plants?category=trees" style={{ color: '#DDE8E1' }}>Specimen Trees</Link>
              <Link to="/categories" style={{ color: '#A3E635', fontWeight: 600 }}>All Categories &rarr;</Link>
            </div>
          </Col>

          {/* Col 3: Services */}
          <Col xs={12} sm={8} md={4} lg={3}>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '18px' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <Link to="/services/landscaping" style={{ color: '#DDE8E1' }}>Landscaping Design</Link>
              <Link to="/services/plant-sourcing" style={{ color: '#DDE8E1' }}>Global Sourcing</Link>
              <Link to="/services" style={{ color: '#DDE8E1' }}>Nursery Services</Link>
              <Link to="/facilities" style={{ color: '#DDE8E1' }}>Facilities &amp; Labs</Link>
              <Link to="/sustainability" style={{ color: '#DDE8E1' }}>Sustainability</Link>
            </div>
          </Col>

          {/* Col 4: Trade & Wholesale */}
          <Col xs={12} sm={8} md={4} lg={3}>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '18px' }}>
              Trade &amp; Supply
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <Link to="/bulk-orders" style={{ color: '#DDE8E1' }}>Bulk Nursery Orders</Link>
              <Link to="/request-quote" style={{ color: '#DDE8E1' }}>Request Quote</Link>
              <Link to="/import-export" style={{ color: '#DDE8E1' }}>Pan-India Supply</Link>
              <Link to="/nursery" style={{ color: '#DDE8E1' }}>Kadiam Nursery Grounds</Link>
              <Link to="/shipping" style={{ color: '#DDE8E1' }}>Interstate Transport</Link>
            </div>
          </Col>

          {/* Col 5: Support & Guides */}
          <Col xs={12} sm={8} md={4} lg={3}>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '18px' }}>
              Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <Link to="/faq" style={{ color: '#DDE8E1' }}>Help &amp; FAQ</Link>
              <Link to="/plant-care" style={{ color: '#DDE8E1' }}>Plant Care Guides</Link>
              <Link to="/returns" style={{ color: '#DDE8E1' }}>Quality Guarantee</Link>
              <Link to="/contact" style={{ color: '#DDE8E1' }}>Contact Agronomists</Link>
              <Link to="/about" style={{ color: '#DDE8E1' }}>About Company</Link>
            </div>
          </Col>

          {/* Col 6: Main Nursery & Headquarters */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <h4 style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 700, marginBottom: '18px' }}>
              Main Nursery &amp; Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#94A39A' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <EnvironmentOutlined style={{ color: '#84CC16', marginTop: '4px', fontSize: '16px', flexShrink: 0 }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>PlantX Global Nursery Complex</strong><br />
                  Venkayammapeta, Kadiam Mandal,<br />
                  East Godavari District, 533126,<br />
                  Rajahmundry Rural, Andhra Pradesh, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <PhoneOutlined style={{ color: '#84CC16', fontSize: '16px' }} />
                <span>Ramesh Ayyala: +91 79894 19864</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MailOutlined style={{ color: '#84CC16', fontSize: '16px' }} />
                <span>ayyalarameshnaidu@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '48px 0 24px' }} />

        {/* Footer Bottom */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '13px',
            color: '#94A39A',
          }}
        >
          <div>
            &copy; 2026 PlantX Global &bull; Founded by Ramesh Ayyala &bull; Venkayammapeta, Kadiam, AP, India.
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/sustainability" style={{ color: '#94A39A' }}>Sustainability</Link>
            <Link to="/shipping" style={{ color: '#94A39A' }}>Phytosanitary Logistics</Link>
            <Link to="/contact" style={{ color: '#94A39A' }}>Inquire</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
