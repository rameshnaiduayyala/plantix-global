import React, { useState } from 'react';
import { Row, Col } from 'antd';

export default function PlantGallery({ images = [], alt = 'Plant Image' }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  if (!images || images.length === 0) {
    return (
      <div
        style={{
          height: '300px',
          background: '#F0F5F2',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#94A39A',
        }}
      >
        No Image Available
      </div>
    );
  }

  return (
    <div>
      {/* Large Featured Image View */}
      <div
        className="plantx-gallery-main"
        style={{
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#F0F5F2',
          marginBottom: '12px',
          border: '1px solid #DDE8E1',
        }}
      >
        <img
          src={selectedImage || images[0]}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>

      {/* Thumbnail Bar */}
      {images.length > 1 && (
        <Row gutter={[8, 8]}>
          {images.map((img, idx) => {
            const isSelected = (selectedImage || images[0]) === img;
            return (
              <Col span={6} key={idx}>
                <div
                  onClick={() => setSelectedImage(img)}
                  style={{
                    height: '70px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid #059669' : '1px solid #DDE8E1',
                    opacity: isSelected ? 1 : 0.7,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <img
                    src={img}
                    alt={`${alt} thumbnail ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      )}

      <style>{`
        .plantx-gallery-main {
          height: 420px;
        }
        @media (max-width: 768px) {
          .plantx-gallery-main {
            height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
