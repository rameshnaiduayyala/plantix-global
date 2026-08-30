import React from 'react';
import { Card, Select, Checkbox, Button, Divider, Space } from 'antd';
import { FilterOutlined, ReloadOutlined } from '@ant-design/icons';
import { categories } from '../../data/categories';

export default function PlantFilterSidebar({
  filters,
  onFilterChange,
  onResetFilters,
}) {
  const lightOptions = [
    { label: 'All Sunlight Levels', value: '' },
    { label: 'Low Light / Shade', value: 'Low' },
    { label: 'Medium Indirect Sun', value: 'Medium' },
    { label: 'Bright Indirect Sun', value: 'Bright Indirect' },
    { label: 'Full Direct Sun', value: 'Full' },
  ];

  const sizeOptions = [
    { label: 'All Growth Scales', value: '' },
    { label: 'Medium (2 - 3 ft)', value: 'Medium' },
    { label: 'Large (3.5 - 5 ft)', value: 'Large' },
    { label: 'Extra Large / Specimen (5+ ft)', value: 'Specimen' },
  ];

  return (
    <Card
      bordered
      style={{
        borderRadius: '16px',
        boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
      }}
      bodyStyle={{ padding: '20px 18px' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#064E3B', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FilterOutlined style={{ color: '#059669' }} /> Filter Plants
        </h3>
        <Button
          type="link"
          size="small"
          onClick={onResetFilters}
          icon={<ReloadOutlined />}
          style={{ color: '#64746B', padding: 0 }}
        >
          Reset
        </Button>
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 700, fontSize: '13px', color: '#17201B', marginBottom: '8px' }}>
          Botanical Category
        </label>
        <Select
          style={{ width: '100%' }}
          value={filters.category || ''}
          onChange={(val) => onFilterChange('category', val)}
          options={[
            { label: 'All Categories', value: '' },
            ...categories.map((c) => ({ label: `${c.name} (${c.count})`, value: c.slug })),
          ]}
        />
      </div>

      <Divider style={{ margin: '16px 0' }} />

      {/* Light Requirements */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 700, fontSize: '13px', color: '#17201B', marginBottom: '8px' }}>
          Sunlight / Exposure
        </label>
        <Select
          style={{ width: '100%' }}
          value={filters.light || ''}
          onChange={(val) => onFilterChange('light', val)}
          options={lightOptions}
        />
      </div>

      <Divider style={{ margin: '16px 0' }} />

      {/* Plant Size */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: 700, fontSize: '13px', color: '#17201B', marginBottom: '8px' }}>
          Mature Size &amp; Pot Scale
        </label>
        <Select
          style={{ width: '100%' }}
          value={filters.size || ''}
          onChange={(val) => onFilterChange('size', val)}
          options={sizeOptions}
        />
      </div>

      <Divider style={{ margin: '16px 0' }} />

      {/* Special Highlights Checkboxes */}
      <div>
        <label style={{ display: 'block', fontWeight: 700, fontSize: '13px', color: '#17201B', marginBottom: '10px' }}>
          Botanical Classification
        </label>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Checkbox
            checked={filters.isExotic === true}
            onChange={(e) => onFilterChange('isExotic', e.target.checked ? true : null)}
          >
            Rare &amp; Exotic Varieties
          </Checkbox>
          <Checkbox
            checked={filters.inStockOnly === true}
            onChange={(e) => onFilterChange('inStockOnly', e.target.checked)}
          >
            Active Nursery Propagation
          </Checkbox>
        </Space>
      </div>
    </Card>
  );
}
