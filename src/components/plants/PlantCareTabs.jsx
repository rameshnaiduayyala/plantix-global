import React from 'react';
import { Tabs, Row, Col, Card, Rate, List } from 'antd';
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  GlobalOutlined,
  SunOutlined,
  CloudOutlined,
  CompassOutlined,
  DashboardOutlined,
  DropboxOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

export default function PlantCareTabs({ plant }) {
  const careItems = [
    {
      title: 'Light Exposure',
      value: plant.light,
      description: 'Acclimatized to light transitions; adjust gradually upon site delivery.',
    },
    {
      title: 'Watering Schedule',
      value: plant.water,
      description: 'Ensure free-draining potting medium. Do not let roots sit in standing stagnant water.',
    },
    {
      title: 'Optimal Temperature',
      value: plant.temperature,
      description: 'Shield from sudden cold drafts or direct heating HVAC outlets.',
    },
    {
      title: 'Humidity Level',
      value: plant.humidity,
      description: 'Thrives in regular to high ambient humidity. Foliage misting recommended for dry interiors.',
    },
    {
      title: 'Growth Size',
      value: plant.size,
      description: 'Matured in nursery conditions with vigorous root system.',
    },
    {
      title: 'Container & Pot Size',
      value: plant.potSize,
      description: 'Shipped in certified nursery export container with moisture-locking wrap.',
    },
  ];

  const reviewList = [
    {
      author: 'Jonathan Reynolds (Landscape Architect)',
      rating: 5,
      date: '2 weeks ago',
      content:
        'Outstanding specimen condition. Foliage arrived vibrant and glossy without any transit stress. The root ball was moist and pristine.',
    },
    {
      author: 'Dr. Evelyn Martinez (Botanical Collector)',
      rating: 5,
      date: '1 month ago',
      content:
        'True to variety and exceptional genetic health. The phytosanitary documentation arrived attached to the shipping crate.',
    },
  ];

  const items = [
    {
      key: 'description',
      label: 'Plant Description',
      children: (
        <div style={{ padding: '16px 0', fontSize: '15px', lineHeight: 1.8, color: '#17201B' }}>
          <p style={{ marginBottom: '16px' }}>{plant.description}</p>
          <p style={{ marginBottom: '20px' }}>
            At PlantX Global, every specimen is propagated and nurtured in our specialized greenhouses under controlled botanical parameters. Each plant undergoes a multi-point horticultural inspection, root health audit, and preventative pest screening prior to dispatch.
          </p>

          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ background: '#F7FAF7', borderRadius: '12px' }}>
                <h4 style={{ color: '#064E3B', fontWeight: 700, marginBottom: '6px' }}>
                  <CheckCircleOutlined style={{ color: '#059669', marginRight: '6px' }} /> Nursery Quality Guarantee
                </h4>
                <p style={{ fontSize: '13px', color: '#64746B', margin: 0 }}>
                  Backed by our 30-day PlantX botanical arrival guarantee and origin pedigree verification.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card size="small" style={{ background: '#F7FAF7', borderRadius: '12px' }}>
                <h4 style={{ color: '#064E3B', fontWeight: 700, marginBottom: '6px' }}>
                  <GlobalOutlined style={{ color: '#0F766E', marginRight: '6px' }} /> Global Sourcing &amp; Export
                </h4>
                <p style={{ fontSize: '13px', color: '#64746B', margin: 0 }}>
                  Origin: <strong>{plant.origin}</strong>. Complies with international import/export sanitary standards.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: 'care',
      label: 'Care Guide & Specs',
      children: (
        <div style={{ padding: '16px 0' }}>
          <Row gutter={[16, 16]}>
            {careItems.map((c, i) => (
              <Col xs={24} sm={12} md={8} key={i}>
                <Card
                  bordered
                  style={{
                    borderRadius: '12px',
                    height: '100%',
                    background: '#FFFFFF',
                  }}
                  bodyStyle={{ padding: '16px' }}
                >
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#059669', fontWeight: 700, letterSpacing: '0.4px', marginBottom: '4px' }}>
                    {c.title}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#064E3B', marginBottom: '6px' }}>
                    {c.value}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64746B', lineHeight: 1.4 }}>
                    {c.description}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ),
    },
    {
      key: 'shipping',
      label: 'Shipping & Logistics',
      children: (
        <div style={{ padding: '16px 0', fontSize: '14px', color: '#17201B' }}>
          <h4 style={{ color: '#064E3B', fontSize: '16px', fontWeight: 700, marginBottom: '12px' }}>
            Engineered Botanical Packaging &amp; Fast Courier Dispatch
          </h4>
          <p style={{ color: '#64746B', lineHeight: 1.7, marginBottom: '16px' }}>
            Plants are living organisms that require specialized transport. PlantX Global utilizes proprietary reinforced corrugated timber-lined cartons with soil-retention membranes and thermal insulation to safeguard your specimens against extreme temperature fluctuations.
          </p>

          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <div style={{ padding: '16px', background: '#F7FAF7', borderRadius: '12px', border: '1px solid #DDE8E1' }}>
                <strong style={{ color: '#064E3B', display: 'block', marginBottom: '4px' }}>Domestic Transit</strong>
                <span style={{ color: '#64746B', fontSize: '13px' }}>2 - 4 Business Days with live tracking and signature delivery.</span>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ padding: '16px', background: '#F7FAF7', borderRadius: '12px', border: '1px solid #DDE8E1' }}>
                <strong style={{ color: '#064E3B', display: 'block', marginBottom: '4px' }}>International Air Cargo</strong>
                <span style={{ color: '#64746B', fontSize: '13px' }}>3 - 6 Days expedited via priority temperature-monitored air freight.</span>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div style={{ padding: '16px', background: '#F7FAF7', borderRadius: '12px', border: '1px solid #DDE8E1' }}>
                <strong style={{ color: '#064E3B', display: 'block', marginBottom: '4px' }}>Sea Reefer Containers (B2B)</strong>
                <span style={{ color: '#64746B', fontSize: '13px' }}>Full 20ft / 40ft container climate control with constant datalogging.</span>
              </div>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: 'reviews',
      label: `Customer Reviews (${plant.reviews || 0})`,
      children: (
        <div style={{ padding: '16px 0' }}>
          <Row gutter={[32, 24]}>
            <Col xs={24} md={8}>
              <div style={{ background: '#F7FAF7', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '44px', fontWeight: 800, color: '#064E3B', lineHeight: 1 }}>
                  {plant.rating}
                </div>
                <Rate disabled defaultValue={plant.rating} allowHalf style={{ color: '#FBBF24', margin: '8px 0' }} />
                <div style={{ color: '#64746B', fontSize: '13px' }}>
                  Based on {plant.reviews} verified buyer ratings
                </div>
              </div>
            </Col>
            <Col xs={24} md={16}>
              <List
                itemLayout="vertical"
                dataSource={reviewList}
                renderItem={(item) => (
                  <List.Item style={{ padding: '16px 0', borderBottom: '1px solid #EEF2F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 700, color: '#064E3B' }}>{item.author}</span>
                      <span style={{ fontSize: '12px', color: '#94A39A' }}>{item.date}</span>
                    </div>
                    <Rate disabled defaultValue={item.rating} style={{ fontSize: '13px', color: '#FBBF24', marginBottom: '6px' }} />
                    <p style={{ color: '#64746B', fontSize: '14px', margin: 0 }}>{item.content}</p>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  return <Tabs defaultActiveKey="description" items={items} />;
}
