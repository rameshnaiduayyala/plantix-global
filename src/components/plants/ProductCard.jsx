import React from 'react';
import { Card, Button, Rate, Tooltip, Tag } from 'antd';
import {
  FileDoneOutlined,
  EyeOutlined,
  CheckCircleFilled,
  GlobalOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({ plant }) {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      className="plantx-hover-card"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#FFFFFF',
      }}
      bodyStyle={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
      cover={
        <div className="plantx-image-wrapper" style={{ height: '220px', position: 'relative' }}>
          {/* Main Image */}
          <Link to={`/plants/${plant.slug}`}>
            <img
              alt={plant.name}
              src={plant.images ? plant.images[0] : plant.image}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                display: 'block',
              }}
              loading="lazy"
            />
          </Link>

          {/* Badges Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 2,
            }}
          >
            {plant.isExotic && (
              <Tag
                color="#0F766E"
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: '10px',
                  borderRadius: '6px',
                  border: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                }}
              >
                RARE EXOTIC
              </Tag>
            )}
            {plant.bestseller && (
              <Tag
                color="#059669"
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: '10px',
                  borderRadius: '6px',
                  border: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                }}
              >
                POPULAR SPECIMEN
              </Tag>
            )}
          </div>
        </div>
      }
    >
      <div>
        {/* Category & Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#059669', fontWeight: 700 }}>
            {plant.category}
          </span>
          <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}>
            <CheckCircleFilled style={{ fontSize: '10px' }} /> Nursery Certified
          </span>
        </div>

        {/* Title */}
        <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: 700, lineHeight: 1.3, minHeight: '38px' }}>
          <Link to={`/plants/${plant.slug}`} style={{ color: '#064E3B' }}>
            {plant.name}
          </Link>
        </h3>

        {/* Specimen Size / Container */}
        <div style={{ fontSize: '12px', color: '#64746B', marginBottom: '8px' }}>
          Scale: <strong style={{ color: '#17201B' }}>{plant.size}</strong>
        </div>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <Rate disabled defaultValue={plant.rating} allowHalf style={{ fontSize: '12px', color: '#FBBF24' }} />
          <span style={{ fontSize: '12px', color: '#64746B', fontWeight: 600 }}>({plant.reviews || 0})</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ paddingTop: '10px', borderTop: '1px solid #F0F5F2' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            type="primary"
            icon={<FileDoneOutlined />}
            onClick={() => navigate(`/request-quote?plant=${encodeURIComponent(plant.name)}`)}
            style={{
              flex: 1,
              backgroundColor: '#059669',
              borderColor: '#059669',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '13px',
              height: '38px',
            }}
          >
            Inquire / Quote
          </Button>

          <Tooltip title="View Full Botanical Specs">
            <Button
              shape="default"
              icon={<EyeOutlined />}
              onClick={() => navigate(`/plants/${plant.slug}`)}
              style={{
                borderRadius: '10px',
                borderColor: '#DDE8E1',
                height: '38px',
                color: '#064E3B',
              }}
            />
          </Tooltip>
        </div>
      </div>
    </Card>
  );
}
