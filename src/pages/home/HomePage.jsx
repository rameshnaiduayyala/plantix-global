import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Rate, Avatar, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
import {
  GlobalOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  ContainerOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import ProductCard from '../../components/plants/ProductCard';
import NewsletterForm from '../../components/forms/NewsletterForm';
import { productService } from '../../services/productService';
import { categories } from '../../data/categories';
import { testimonials, companyMetrics } from '../../data/testimonials';

export default function HomePage() {
  useSEO({
    title: 'Plants, Landscaping & Global Plant Supply',
    description:
      'PlantX Global - Premium botanical nursery, enterprise bulk supply, landscaping architecture and phytosanitary import/export worldwide.',
  });

  const [featuredPlants, setFeaturedPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService.getFeaturedProducts(8).then((data) => {
      setFeaturedPlants(data);
      setLoading(false);
    });
  }, []);

  const trustBadges = [
    { icon: <CheckCircleOutlined />, title: 'Wide Variety', desc: '1,000+ Cultivars' },
    { icon: <SafetyCertificateOutlined />, title: 'Nursery Hardened', desc: 'Acclimatized Health' },
    { icon: <GlobalOutlined />, title: 'Global Export', desc: '100% Phyto Certified' },
    { icon: <ContainerOutlined />, title: 'Bulk Supply', desc: 'FCL Reefer Containers' },
    { icon: <TeamOutlined />, title: 'Agronomy Support', desc: 'Dedicated Specialists' },
  ];

  return (
    <div>
      {/* 1. HERO BANNER */}
      <section className="plantx-hero">
        <div className="plantx-container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={13}>
              <div className="plantx-hero-badge">
                <ThunderboltOutlined style={{ color: '#84CC16' }} /> India's Premier Nursery &bull; Direct From Kadiam
              </div>

              <h1 className="plantx-hero-title">
                From Kadiam <br />
                <span style={{ color: '#A3E635' }}>to Every Corner of India</span>
              </h1>

              <p className="plantx-hero-desc">
                Hardened acclimatized plants, masterplan landscaping solutions, bulk nursery supply, and dedicated interstate transport from Kadiam across all Indian states.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <Link to="/plants">
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: '#059669',
                      borderColor: '#059669',
                      height: '52px',
                      padding: '0 32px',
                      fontSize: '16px',
                      fontWeight: 700,
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(5, 150, 105, 0.4)',
                    }}
                  >
                    Explore Plants <ArrowRightOutlined />
                  </Button>
                </Link>

                <Link to="/request-quote">
                  <Button
                    size="large"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: '#FFFFFF',
                      height: '52px',
                      padding: '0 28px',
                      fontSize: '16px',
                      fontWeight: 600,
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    Request Project Quote
                  </Button>
                </Link>
              </div>

              <div
                style={{
                  marginTop: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  paddingTop: '20px',
                }}
              >
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#A3E635' }}>500,000+</div>
                  <div style={{ fontSize: '12px', color: '#DDE8E1' }}>Live Plants Propagated</div>
                </div>
                <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.15)' }} />
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#A3E635' }}>28+ States</div>
                  <div style={{ fontSize: '12px', color: '#DDE8E1' }}>Pan-India Supply</div>
                </div>
                <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.15)' }} />
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#A3E635' }}>Direct Lorry</div>
                  <div style={{ fontSize: '12px', color: '#DDE8E1' }}>Farm-to-Site Transit</div>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={11}>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.5)',
                    border: '4px solid rgba(255, 255, 255, 0.15)',
                    position: 'relative',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=900&q=80"
                    alt="PlantX Global Nursery Greenhouse"
                    style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      right: '20px',
                      background: 'rgba(2, 44, 34, 0.85)',
                      backdropFilter: 'blur(12px)',
                      padding: '16px 20px',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '12px', color: '#A3E635', fontWeight: 700, textTransform: 'uppercase' }}>
                          Botanical Facility
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>
                          Kadiam Nursery &amp; Export Complex, AP, India
                        </div>
                      </div>
                      <Tag color="#059669" style={{ margin: 0, fontWeight: 700 }}>
                        ISO 9001 CERTIFIED
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 2. TRUST BADGES STRIP */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid #DDE8E1', padding: '24px 0' }}>
        <div className="plantx-container">
          <Row gutter={[24, 24]} justify="space-between" align="middle">
            {trustBadges.map((badge, idx) => (
              <Col xs={12} sm={8} lg={4} key={idx}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: '#ECFDF5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    {badge.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#064E3B', fontSize: '13px' }}>{badge.title}</div>
                    <div style={{ color: '#64746B', fontSize: '11px' }}>{badge.desc}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 3. PLANT CATEGORIES */}
      <section className="plantx-section">
        <div className="plantx-container">
          <div className="plantx-section-header">
            <span className="plantx-section-badge">Curated Collections</span>
            <h2 className="plantx-section-title">Explore Plant Categories</h2>
            <p className="plantx-section-desc">
              From compact interior foliage to grand estate specimen palms and drought-tolerant landscape shrubs.
            </p>
          </div>

          <Row gutter={[20, 20]}>
            {categories.map((cat) => (
              <Col xs={12} sm={12} md={6} key={cat.id}>
                <Link to={`/plants?category=${cat.slug}`}>
                  <Card
                    hoverable
                    className="plantx-hover-card"
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      height: '100%',
                      background: '#FFFFFF',
                    }}
                    cover={
                      <div style={{ height: '170px', position: 'relative', overflow: 'hidden' }}>
                        <img
                          src={cat.image}
                          alt={cat.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          loading="lazy"
                        />
                        <div
                          style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'rgba(2, 44, 34, 0.75)',
                            backdropFilter: 'blur(4px)',
                            color: '#A3E635',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontSize: '11px',
                            fontWeight: 700,
                          }}
                        >
                          {cat.tag}
                        </div>
                      </div>
                    }
                    bodyStyle={{ padding: '16px' }}
                  >
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#064E3B', margin: '0 0 4px 0' }}>
                      {cat.name}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#64746B', margin: '0 0 10px 0', lineHeight: 1.4, minHeight: '34px' }}>
                      {cat.description}
                    </p>
                    <span style={{ fontSize: '12px', color: '#059669', fontWeight: 700 }}>
                      {cat.count}+ Varieties Available &rarr;
                    </span>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 4. FEATURED PLANTS */}
      <section className="plantx-section" style={{ background: '#FFFFFF', borderTop: '1px solid #DDE8E1', borderBottom: '1px solid #DDE8E1' }}>
        <div className="plantx-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
            <div>
              <span className="plantx-section-badge">Handpicked Highlights</span>
              <h2 className="plantx-section-title" style={{ margin: 0 }}>
                Featured Botanical Specimens
              </h2>
            </div>
            <Link to="/plants">
              <Button type="default" style={{ borderColor: '#059669', color: '#059669', fontWeight: 600 }}>
                View All Plants ({featuredPlants.length * 2}+) <ArrowRightOutlined />
              </Button>
            </Link>
          </div>

          <Row gutter={[20, 24]}>
            {featuredPlants.map((plant) => (
              <Col xs={12} sm={12} md={8} lg={6} key={plant.id}>
                <ProductCard plant={plant} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 5. B2B SECTION: PLANTS FOR EVERY SCALE */}
      <section className="plantx-section" style={{ background: '#F7FAF7' }}>
        <div className="plantx-container">
          <Card
            bordered
            style={{
              borderRadius: '24px',
              backgroundColor: '#064E3B',
              color: '#FFFFFF',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(6, 78, 59, 0.15)',
            }}
            bodyStyle={{ padding: '48px 40px' }}
          >
            <Row gutter={[48, 36]} align="middle">
              <Col xs={24} lg={14}>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(132, 204, 22, 0.2)',
                    color: '#A3E635',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  Enterprise Wholesale &amp; Supply
                </div>
                <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>
                  Plants for Every Scale: Commercial &amp; Bulk Procurement
                </h2>
                <p style={{ color: '#DDE8E1', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
                  Whether supplying a 500-villa master development, a luxury resort in Dubai, or a national botanical garden, PlantX Global provides scheduled forward-nursery contracts, volume supply, and certified freight.
                </p>

                <Row gutter={[20, 20]} style={{ marginBottom: '32px' }}>
                  <Col xs={12} sm={6}>
                    <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ color: '#84CC16', fontSize: '20px', fontWeight: 800 }}>Bulk Orders</div>
                      <div style={{ color: '#DDE8E1', fontSize: '12px', marginTop: '4px' }}>Pallets to Reefer FCL</div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ color: '#84CC16', fontSize: '20px', fontWeight: 800 }}>Custom Sourcing</div>
                      <div style={{ color: '#DDE8E1', fontSize: '12px', marginTop: '4px' }}>Rare Mature Specs</div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ color: '#84CC16', fontSize: '20px', fontWeight: 800 }}>Project Quotes</div>
                      <div style={{ color: '#DDE8E1', fontSize: '12px', marginTop: '4px' }}>Itemized Proformas</div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div style={{ background: 'rgba(255,255,255,0.08)', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                      <div style={{ color: '#84CC16', fontSize: '20px', fontWeight: 800 }}>Full Phyto</div>
                      <div style={{ color: '#DDE8E1', fontSize: '12px', marginTop: '4px' }}>Quarantine Cleared</div>
                    </div>
                  </Col>
                </Row>

                <Space size="middle" wrap>
                  <Link to="/request-quote">
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        backgroundColor: '#84CC16',
                        borderColor: '#84CC16',
                        color: '#022C22',
                        fontWeight: 700,
                        height: '48px',
                        padding: '0 28px',
                      }}
                    >
                      Request Project Quotation
                    </Button>
                  </Link>
                  <Link to="/bulk-orders">
                    <Button
                      size="large"
                      style={{
                        color: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        background: 'transparent',
                        fontWeight: 600,
                        height: '48px',
                      }}
                    >
                      Upload Plant Manifest / BOQ
                    </Button>
                  </Link>
                </Space>
              </Col>

              <Col xs={24} lg={10}>
                <div
                  style={{
                    background: '#FFFFFF',
                    padding: '32px',
                    borderRadius: '20px',
                    color: '#17201B',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '16px' }}>
                    Quick RFQ Inquiry
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ padding: '12px', background: '#F7FAF7', borderRadius: '10px', fontSize: '13px' }}>
                      <strong>1. Volume Requirements:</strong> 100 - 50,000+ live specimens
                    </div>
                    <div style={{ padding: '12px', background: '#F7FAF7', borderRadius: '10px', fontSize: '13px' }}>
                      <strong>2. Freight Mode:</strong> Reefer Ocean Containers or Air Express
                    </div>
                    <div style={{ padding: '12px', background: '#F7FAF7', borderRadius: '10px', fontSize: '13px' }}>
                      <strong>3. Agronomy Assignment:</strong> Dedicated regional trade specialist
                    </div>
                    <Link to="/request-quote" style={{ marginTop: '6px' }}>
                      <Button type="primary" block style={{ background: '#064E3B', height: '42px', fontWeight: 600 }}>
                        Submit Project Inquiry
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </section>

      {/* 6. PAN-INDIA NURSERY SUPPLY & INTERSTATE LOGISTICS (#0F766E) */}
      <section className="plantx-section" style={{ background: '#FFFFFF' }}>
        <div className="plantx-container">
          <div className="plantx-teal-banner">
            <Row gutter={[48, 36]} align="middle">
              <Col xs={24} md={14}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255,255,255,0.15)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    color: '#99F6E4',
                    fontSize: '12px',
                    fontWeight: 700,
                    marginBottom: '16px',
                  }}
                >
                  <GlobalOutlined /> PAN-INDIA NURSERY LOGISTICS &amp; DIRECT SUPPLY
                </div>
                <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>
                  Pan-India Plant Supply from Kadiam
                </h2>
                <p style={{ color: '#E0F2FE', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Connecting the horticultural wealth of Kadiam (Andhra Pradesh) with real estate developers, landscape contractors, and government projects across India. We coordinate dedicated lorries, container trucks, and on-site crane placement.
                </p>
                <Link to="/import-export">
                  <Button
                    size="large"
                    style={{
                      background: '#FFFFFF',
                      color: '#0F766E',
                      fontWeight: 700,
                      border: 'none',
                      borderRadius: '10px',
                      height: '46px',
                    }}
                  >
                    Explore Pan-India Supply Routes &rarr;
                  </Button>
                </Link>
              </Col>
              <Col xs={24} md={10}>
                <div style={{ background: 'rgba(0,0,0,0.15)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '12px', fontSize: '15px' }}>
                    Major Supply Corridors from Kadiam:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Hyderabad', 'Bengaluru', 'Chennai', 'Mumbai', 'Delhi-NCR', 'Goa', 'Pune', 'Kolkata', 'Kochi', 'Ahmedabad', 'Visakhapatnam', 'Jaipur'].map((c) => (
                      <span
                        key={c}
                        style={{
                          background: 'rgba(255,255,255,0.12)',
                          color: '#FFFFFF',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 500,
                        }}
                      >
                        &bull; {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      {/* 7. LANDSCAPING SECTION */}
      <section className="plantx-section" style={{ background: '#F7FAF7' }}>
        <div className="plantx-container">
          <Row gutter={[48, 36]} align="middle">
            <Col xs={24} lg={12}>
              <span className="plantx-section-badge">Masterplan Landscaping</span>
              <h2 className="plantx-section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
                Transforming Spaces with Botanical Elegance
              </h2>
              <p style={{ color: '#64746B', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                From luxury private estates to world-class resorts and urban commercial parks, our team of landscape architects, horticulturists, and irrigation engineers design and execute breathtaking living environments.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircleOutlined style={{ color: '#059669', fontSize: '18px', marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#064E3B' }}>Complete Landscape Architecture &amp; Installation</strong>
                    <div style={{ fontSize: '13px', color: '#64746B' }}>3D concept visualization, site grading, and mature specimen crane placement.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircleOutlined style={{ color: '#059669', fontSize: '18px', marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#064E3B' }}>Smart Weather-Adaptive Irrigation Systems</strong>
                    <div style={{ fontSize: '13px', color: '#64746B' }}>Conservation-focused subsurface drip systems reducing water consumption by 40%.</div>
                  </div>
                </div>
              </div>

              <Link to="/services/landscaping">
                <Button
                  type="primary"
                  size="large"
                  style={{ background: '#064E3B', borderColor: '#064E3B', fontWeight: 600, borderRadius: '10px' }}
                >
                  Explore Landscaping Portfolio &rarr;
                </Button>
              </Link>
            </Col>

            <Col xs={24} lg={12}>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <img
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
                    alt="Luxury Landscaping Project"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' }}
                  />
                </Col>
                <Col span={12}>
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                    alt="Resort Palms Landscaping"
                    style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      {/* 8. WHY CHOOSE PLANTX GLOBAL (METRICS) */}
      <section className="plantx-section" style={{ background: '#022C22', color: '#FFFFFF' }}>
        <div className="plantx-container">
          <div className="plantx-section-header" style={{ marginBottom: '56px' }}>
            <span style={{ color: '#A3E635', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Why Choose PlantX Global
            </span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#FFFFFF', marginTop: '8px' }}>
              Global Scale. Proven Reliability. Botanical Passion.
            </h2>
            <p style={{ color: '#DDE8E1', fontSize: '15px' }}>
              Empowering architects, developers, and plant enthusiasts with an unbroken chain of horticultural excellence.
            </p>
          </div>

          <Row gutter={[24, 32]}>
            {companyMetrics.map((m, idx) => (
              <Col xs={12} sm={12} lg={6} key={idx}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '32px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '40px', fontWeight: 800, color: '#84CC16', lineHeight: 1, marginBottom: '8px' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94A39A' }}>{m.subtext}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="plantx-section" style={{ background: '#FFFFFF' }}>
        <div className="plantx-container">
          <div className="plantx-section-header">
            <span className="plantx-section-badge">Client Testimonials</span>
            <h2 className="plantx-section-title">Trusted by Global Industry Leaders</h2>
            <p className="plantx-section-desc">
              Hear how hospitality developers, landscape architects, and nursery owners rely on PlantX Global.
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {testimonials.map((t) => (
              <Col xs={24} md={8} key={t.id}>
                <Card
                  bordered
                  style={{
                    borderRadius: '16px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
                  }}
                  bodyStyle={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <div style={{ flexGrow: 1 }}>
                    <Rate disabled defaultValue={t.rating} style={{ color: '#FBBF24', fontSize: '14px', marginBottom: '16px' }} />
                    <p style={{ color: '#17201B', fontSize: '14px', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #EEF2F0', paddingTop: '16px' }}>
                    <Avatar size={44} src={t.avatar} />
                    <div>
                      <div style={{ fontWeight: 700, color: '#064E3B', fontSize: '14px' }}>{t.name}</div>
                      <div style={{ fontSize: '12px', color: '#64746B' }}>{t.title}</div>
                      <div style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>{t.company}</div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 10. NEWSLETTER SIGNUP */}
      <section style={{ background: '#ECFDF5', padding: '60px 0', borderTop: '1px solid #A7F3D0' }}>
        <div className="plantx-container" style={{ textAlign: 'center' }}>
          <span style={{ color: '#059669', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            Botanical Dispatch
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#064E3B', margin: '8px 0 12px 0' }}>
            Subscribe to Global Plant Availability &amp; Market Insights
          </h2>
          <p style={{ color: '#64746B', fontSize: '15px', maxWidth: '540px', margin: '0 auto 28px' }}>
            Receive monthly crop updates, rare specimen releases, international trade regulations, and seasonal landscaping guides directly to your inbox.
          </p>

          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
