import React, { useState } from 'react';
import { Collapse, Tabs, Input, Card } from 'antd';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';

export default function FAQPage() {
  useSEO({
    title: 'Frequently Asked Questions & Help Center | PlantX Global',
    description: 'Find clear answers regarding plant care, bulk wholesale orders, phytosanitary import/export, and temperature-controlled shipping.',
  });

  const [search, setSearch] = useState('');

  const faqData = {
    orders: [
      {
        key: 'o1',
        label: 'How are live plants protected during transit?',
        children:
          'We use specialized corrugated timber-lined cartons with soil-retention membranes and thermal insulation to safeguard living root balls from shock and temperature fluctuations.',
      },
      {
        key: 'o2',
        label: 'What is your 30-day PlantX botanical arrival guarantee?',
        children:
          'If your plant arrives damaged or fails to adjust to its environment within 30 days of arrival despite following our care guidelines, we will promptly replace the specimen or issue a full credit.',
      },
    ],
    plants: [
      {
        key: 'p1',
        label: 'Are your rare variegated plants tissue-cultured or wild-harvested?',
        children:
          'PlantX Global strictly does NOT harvest from wild populations. 100% of our rare exotic specimens (such as Monstera Albo and Philodendron Pink Princess) are tissue-cultured in sterile laboratories and hardened in nursery conditions.',
      },
      {
        key: 'p2',
        label: 'How do I care for my plants after arrival?',
        children:
          'Allow your plants to rest in bright indirect light for 48 hours without repotting. Check root moisture and follow the personalized care parameters provided on each product detail page.',
      },
    ],
    bulk: [
      {
        key: 'b1',
        label: 'What are the minimum volume thresholds for B2B wholesale pricing?',
        children:
          'Wholesale pricing begins at 20 units for indoor foliage and 5 units for specimen trees/palms. For masterplan landscape projects requiring 500+ specimens, customized container pricing applies.',
      },
      {
        key: 'b2',
        label: 'Can I upload a custom plant manifest (BOQ)?',
        children:
          'Yes. Our Bulk Orders page supports drag-and-drop Excel, CSV, and PDF manifest uploads. Our agronomists will map your species list against our greenhouse availability within 24 hours.',
      },
    ],
    shipping: [
      {
        key: 's1',
        label: 'What shipping options are available for domestic orders?',
        children:
          'Standard temperature-controlled ground freight (3-5 days) and priority express air courier (1-2 days) with direct signature delivery.',
      },
      {
        key: 's2',
        label: 'Do you offer international container shipping for large trees?',
        children:
          'Yes, we ship 20ft and 40ft High-Cube refrigerated Reefer sea containers (18°C) directly to major ports in the UAE, Europe, Asia, and the Americas.',
      },
    ],
    trade: [
      {
        key: 't1',
        label: 'Are official Phytosanitary Certificates included with international exports?',
        children:
          'Yes. Every export shipment is inspected by accredited governmental agricultural authorities and issued an official Phytosanitary Certificate verifying pest-free status.',
      },
    ],
  };

  const tabItems = [
    { key: 'orders', label: 'Orders & Guarantee', children: <Collapse items={faqData.orders} defaultActiveKey={['o1']} /> },
    { key: 'plants', label: 'Plants & Origins', children: <Collapse items={faqData.plants} defaultActiveKey={['p1']} /> },
    { key: 'bulk', label: 'B2B & Bulk Orders', children: <Collapse items={faqData.bulk} defaultActiveKey={['b1']} /> },
    { key: 'shipping', label: 'Shipping & Freight', children: <Collapse items={faqData.shipping} defaultActiveKey={['s1']} /> },
    { key: 'trade', label: 'Import / Export Trade', children: <Collapse items={faqData.trade} defaultActiveKey={['t1']} /> },
  ];

  return (
    <div>
      <PageHero
        badge="Help &amp; Knowledge Base"
        title="Frequently Asked Questions"
        description="Clear answers on ordering, botanical care, bulk commercial supply, and international phytosanitary freight."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'FAQ' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '40px 24px 80px', maxWidth: '960px' }}>
        <Card
          bordered
          style={{ borderRadius: '16px', boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)' }}
          bodyStyle={{ padding: '32px' }}
        >
          <Tabs defaultActiveKey="orders" items={tabItems} size="large" />
        </Card>
      </div>
    </div>
  );
}
