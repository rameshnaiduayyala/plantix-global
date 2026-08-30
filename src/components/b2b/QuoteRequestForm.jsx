import React, { useState } from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Upload,
  Card,
  Row,
  Col,
  message,
} from 'antd';
import {
  FileDoneOutlined,
  UploadOutlined,
  SendOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import { quoteService } from '../../services/quoteService';

const { TextArea } = Input;

export default function QuoteRequestForm({ onSuccess }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await quoteService.submitQuote({
        ...values,
        targetDate: values.targetDate ? values.targetDate.format('YYYY-MM-DD') : '',
      });
      message.success('Quote request submitted successfully!');
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      message.error('Submission failed. Please check form values.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Card
        bordered
        style={{
          borderRadius: '16px',
          textAlign: 'center',
          padding: '48px 24px',
          background: '#F0FDFA',
          borderColor: '#99F6E4',
        }}
      >
        <CheckCircleFilled style={{ fontSize: '56px', color: '#0F766E', marginBottom: '16px' }} />
        <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
          Quotation Request Registered
        </h3>
        <p style={{ color: '#64746B', fontSize: '15px', maxWidth: '520px', margin: '0 auto 24px' }}>
          Thank you for reaching out to PlantX Global. Your dedicated corporate account executive will generate a tailored commercial quote within 24 hours.
        </p>
        <Button
          type="primary"
          onClick={() => {
            setSubmitted(false);
            form.resetFields();
          }}
          style={{ background: '#0F766E', borderColor: '#0F766E', borderRadius: '8px' }}
        >
          Submit Another RFQ
        </Button>
      </Card>
    );
  }

  return (
    <Card
      bordered
      style={{
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(6, 78, 59, 0.05)',
      }}
      bodyStyle={{ padding: '32px' }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#064E3B', margin: 0 }}>
          Request Formal Commercial Quotation
        </h2>
        <p style={{ color: '#64746B', fontSize: '14px', marginTop: '4px' }}>
          Provide project specifications for volume wholesale pricing, phytosanitary export documents, and container logistics.
        </p>
      </div>

      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark="optional">
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="company"
              label={<span style={{ fontWeight: 600 }}>Company / Entity Name</span>}
              rules={[{ required: true, message: 'Please enter company name' }]}
            >
              <Input placeholder="e.g. Skyline Real Estate Developers" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="contactPerson"
              label={<span style={{ fontWeight: 600 }}>Authorized Contact Name</span>}
              rules={[{ required: true, message: 'Please enter contact person name' }]}
            >
              <Input placeholder="e.g. Elena Rostova" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label={<span style={{ fontWeight: 600 }}>Corporate Email</span>}
              rules={[{ required: true, type: 'email', message: 'Please enter valid work email' }]}
            >
              <Input placeholder="elena@skylinedev.com" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="phone"
              label={<span style={{ fontWeight: 600 }}>Phone / International Contact</span>}
              rules={[{ required: true, message: 'Please enter phone' }]}
            >
              <Input placeholder="+971 50 123 4567" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="businessType"
              label={<span style={{ fontWeight: 600 }}>Business Classification</span>}
              rules={[{ required: true, message: 'Please select business type' }]}
            >
              <Select
                size="large"
                placeholder="Select business type"
                options={[
                  { label: 'Commercial Property Developer', value: 'Developer' },
                  { label: 'Landscape Architecture Contractor', value: 'Landscaper' },
                  { label: 'Hotel & Resort Hospitality Group', value: 'Hospitality' },
                  { label: 'Wholesale Nursery & Garden Center', value: 'Nursery' },
                  { label: 'Government / Municipal Agency', value: 'Municipal' },
                  { label: 'International Botanical Importer', value: 'Importer' },
                ]}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="country"
              label={<span style={{ fontWeight: 600 }}>Country of Destination</span>}
              rules={[{ required: true, message: 'Please select country' }]}
            >
              <Select
                size="large"
                placeholder="Select country"
                options={[
                  { label: 'United States', value: 'United States' },
                  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
                  { label: 'United Kingdom', value: 'United Kingdom' },
                  { label: 'Germany', value: 'Germany' },
                  { label: 'Singapore', value: 'Singapore' },
                  { label: 'Saudi Arabia', value: 'Saudi Arabia' },
                  { label: 'Canada', value: 'Canada' },
                  { label: 'France', value: 'France' },
                ]}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="estimatedQuantity"
              label={<span style={{ fontWeight: 600 }}>Estimated Quantity &amp; Units</span>}
              rules={[{ required: true, message: 'Please indicate estimated volume' }]}
            >
              <Input placeholder="e.g. 500 Large Trees, 2000 Shrubs" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="targetDate"
              label={<span style={{ fontWeight: 600 }}>Desired Delivery Date</span>}
              rules={[{ required: true, message: 'Please pick expected delivery date' }]}
            >
              <DatePicker size="large" style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item
              name="destination"
              label={<span style={{ fontWeight: 600 }}>Delivery Location / Discharge Port</span>}
              rules={[{ required: true, message: 'Please specify destination' }]}
            >
              <Input placeholder="e.g. Jebel Ali Port or On-Site Project Staging Area" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item
              name="notes"
              label={<span style={{ fontWeight: 600 }}>Detailed Botanical Specifications</span>}
            >
              <TextArea
                rows={4}
                placeholder="Specify species varieties, trunk calipers, pot diameters, Root ball requirements, soil-less medium requirements for phytosanitary clearance..."
              />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item
              name="documents"
              label={<span style={{ fontWeight: 600 }}>Attach Project Documents / BOQ (Optional)</span>}
            >
              <Upload maxCount={1} beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Select PDF or Excel Document</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={loading}
          icon={<SendOutlined />}
          style={{
            backgroundColor: '#0F766E',
            borderColor: '#0F766E',
            height: '48px',
            fontSize: '16px',
            fontWeight: 700,
            borderRadius: '10px',
            marginTop: '8px',
          }}
          block
        >
          Submit Quote Request
        </Button>
      </Form>
    </Card>
  );
}
