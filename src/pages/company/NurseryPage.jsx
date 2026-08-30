import React from 'react';
import { Row, Col, Card, Tag } from 'antd';
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  SyncOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function NurseryPage() {
  useSEO({
    title: 'Our Production Nursery | Venkayammapeta, Kadiam - PlantX Global',
    description: 'Tour the PlantX Global nursery operations in Venkayammapeta, Kadiam, Andhra Pradesh, India: propagation, shade houses, botanical care, and export packing.',
  });

  const stages = [
    {
      title: '1. Plant Production & Micropropagation',
      desc: 'Our specialized propagation centers in Kadiam cultivate hundreds of thousands of virus-tested, robust mother stock varieties and hardy rooted saplings annually.',
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: '2. Climate-Regulated Shade Houses & Open Grounds',
      desc: 'Spanning extensive acreage across Venkayammapeta and Kadiam, our shade houses calibrate humidity, irrigation, and sunshine to acclimatize plants for international destinations.',
      image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: '3. Multi-Point Botanical Quality Control',
      desc: 'Horticulturists and agronomists perform rigorous biometric quality inspections, auditing foliage vigor, root-ball integrity, and zero-pest status.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: '4. Specimen Trees & Architectural Palms Collection',
      desc: 'A permanent field repository of mature specimen palms, centenary landscape trees, and exotic mother stock ready for masterplan projects.',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: '5. Soil-Free & Protective Export Packing',
      desc: 'Specimens prepared for cross-border transit are hydrated with moisture-retaining organic mediums and encased in heavy-duty export packaging.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: '6. Reefer Dispatch & Global Logistics',
      desc: 'Dispatched directly in temperature-monitored refrigerated containers and expedited air cargo with accredited governmental Phytosanitary Certificates.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div>
      <PageHero
        badge="Nursery Infrastructure"
        title="Inside the PlantX Global Nursery"
        description="Venkayammapeta, Kadiam Mandal, East Godavari District, Andhra Pradesh, India. Discover the horticultural lifecycle behind every specimen we cultivate."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Nursery Tour' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '50px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {stages.map((stg, idx) => (
            <Card
              key={idx}
              bordered
              style={{ borderRadius: '18px', overflow: 'hidden' }}
              bodyStyle={{ padding: '28px' }}
            >
              <Row gutter={[36, 24]} align="middle">
                <Col xs={24} md={8}>
                  <img
                    src={stg.image}
                    alt={stg.title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px' }}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', marginBottom: '10px' }}>
                    {stg.title}
                  </h3>
                  <p style={{ color: '#64746B', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                    {stg.desc}
                  </p>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
