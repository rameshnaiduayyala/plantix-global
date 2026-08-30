import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import ProductGrid from '../../components/plants/ProductGrid';
import { productService } from '../../services/productService';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [inputVal, setInputVal] = useState(query);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: query ? `Search: ${query} | PlantX Global` : 'Search Botanical Catalog',
    description: 'Search plants, specimen trees, and landscaping flora across PlantX Global.',
  });

  useEffect(() => {
    setInputVal(query);
    setLoading(true);
    productService
      .getProducts({ search: query, limit: 20 })
      .then((res) => {
        setResults(res.data);
      })
      .finally(() => setLoading(false));
  }, [query]);

  const handleSearch = (val) => {
    setSearchParams({ q: val });
  };

  return (
    <div>
      <PageHero
        badge="Botanical Search"
        title={query ? `Results for "${query}"` : 'Search PlantX Catalog'}
        description={`Showing ${results.length} botanical species matching your query.`}
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Search' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '40px 24px 80px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
          <Input.Search
            size="large"
            placeholder="Search by plant name, category, SKU..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onSearch={handleSearch}
            enterButton="Search"
            style={{ borderRadius: '8px' }}
          />
        </div>

        <ProductGrid
          plants={results}
          emptyTitle={`No botanical results found for "${query}"`}
          emptyDesc="Try searching with a broader term such as 'Palm', 'Monstera', 'Indoor', or 'Olive'."
        />
      </div>
    </div>
  );
}
