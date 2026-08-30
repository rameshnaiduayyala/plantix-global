import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
  ContainerOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import ContactForm from '../../components/forms/ContactForm';

export default function ContactPage() {
  useSEO({
    title: 'Contact Us | Let\'s Grow Together - PlantX Global',
    description: 'Get in touch with PlantX Global nursery headquarters in Kadiam, Andhra Pradesh, India. Led by Ramesh Ayyala.',
  });

  const departmentCards = [
    {
      title: 'Commercial & Project Sales',
      phone: '+91 79894 19864',
      email: 'ayyalarameshnaidu@gmail.com',
      icon: <CustomerServiceOutlined style={{ color: '#059669', fontSize: '24px' }} />,
    },
    {
      title: 'B2B Wholesale & Nursery Supply',
      phone: '+91 79894 19864',
      email: 'ayyalarameshnaidu@gmail.com',
      icon: <ContainerOutlined style={{ color: '#064E3B', fontSize: '24px' }} />,
    },
    {
      title: 'International Export Desk',
      phone: '+91 79894 19864',
      email: 'ayyalarameshnaidu@gmail.com',
      icon: <GlobalOutlined style={{ color: '#0F766E', fontSize: '24px' }} />,
    },
    {
      title: 'Masterplan Landscaping & Design',
      phone: '+91 79894 19864',
      email: 'ayyalarameshnaidu@gmail.com',
      icon: <EnvironmentOutlined style={{ color: '#84CC16', fontSize: '24px' }} />,
    },
  ];

  return (
    <div>
      <PageHero
        badge="Direct Nursery Communication"
        title="Let's Grow Together."
        description="Connect with our agronomists, landscape architects, and global export specialists at our primary nursery propagation complex in Kadiam."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Contact Us' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '48px 24px 80px' }}>
        {/* Department Cards Grid */}
        <Row gutter={[20, 20]} style={{ marginBottom: '48px' }}>
          {departmentCards.map((dept, idx) => (
            <Col xs={24} sm={12} lg={6} key={idx}>
              <Card
                bordered
                style={{ borderRadius: '16px', height: '100%', background: '#FFFFFF' }}
                bodyStyle={{ padding: '24px' }}
              >
                <div style={{ marginBottom: '14px' }}>{dept.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
                  {dept.title}
                </h3>
                <div style={{ fontSize: '12.5px', color: '#17201B', fontWeight: 600, marginBottom: '4px' }}>
                  <PhoneOutlined style={{ color: '#059669', marginRight: '6px' }} /> {dept.phone}
                </div>
                <div style={{ fontSize: '12.5px', color: '#64746B' }}>
                  <MailOutlined style={{ color: '#059669', marginRight: '6px' }} /> {dept.email}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Contact Form & Nursery Address Card */}
        <Row gutter={[36, 36]}>
          <Col xs={24} lg={14}>
            <Card
              bordered
              style={{ borderRadius: '16px', boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)' }}
              bodyStyle={{ padding: '32px' }}
            >
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#064E3B', marginBottom: '6px' }}>
                Send Our Horticultural Team a Message
              </h2>
              <p style={{ color: '#64746B', fontSize: '14px', marginBottom: '24px' }}>
                Fill out the inquiry form below for rapid project pricing, plant availability lists, or container freight estimates.
              </p>
              <ContactForm />
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <Card
              bordered
              style={{ borderRadius: '16px', height: '100%', background: '#FFFFFF' }}
              bodyStyle={{ padding: '28px' }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '14px' }}>
                Main Nursery Complex &amp; Headquarters
              </h3>

              {/* Visual Map/Nursery Graphic */}
              <div
                style={{
                  height: '220px',
                  borderRadius: '12px',
                  backgroundColor: '#E5EDE8',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '20px',
                  border: '1px solid #DDE8E1',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80"
                  alt="Kadiam Nursery Greenhouses"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    background: 'rgba(2, 44, 34, 0.9)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '12px',
                  }}
                >
                  <EnvironmentOutlined style={{ color: '#84CC16', marginRight: '6px' }} />
                  PlantX Nursery Grounds &bull; Kadiam, Andhra Pradesh
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#17201B' }}>
                <div>
                  <strong style={{ color: '#064E3B' }}>Founder &amp; Managing Director:</strong><br />
                  <span style={{ color: '#17201B', fontWeight: 600 }}>Ramesh Ayyala</span>
                </div>
                <div>
                  <strong style={{ color: '#064E3B' }}>Nursery Facility Address:</strong><br />
                  <span style={{ color: '#64746B', lineHeight: 1.6 }}>
                    Venkayammapeta, Kadiam Mandal,<br />
                    East Godavari District, PIN - 533126,<br />
                    Rajahmundry Rural, Andhra Pradesh, India
                  </span>
                </div>
                <div>
                  <strong style={{ color: '#064E3B' }}>Visiting &amp; Nursery Tour Hours:</strong><br />
                  <span style={{ color: '#64746B' }}>
                    Monday &ndash; Saturday: 07:00 &ndash; 18:30 IST<br />
                    Sunday: 08:00 &ndash; 14:00 IST (By Prior Appointment)
                  </span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
