import React from 'react';
import { Row, Col, Card } from 'antd';
import { useSEO } from '../../utils/seo';
import PageHero from '../../components/common/PageHero';
import QuoteRequestForm from '../../components/b2b/QuoteRequestForm';
import { SafetyCertificateOutlined, GlobalOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function RequestQuotePage() {
  useSEO({
    title: 'Request Commercial Quotation | PlantX Global',
    description: 'Submit an RFQ for large-scale landscaping, nursery wholesale supply, or international plant import/export.',
  });

  return (
    <div>
      <PageHero
        badge="Enterprise Commercial RFQ"
        title="Request a Project Quote"
        description="Receive customized volume pricing, shipping logistics calculations, and phytosanitary lead times from our corporate trade desk."
        breadcrumbs={[
          { title: 'Home', to: '/' },
          { title: 'Request Quote' },
        ]}
      />

      <div className="plantx-container" style={{ padding: '40px 24px 80px' }}>
        <Row gutter={[36, 36]}>
          <Col xs={24} lg={15}>
            <QuoteRequestForm />
          </Col>

          <Col xs={24} lg={9}>
            <Card
              bordered
              style={{
                borderRadius: '16px',
                background: '#FFFFFF',
                boxShadow: '0 4px 14px 0 rgba(6, 78, 59, 0.04)',
                marginBottom: '24px',
              }}
              bodyStyle={{ padding: '28px' }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#064E3B', marginBottom: '16px' }}>
                Why Work with PlantX Global?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <SafetyCertificateOutlined style={{ color: '#059669', fontSize: '20px', marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#064E3B', fontSize: '14px' }}>Guaranteed Varietal Trueness</strong>
                    <p style={{ color: '#64746B', fontSize: '13px', margin: '2px 0 0 0' }}>
                      Certified mother stock genetics and rigorous batch uniformity standards.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <GlobalOutlined style={{ color: '#0F766E', fontSize: '20px', marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#064E3B', fontSize: '14px' }}>Global Cold-Chain Shipping</strong>
                    <p style={{ color: '#64746B', fontSize: '13px', margin: '2px 0 0 0' }}>
                      Reefer ocean containers (18°C) and pressurized aircraft palletizing with live dataloggers.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <CheckCircleOutlined style={{ color: '#059669', fontSize: '20px', marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#064E3B', fontSize: '14px' }}>24-Hour RFQ Turnaround</strong>
                    <p style={{ color: '#64746B', fontSize: '13px', margin: '2px 0 0 0' }}>
                      Itemized proforma breakdown including CIF/FOB port logistics and phytosanitary certificates.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div style={{ background: '#ECFDF5', padding: '24px', borderRadius: '16px', border: '1px solid #A7F3D0' }}>
              <div style={{ fontWeight: 700, color: '#064E3B', fontSize: '15px', marginBottom: '6px' }}>
                Urgent Sourcing Inquiries?
              </div>
              <p style={{ color: '#64746B', fontSize: '13px', marginBottom: '12px' }}>
                Call our direct international trade desk for immediate inventory reservations.
              </p>
              <div style={{ color: '#059669', fontWeight: 800, fontSize: '16px' }}>
                +91 79894 19864 / Ramesh Ayyala
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
