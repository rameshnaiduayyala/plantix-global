import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Rate,
  Button,
  Tag,
  Divider,
  Breadcrumb,
  Card,
  Tooltip,
  message,
} from 'antd';
import {
  FileDoneOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
  ShareAltOutlined,
  DownloadOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import { productService } from '../../services/productService';
import PlantGallery from '../../components/plants/PlantGallery';
import PlantCareTabs from '../../components/plants/PlantCareTabs';
import ProductCard from '../../components/plants/ProductCard';
import { DetailSkeleton } from '../../components/common/LoadingSkeleton';
import EmptyState from '../../components/common/EmptyState';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [plant, setPlant] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: plant ? `${plant.name} | Specimen Details` : 'Plant Details',
    description: plant ? plant.description : 'PlantX Global botanical specimen specifications and nursery availability.',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(true);
    productService
      .getProductBySlug(slug)
      .then((data) => {
        setPlant(data);
        return productService.getRelatedProducts(data.categorySlug, data.id, 4);
      })
      .then((rel) => {
        setRelated(rel);
      })
      .catch((err) => {
        console.error(err);
        setPlant(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="plantx-container" style={{ padding: '40px 24px' }}>
        <DetailSkeleton />
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="plantx-container" style={{ padding: '60px 24px' }}>
        <EmptyState
          title="Botanical Specimen Not Found"
          description="The requested plant does not exist or may have been rotated out of current season nursery production."
          actionText="Back to Catalog"
          actionTo="/plants"
        />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      message.success('Link copied to clipboard!');
    }
  };

  const handleDownloadSpec = () => {
    message.success(`Generating botanical specification sheet for ${plant.name}...`);
  };

  return (
    <div style={{ padding: '24px 0 80px', backgroundColor: '#F7FAF7' }}>
      <div className="plantx-container">
        {/* Breadcrumbs */}
        <div style={{ marginBottom: '24px' }}>
          <Breadcrumb
            items={[
              { title: <Link to="/" style={{ color: '#059669' }}>Home</Link> },
              { title: <Link to="/plants" style={{ color: '#059669' }}>Plants</Link> },
              {
                title: (
                  <Link
                    to={`/plants?category=${plant.categorySlug}`}
                    style={{ color: '#059669' }}
                  >
                    {plant.category}
                  </Link>
                ),
              },
              { title: <span style={{ fontWeight: 600, color: '#17201B' }}>{plant.name}</span> },
            ]}
          />
        </div>

        {/* Specimen Main Section */}
        <Card
          bordered
          style={{
            borderRadius: '20px',
            background: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(6, 78, 59, 0.04)',
            marginBottom: '36px',
          }}
          bodyStyle={{ padding: '36px' }}
        >
          <Row gutter={[48, 40]}>
            {/* Left: Gallery */}
            <Col xs={24} md={12}>
              <PlantGallery images={plant.images} alt={plant.name} />
            </Col>

            {/* Right: Specimen Info & RFQ Action Panel */}
            <Col xs={24} md={12}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Tag color="#059669" style={{ fontWeight: 700, borderRadius: '6px' }}>
                    {plant.category.toUpperCase()}
                  </Tag>
                  {plant.isExotic && (
                    <Tag color="#0F766E" style={{ fontWeight: 700, borderRadius: '6px' }}>
                      RARE EXOTIC
                    </Tag>
                  )}
                  <Tag color="#064E3B" style={{ fontWeight: 700, borderRadius: '6px' }}>
                    EXPORT CERTIFIED
                  </Tag>
                </div>

                <Tooltip title="Share Specimen">
                  <Button
                    type="text"
                    shape="circle"
                    icon={<ShareAltOutlined />}
                    onClick={handleShare}
                  />
                </Tooltip>
              </div>

              <h1
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#064E3B',
                  lineHeight: 1.25,
                  margin: '12px 0 8px',
                }}
              >
                {plant.name}
              </h1>

              {/* SKU, Origin & Rating */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  marginBottom: '16px',
                  fontSize: '13px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Rate disabled defaultValue={plant.rating} allowHalf style={{ fontSize: '14px', color: '#FBBF24' }} />
                  <span style={{ fontWeight: 700, color: '#17201B' }}>{plant.rating}</span>
                  <span style={{ color: '#64746B' }}>({plant.reviews} reviews)</span>
                </div>
                <div style={{ color: '#94A39A' }}>|</div>
                <div style={{ color: '#64746B' }}>
                  SKU: <strong style={{ color: '#17201B' }}>{plant.sku}</strong>
                </div>
                <div style={{ color: '#94A39A' }}>|</div>
                <div>
                  <span style={{ color: '#059669', fontWeight: 600 }}>
                    <CheckCircleFilled /> In Nursery Production
                  </span>
                </div>
              </div>

              {/* Specification Highlight Panel */}
              <div
                style={{
                  padding: '20px',
                  background: '#F7FAF7',
                  borderRadius: '12px',
                  border: '1px solid #DDE8E1',
                  marginBottom: '24px',
                }}
              >
                <div style={{ fontSize: '13px', color: '#064E3B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
                  Horticultural Specifications
                </div>
                <Row gutter={[16, 12]}>
                  <Col span={12}>
                    <div style={{ fontSize: '13px', color: '#64746B' }}>
                      Mature Scale: <strong style={{ color: '#17201B', display: 'block' }}>{plant.size}</strong>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ fontSize: '13px', color: '#64746B' }}>
                      Root-Ball Container: <strong style={{ color: '#17201B', display: 'block' }}>{plant.potSize}</strong>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ fontSize: '13px', color: '#64746B' }}>
                      Sunlight Exposure: <strong style={{ color: '#17201B', display: 'block' }}>{plant.light}</strong>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div style={{ fontSize: '13px', color: '#64746B' }}>
                      Botanical Origin: <strong style={{ color: '#17201B', display: 'block' }}>{plant.origin}</strong>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Commercial Inquiry CTA Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to={`/request-quote?plant=${encodeURIComponent(plant.name)}`}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<FileDoneOutlined />}
                    style={{
                      width: '100%',
                      backgroundColor: '#059669',
                      borderColor: '#059669',
                      fontWeight: 700,
                      height: '48px',
                      borderRadius: '10px',
                      fontSize: '15px',
                    }}
                  >
                    Request Project Quotation for this Plant
                  </Button>
                </Link>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link to="/bulk-orders" style={{ flex: 1 }}>
                    <Button
                      size="large"
                      style={{
                        width: '100%',
                        backgroundColor: '#064E3B',
                        borderColor: '#064E3B',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        height: '44px',
                        borderRadius: '10px',
                      }}
                    >
                      Bulk Order Manifest Desk
                    </Button>
                  </Link>

                  <Button
                    size="large"
                    icon={<DownloadOutlined />}
                    onClick={handleDownloadSpec}
                    style={{
                      borderRadius: '10px',
                      borderColor: '#DDE8E1',
                      height: '44px',
                      fontWeight: 600,
                    }}
                  >
                    Spec Sheet (PDF)
                  </Button>
                </div>
              </div>

              {/* Guarantees bar */}
              <div
                style={{
                  marginTop: '28px',
                  paddingTop: '20px',
                  borderTop: '1px solid #EEF2F0',
                  display: 'flex',
                  gap: '20px',
                  fontSize: '12px',
                  color: '#64746B',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <SafetyCertificateOutlined style={{ color: '#059669', fontSize: '16px' }} />
                  <span>30-Day Botanical Health Guarantee</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <GlobalOutlined style={{ color: '#0F766E', fontSize: '16px' }} />
                  <span>Phytosanitary Export Compliant</span>
                </div>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Detailed Tabs: Description, Care, Shipping, Reviews */}
        <Card
          bordered
          style={{
            borderRadius: '20px',
            background: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(6, 78, 59, 0.04)',
            marginBottom: '48px',
          }}
          bodyStyle={{ padding: '32px' }}
        >
          <PlantCareTabs plant={plant} />
        </Card>

        {/* Similar Botanical Selections */}
        {related.length > 0 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
                Similar {plant.category}
              </h2>
              <Link to={`/plants?category=${plant.categorySlug}`}>
                <Button type="link" style={{ color: '#059669', fontWeight: 600 }}>
                  View All &rarr;
                </Button>
              </Link>
            </div>
            <Row gutter={[20, 24]}>
              {related.map((p) => (
                <Col xs={12} sm={12} md={8} lg={6} key={p.id}>
                  <ProductCard plant={p} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}
