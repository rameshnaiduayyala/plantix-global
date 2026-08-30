import React from 'react';
import { Card, Skeleton, Row, Col } from 'antd';

export function ProductSkeletonGrid({ count = 8 }) {
  return (
    <Row gutter={[24, 24]}>
      {Array.from({ length: count }).map((_, i) => (
        <Col xs={12} sm={12} md={8} lg={6} key={i}>
          <Card
            bordered
            style={{ borderRadius: 16, overflow: 'hidden' }}
            cover={<div style={{ height: 220, background: '#EEF2F0' }} />}
          >
            <Skeleton active paragraph={{ rows: 2 }} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export function DetailSkeleton() {
  return (
    <div style={{ padding: '40px 0' }}>
      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <div style={{ height: 420, background: '#EEF2F0', borderRadius: 16 }} />
        </Col>
        <Col xs={24} md={12}>
          <Skeleton active paragraph={{ rows: 8 }} />
        </Col>
      </Row>
    </div>
  );
}
