import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import { categories } from '../../data/categories';

export default function CategoriesPage() {
  useSEO({
    title: 'Plant Categories | Botanical Classifications',
    description: 'Explore the full spectrum of botanical classifications at PlantX Global. From interior air-purifiers to specimen estate palms.',
  });

  return (
    <div>
      <PageHero
        badge="Botanical Classifications"
        title="Plant Categories"
        description="Select from our comprehensive nursery collections, tailored for interior styling, commercial developments, and private collector estates."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Categories' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '48px 24px 80px' }}>
        <Row gutter={[24, 32]}>
          {categories.map((cat) => (
            <Col xs={24} sm={12} lg={6} key={cat.id}>
              <Link to={`/plants?category=${cat.slug}`}>
                <Card
                  hoverable
                  className="plantx-hover-card"
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  cover={
                    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'rgba(2, 44, 34, 0.8)',
                          color: '#A3E635',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        {cat.tag}
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: '20px' }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '6px' }}>
                      {cat.name}
                    </h3>
                    <p style={{ color: '#64746B', fontSize: '13px', lineHeight: 1.5, marginBottom: '16px' }}>
                      {cat.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #EEF2F0', paddingTop: '12px' }}>
                    <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700 }}>
                      {cat.count}+ Varieties
                    </span>
                    <Button type="link" style={{ padding: 0, fontWeight: 700, color: '#059669' }}>
                      Browse <ArrowRightOutlined />
                    </Button>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
