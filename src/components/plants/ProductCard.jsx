import React from 'react';
import { Card, Button, Rate, Tooltip, Tag } from 'antd';
import {
  FileDoneOutlined,
  EyeOutlined,
  CheckCircleFilled,
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
        padding: '14px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
      cover={
        <div className="plantx-image-wrapper" style={{ height: '180px', position: 'relative' }}>
          {/* Main Image */}
          <Link to={`/plants/${plant.slug}`}>
            <img
              alt={plant.name}
              src={plant.images ? plant.images[0] : plant.image}
              style={{
                width: '100%',
                height: '180px',
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
              top: '10px',
              left: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              zIndex: 2,
            }}
          >
            {plant.isExotic && (
              <Tag
                color="#0F766E"
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: '9.5px',
                  borderRadius: '4px',
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
                  fontSize: '9.5px',
                  borderRadius: '4px',
                  border: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                }}
              >
                POPULAR
              </Tag>
            )}
          </div>
        </div>
      }
    >
      <div>
        {/* Category & Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.4px', color: '#059669', fontWeight: 700 }}>
            {plant.category}
          </span>
          <span style={{ fontSize: '10px', color: '#059669', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
            <CheckCircleFilled style={{ fontSize: '9px' }} /> Kadiam
          </span>
        </div>

        {/* Title */}
        <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 700, lineHeight: 1.3, minHeight: '36px' }}>
          <Link to={`/plants/${plant.slug}`} style={{ color: '#064E3B' }}>
            {plant.name}
          </Link>
        </h3>

        {/* Specimen Size */}
        <div style={{ fontSize: '11.5px', color: '#64746B', marginBottom: '6px' }}>
          Scale: <strong style={{ color: '#17201B' }}>{plant.size}</strong>
        </div>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
          <Rate disabled defaultValue={plant.rating} allowHalf style={{ fontSize: '11px', color: '#FBBF24' }} />
          <span style={{ fontSize: '11px', color: '#64746B', fontWeight: 600 }}>({plant.reviews || 0})</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ paddingTop: '8px', borderTop: '1px solid #F0F5F2' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <Button
            type="primary"
            icon={<FileDoneOutlined />}
            onClick={() => navigate(`/request-quote?plant=${encodeURIComponent(plant.name)}`)}
            style={{
              flex: 1,
              backgroundColor: '#059669',
              borderColor: '#059669',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '12px',
              height: '34px',
              padding: '0 8px',
            }}
          >
            Inquire
          </Button>

          <Tooltip title="View Full Botanical Specs">
            <Button
              shape="default"
              icon={<EyeOutlined />}
              onClick={() => navigate(`/plants/${plant.slug}`)}
              style={{
                borderRadius: '8px',
                borderColor: '#DDE8E1',
                height: '34px',
                width: '34px',
                color: '#064E3B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Tooltip>
        </div>
      </div>
    </Card>
  );
}
