import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import PublicLayout from '../layouts/PublicLayout';

// Public Pages
import HomePage from '../pages/home/HomePage';
import PlantListingPage from '../pages/plants/PlantListingPage';
import ProductDetailPage from '../pages/plants/ProductDetailPage';
import CategoriesPage from '../pages/plants/CategoriesPage';
import SearchPage from '../pages/support/SearchPage';

// Trade & Wholesale Pages
import BulkOrdersPage from '../pages/b2b/BulkOrdersPage';
import RequestQuotePage from '../pages/b2b/RequestQuotePage';
import ImportExportPage from '../pages/trade/ImportExportPage';

// Services Pages
import ServicesPage from '../pages/services/ServicesPage';
import LandscapingPage from '../pages/services/LandscapingPage';
import PlantSourcingPage from '../pages/services/PlantSourcingPage';

// Company Pages
import AboutPage from '../pages/company/AboutPage';
import NurseryPage from '../pages/company/NurseryPage';
import FacilitiesPage from '../pages/company/FacilitiesPage';
import SustainabilityPage from '../pages/company/SustainabilityPage';

// Support & Knowledge Pages
import ContactPage from '../pages/support/ContactPage';
import FAQPage from '../pages/support/FAQPage';
import ShippingPage from '../pages/support/ShippingPage';
import ReturnsPage from '../pages/support/ReturnsPage';
import PlantCarePage from '../pages/support/PlantCarePage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC SHOWCASE & TRADE ROUTES */}
      <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
      <Route path="/plants" element={<PublicLayout><PlantListingPage /></PublicLayout>} />
      <Route path="/plants/:slug" element={<PublicLayout><ProductDetailPage /></PublicLayout>} />
      <Route path="/categories" element={<PublicLayout><CategoriesPage /></PublicLayout>} />
      <Route path="/search" element={<PublicLayout><SearchPage /></PublicLayout>} />

      <Route path="/bulk-orders" element={<PublicLayout><BulkOrdersPage /></PublicLayout>} />
      <Route path="/request-quote" element={<PublicLayout><RequestQuotePage /></PublicLayout>} />
      <Route path="/import-export" element={<PublicLayout><ImportExportPage /></PublicLayout>} />

      <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
      <Route path="/services/landscaping" element={<PublicLayout><LandscapingPage /></PublicLayout>} />
      <Route path="/services/plant-sourcing" element={<PublicLayout><PlantSourcingPage /></PublicLayout>} />

      <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
      <Route path="/nursery" element={<PublicLayout><NurseryPage /></PublicLayout>} />
      <Route path="/facilities" element={<PublicLayout><FacilitiesPage /></PublicLayout>} />
      <Route path="/sustainability" element={<PublicLayout><SustainabilityPage /></PublicLayout>} />

      <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
      <Route path="/faq" element={<PublicLayout><FAQPage /></PublicLayout>} />
      <Route path="/shipping" element={<PublicLayout><ShippingPage /></PublicLayout>} />
      <Route path="/returns" element={<PublicLayout><ReturnsPage /></PublicLayout>} />
      <Route path="/plant-care" element={<PublicLayout><PlantCarePage /></PublicLayout>} />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
