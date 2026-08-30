import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Button,
  Dropdown,
  Input,
  Modal,
} from 'antd';
import {
  SearchOutlined,
  MenuOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  DownOutlined,
  ArrowRightOutlined,
  AppstoreOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import Logo from '../common/Logo';
import MobileDrawer from './MobileDrawer';
import { categories } from '../../data/categories';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('EN');

  const handleSearch = (val) => {
    const q = val || searchQuery;
    if (q && q.trim()) {
      navigate(`/search?q=${encodeURIComponent(q.trim())}`);
      setSearchModalOpen(false);
      setSearchQuery('');
    }
  };

  const languageItems = [
    { key: 'EN', label: 'English (EN)', onClick: () => setLanguage('EN') },
    { key: 'TE', label: 'తెలుగు (Telugu)', onClick: () => setLanguage('TE') },
    { key: 'HI', label: 'हिन्दी (Hindi)', onClick: () => setLanguage('HI') },
    { key: 'TA', label: 'தமிழ் (Tamil)', onClick: () => setLanguage('TA') },
    { key: 'KN', label: 'ಕನ್ನಡ (Kannada)', onClick: () => setLanguage('KN') },
  ];

  // Smart Plants Dropdown menu
  const plantsMenuItems = [
    {
      key: 'all-plants',
      label: <Link to="/plants" style={{ fontWeight: 700, color: '#064E3B', fontSize: '13px' }}>Explore All Plants &rarr;</Link>,
    },
    { type: 'divider' },
    ...categories.map((c) => ({
      key: c.slug,
      label: (
        <Link to={`/plants?category=${c.slug}`} style={{ display: 'flex', justifyContent: 'space-between', minWidth: '180px', fontSize: '13px' }}>
          <span>{c.name}</span>
          <span style={{ color: '#059669', fontSize: '11px', fontWeight: 600 }}>{c.count}+</span>
        </Link>
      ),
    })),
  ];

  // Smart Services Dropdown menu
  const servicesMenuItems = [
    {
      key: 'services-overview',
      label: <Link to="/services" style={{ fontWeight: 700, color: '#064E3B', fontSize: '13px' }}>All Services Overview</Link>,
    },
    { type: 'divider' },
    {
      key: 'landscaping',
      label: <Link to="/services/landscaping" style={{ fontSize: '13px' }}>Commercial &amp; Estate Landscaping</Link>,
      icon: <EnvironmentOutlined style={{ color: '#059669' }} />,
    },
    {
      key: 'sourcing',
      label: <Link to="/services/plant-sourcing" style={{ fontSize: '13px' }}>Bespoke Global Plant Sourcing</Link>,
      icon: <GlobalOutlined style={{ color: '#0F766E' }} />,
    },
    {
      key: 'nursery',
      label: <Link to="/nursery" style={{ fontSize: '13px' }}>Nursery Production &amp; Facilities</Link>,
      icon: <AppstoreOutlined style={{ color: '#84CC16' }} />,
    },
    {
      key: 'sustainability',
      label: <Link to="/sustainability" style={{ fontSize: '13px' }}>Environmental Sustainability</Link>,
    },
  ];

  // Link styling helper
  const getLinkStyle = (path, isPrefix = false) => {
    const isActive = isPrefix
      ? location.pathname.startsWith(path)
      : location.pathname === path;

    return {
      fontSize: '13px',
      fontWeight: isActive ? 600 : 500,
      color: isActive ? '#059669' : '#2D3748',
      letterSpacing: '0.15px',
      padding: '8px 0',
      position: 'relative',
      transition: 'color 0.15s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
    };
  };

  return (
    <>
      {/* 1. TOP UTILITY BAR */}
      <div
        style={{
          backgroundColor: '#022C22',
          color: '#DDE8E1',
          fontSize: '11px',
          padding: '4px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          className="plantx-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: '#84CC16',
                boxShadow: '0 0 5px #84CC16',
              }}
            />
            <span style={{ fontWeight: 700, color: '#A3E635', fontSize: '10.5px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              PlantX Global
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}>&bull;</span>
            <span style={{ color: '#DDE8E1', fontSize: '11px' }}>Plants. Landscapes. Worldwide.</span>
          </div>

          {/* Right Contact & Language */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="mailto:ayyalarameshnaidu@gmail.com"
              style={{
                color: '#DDE8E1',
                display: 'none',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                transition: 'color 0.2s',
              }}
              className="plantx-topbar-mail"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#A3E635')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#DDE8E1')}
            >
              <MailOutlined style={{ color: '#84CC16', fontSize: '11px' }} /> ayyalarameshnaidu@gmail.com
            </a>

            <a
              href="tel:+917989419864"
              style={{
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: 600,
                fontSize: '11px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#A3E635')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            >
              <PhoneOutlined style={{ color: '#84CC16', fontSize: '11px' }} /> +91 79894 19864
            </a>

            <Dropdown menu={{ items: languageItems }} trigger={['click']} placement="bottomRight">
              <span
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  color: '#DDE8E1',
                  fontWeight: 600,
                  fontSize: '11px',
                }}
              >
                <GlobalOutlined style={{ color: '#A3E635', fontSize: '11px' }} /> {language}{' '}
                <DownOutlined style={{ fontSize: '7px', color: '#94A39A' }} />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* 2. MAIN SMART STICKY HEADER */}
      <header
        className="plantx-sticky-header"
        style={{
          boxShadow: '0 2px 12px rgba(6, 78, 59, 0.05)',
        }}
      >
        <div className="plantx-container">
          <div
            style={{
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {/* Prominent Logo */}
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <Logo size="default" />
            </div>

            {/* Smart Navigation */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '22px',
              }}
              className="plantx-smart-nav"
            >
              {/* Home */}
              <Link to="/" style={getLinkStyle('/')}>
                Home
              </Link>

              {/* Plants Dropdown */}
              <Dropdown menu={{ items: plantsMenuItems }} placement="bottom" arrow>
                <Link to="/plants" style={getLinkStyle('/plants', true)}>
                  <span>Plants Catalog</span>
                  <DownOutlined style={{ fontSize: '8px', color: '#94A39A' }} />
                </Link>
              </Dropdown>

              {/* Bulk Orders */}
              <Link to="/bulk-orders" style={getLinkStyle('/bulk-orders')}>
                Bulk Orders
              </Link>

              {/* Pan-India Supply */}
              <Link to="/import-export" style={getLinkStyle('/import-export')}>
                Pan-India Supply
              </Link>

              {/* Services Dropdown */}
              <Dropdown menu={{ items: servicesMenuItems }} placement="bottom" arrow>
                <Link to="/services" style={getLinkStyle('/services', true)}>
                  <span>Services</span>
                  <DownOutlined style={{ fontSize: '8px', color: '#94A39A' }} />
                </Link>
              </Dropdown>

              {/* Nursery */}
              <Link to="/nursery" style={getLinkStyle('/nursery')}>
                Nursery &amp; Labs
              </Link>

              {/* About Us */}
              <Link to="/about" style={getLinkStyle('/about')}>
                About Us
              </Link>

              {/* Contact */}
              <Link to="/contact" style={getLinkStyle('/contact')}>
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Search Trigger Button */}
              <Button
                type="text"
                shape="circle"
                icon={<SearchOutlined style={{ fontSize: '17px', color: '#2D3748' }} />}
                onClick={() => setSearchModalOpen(true)}
                title="Search Botanical Catalog"
                style={{ width: '36px', height: '36px' }}
              />

              {/* Request Quote CTA Button */}
              <Link to="/request-quote" style={{ display: 'none' }} className="plantx-quote-cta">
                <Button
                  type="primary"
                  style={{
                    backgroundColor: '#059669',
                    borderColor: '#059669',
                    borderRadius: '8px',
                    fontWeight: 700,
                    height: '38px',
                    padding: '0 18px',
                    fontSize: '13px',
                    letterSpacing: '0.2px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 8px rgba(5, 150, 105, 0.25)',
                  }}
                >
                  <span>Request Quote</span>
                  <ArrowRightOutlined style={{ fontSize: '11px' }} />
                </Button>
              </Link>

              {/* Mobile Hamburger Button */}
              <Button
                type="text"
                className="plantx-mobile-btn"
                icon={<MenuOutlined style={{ fontSize: '22px', color: '#064E3B' }} />}
                onClick={() => setMobileDrawerOpen(true)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <Modal
        title="Search Botanical Catalog"
        open={searchModalOpen}
        onCancel={() => setSearchModalOpen(false)}
        footer={null}
        width={520}
        styles={{ body: { padding: '20px 0 10px 0' } }}
      >
        <Input.Search
          size="large"
          placeholder="Search species, palms, specimen trees (e.g. Monstera, Olive)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={(v) => handleSearch(v)}
          enterButton="Search"
          autoFocus
        />
        <div style={{ marginTop: '16px', display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '11.5px', color: '#64746B', fontWeight: 600 }}>Quick Searches:</span>
          {['Monstera', 'Olive Tree', 'Areca Palm', 'Bougainvillea', 'Exotic'].map((tag) => (
            <button
              key={tag}
              onClick={() => handleSearch(tag)}
              style={{
                background: '#F0F5F2',
                border: '1px solid #DDE8E1',
                borderRadius: '9999px',
                padding: '2px 9px',
                fontSize: '11.5px',
                color: '#064E3B',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </Modal>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        navLinks={[
          { label: 'Home', path: '/' },
          { label: 'Plants Catalog', path: '/plants' },
          { label: 'Categories', path: '/categories' },
          { label: 'Bulk Orders Desk', path: '/bulk-orders' },
          { label: 'Pan-India Supply', path: '/import-export' },
          { label: 'Services & Landscaping', path: '/services' },
          { label: 'Nursery & Facilities', path: '/nursery' },
          { label: 'About Us', path: '/about' },
          { label: 'Contact Us', path: '/contact' },
          { label: 'Plant Care Guides', path: '/plant-care' },
        ]}
      />

      <style>{`
        @media (min-width: 768px) {
          .plantx-topbar-mail {
            display: inline-flex !important;
          }
        }
        @media (min-width: 1024px) {
          .plantx-smart-nav {
            display: flex !important;
          }
          .plantx-quote-cta {
            display: inline-block !important;
          }
          .plantx-mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
