import React, { useState } from 'react';
import { Row, Col, Card, Input, Tabs } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function PlantCarePage() {
  useSEO({
    title: 'Plant Care Guides & Horticultural Tips | PlantX Global',
    description: 'Expert botanical guides on watering schedules, sunlight calibration, humidity levels, and repotting techniques.',
  });

  const [search, setSearch] = useState('');

  const guides = [
    {
      category: 'watering',
      title: 'The Golden Rule of Soil Moisture',
      desc: 'Most indoor plants perish from over-hydration rather than underwatering. Check the top 2 inches of potting medium before adding water. Always ensure planters have unobstructed drainage holes.',
    },
    {
      category: 'light',
      title: 'Decoding Direct vs. Bright Indirect Light',
      desc: 'Direct sun means uninterrupted rays hitting foliage. Bright indirect means placing the plant 3-5 feet away from a sun-facing window or behind a sheer linen curtain to prevent leaf scorch.',
    },
    {
      category: 'humidity',
      title: 'Tropical Foliage & Ambient Humidity',
      desc: 'Exotic aroids, monsteras, and palms thrive in 60%+ relative humidity. Group plants together, utilize pebble trays with water, or place an ultrasonic cool-mist humidifier nearby.',
    },
    {
      category: 'fertilizing',
      title: 'Balanced Micro & Macro Nutrients',
      desc: 'Feed plants during their active growth season (Spring through Autumn) with a diluted 20-20-20 NPK liquid organic fertilizer. Avoid fertilizing dormant plants in the winter months.',
    },
    {
      category: 'repotting',
      title: 'When and How to Repot Specimens',
      desc: 'Repot when roots begin circling the bottom drainage holes, usually every 18-24 months. Upgrade to a container only 2-3 inches larger in diameter to prevent waterlogged stagnant soil.',
    },
  ];

  const filteredGuides = guides.filter(
    (g) =>
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.desc.toLowerCase().includes(search.toLowerCase()) ||
      g.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHero
        badge="Botanical Care Knowledge"
        title="Plant Care Master Guides"
        description="Comprehensive horticultural recommendations curated by our lead nursery agronomists to help your plants flourish."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Plant Care' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto 40px' }}>
          <Input
            size="large"
            placeholder="Search care guides (e.g. watering, humidity, repotting)..."
            prefix={<SearchOutlined style={{ color: '#94A39A' }} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ borderRadius: '9999px' }}
          />
        </div>

        <Row gutter={[24, 24]}>
          {filteredGuides.map((guide, idx) => (
            <Col xs={24} sm={12} lg={8} key={idx}>
              <Card
                bordered
                style={{ borderRadius: '16px', height: '100%', background: '#FFFFFF' }}
                bodyStyle={{ padding: '28px' }}
              >
                <span style={{ fontSize: '11px', color: '#059669', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                  {guide.category}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', margin: '8px 0 10px 0' }}>
                  {guide.title}
                </h3>
                <p style={{ color: '#64746B', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  {guide.desc}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
