import React from 'react';
import { Row, Col } from 'antd';
import ProductCard from './ProductCard';
import EmptyState from '../common/EmptyState';

export default function ProductGrid({
  plants = [],
  gutter = [20, 24],
  emptyTitle = 'No Plants Matching Selection',
  emptyDesc = 'Try clearing some filters or searching for another botanical term.',
}) {
  if (!plants || plants.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDesc} />;
  }

  return (
    <Row gutter={gutter}>
      {plants.map((plant) => (
        <Col xs={12} sm={12} md={8} lg={6} key={plant.id}>
          <ProductCard plant={plant} />
        </Col>
      ))}
    </Row>
  );
}
