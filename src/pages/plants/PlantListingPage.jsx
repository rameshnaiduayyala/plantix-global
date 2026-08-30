import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Input, Pagination, Drawer, Button } from 'antd';
import {
  SearchOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import ProductGrid from '../../components/plants/ProductGrid';
import PlantFilterSidebar from '../../components/plants/PlantFilterSidebar';
import { ProductSkeletonGrid } from '../../components/common/LoadingSkeleton';
import { productService } from '../../services/productService';

export default function PlantListingPage() {
  useSEO({
    title: 'Botanical Plant Catalog | PlantX Global Nursery',
    description: 'Explore the full PlantX Global plant catalog. Indoor specimens, architectural palms, mature landscape trees, and rare exotic cultivars.',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const searchParam = searchParams.get('search') || '';

  const [plants, setPlants] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filters State
  const [filters, setFilters] = useState({
    category: categoryParam,
    search: searchParam,
    light: '',
    size: '',
    isExotic: null,
    inStockOnly: false,
    sort: 'featured',
  });

  useEffect(() => {
    if (categoryParam !== filters.category) {
      setFilters((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  useEffect(() => {
    fetchProducts();
  }, [filters, page, pageSize]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await productService.getProducts({
        category: filters.category,
        search: filters.search,
        light: filters.light,
        size: filters.size,
        isExotic: filters.isExotic,
        sort: filters.sort,
        page: page,
        limit: pageSize,
      });

      let results = res.data;
      if (filters.inStockOnly) {
        results = results.filter((p) => p.stock > 0);
      }

      setPlants(results);
      setTotal(res.total);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      category: '',
      search: '',
      light: '',
      size: '',
      isExotic: null,
      inStockOnly: false,
      sort: 'featured',
    });
    setSearchParams({});
    setPage(1);
  };

  return (
    <div>
      <PageHero
        badge="Botanical Catalog"
        title="Explore Our Plants"
        description="Premium interior foliage, rare exotic specimens, architectural palms, and hardy landscape selections nurtured for global project delivery."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Plants' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '36px 24px 80px' }}>
        <Row gutter={[32, 32]}>
          {/* Left Desktop Filter Sidebar */}
          <Col xs={0} lg={6}>
            <PlantFilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </Col>

          {/* Right Main Plant Catalog Area */}
          <Col xs={24} lg={18}>
            {/* Top Toolbar: Search, Sort, Mobile Filter, Count */}
            <div
              style={{
                background: '#FFFFFF',
                padding: '16px 20px',
                borderRadius: '16px',
                border: '1px solid #DDE8E1',
                marginBottom: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 240px' }}>
                <Input
                  placeholder="Search by botanical name, SKU, or variety..."
                  prefix={<SearchOutlined style={{ color: '#94A39A' }} />}
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  allowClear
                  style={{ borderRadius: '8px' }}
                />
                <Button
                  className="plantx-mobile-filter-btn"
                  icon={<FilterOutlined />}
                  onClick={() => setMobileFilterOpen(true)}
                  style={{ display: 'none' }}
                >
                  Filters
                </Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '13px', color: '#64746B', whiteSpace: 'nowrap' }}>
                  Showing <strong>{plants.length}</strong> of <strong>{total}</strong> varieties
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '13px', color: '#17201B', fontWeight: 600 }}>Sort:</span>
                  <Select
                    value={filters.sort}
                    onChange={(val) => handleFilterChange('sort', val)}
                    style={{ width: '170px' }}
                    options={[
                      { label: 'Featured Specimens', value: 'featured' },
                      { label: 'Alphabetical (A-Z)', value: 'name-asc' },
                      { label: 'Popularity & Rating', value: 'rating' },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Product Grid Area */}
            {loading ? (
              <ProductSkeletonGrid count={8} />
            ) : (
              <ProductGrid plants={plants} />
            )}

            {/* Pagination */}
            {total > pageSize && (
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <Pagination
                  current={page}
                  pageSize={pageSize}
                  total={total}
                  onChange={(p, ps) => {
                    setPage(p);
                    setPageSize(ps);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  showSizeChanger
                  pageSizeOptions={['8', '12', '24']}
                />
              </div>
            )}
          </Col>
        </Row>
      </div>

      {/* Mobile Filters Drawer */}
      <Drawer
        title="Filter Botanical Catalog"
        placement="left"
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        width={300}
      >
        <PlantFilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={() => {
            handleResetFilters();
            setMobileFilterOpen(false);
          }}
        />
        <Button
          type="primary"
          block
          onClick={() => setMobileFilterOpen(false)}
          style={{ marginTop: '16px', background: '#059669' }}
        >
          Apply Filters
        </Button>
      </Drawer>

      <style>{`
        @media (max-width: 991px) {
          .plantx-mobile-filter-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
}
