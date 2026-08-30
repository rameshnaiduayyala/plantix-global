import React, { useState } from 'react';
import { Form, Input, Button, Select, message, Card, Row, Col } from 'antd';
import { SendOutlined, CheckCircleFilled } from '@ant-design/icons';

const { TextArea } = Input;

export default function ContactForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 100));
    setLoading(false);
    setSubmitted(true);
    message.success('Thank you! Your message has been sent to PlantX Global.');
  };

  if (submitted) {
    return (
      <Card
        bordered
        style={{
          borderRadius: '16px',
          textAlign: 'center',
          padding: '40px 20px',
          background: '#F0FDFA',
          borderColor: '#99F6E4',
        }}
      >
        <CheckCircleFilled style={{ fontSize: '48px', color: '#059669', marginBottom: '16px' }} />
        <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
          Message Successfully Sent
        </h3>
        <p style={{ color: '#64746B', fontSize: '14px', maxWidth: '440px', margin: '0 auto 20px' }}>
          Our international support team or regional nursery consultant will reply to your inquiry within 1 business day.
        </p>
        <Button
          type="primary"
          onClick={() => {
            setSubmitted(false);
            form.resetFields();
          }}
          style={{ background: '#059669', borderColor: '#059669', borderRadius: '8px' }}
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} requiredMark="optional">
      <Row gutter={[16, 0]}>
        <Col xs={24} sm={12}>
          <Form.Item
            name="fullName"
            label={<span style={{ fontWeight: 600 }}>Your Full Name</span>}
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Alexander Vance" size="large" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="email"
            label={<span style={{ fontWeight: 600 }}>Email Address</span>}
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input placeholder="alex@example.com" size="large" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="phone"
            label={<span style={{ fontWeight: 600 }}>Phone / Mobile</span>}
          >
            <Input placeholder="+1 (555) 000-0000" size="large" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            name="department"
            label={<span style={{ fontWeight: 600 }}>Inquiry Department</span>}
            initialValue="general"
          >
            <Select
              size="large"
              options={[
                { label: 'General Inquiries & Support', value: 'general' },
                { label: 'Bulk Nursery & Wholesale Supply', value: 'bulk' },
                { label: 'International Import / Export Desk', value: 'export' },
                { label: 'Commercial Landscaping Projects', value: 'landscaping' },
                { label: 'Collector & Rare Plant Sourcing', value: 'sourcing' },
              ]}
            />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            name="subject"
            label={<span style={{ fontWeight: 600 }}>Subject</span>}
            rules={[{ required: true, message: 'Please enter a subject' }]}
          >
            <Input placeholder="Inquiry regarding plant availability or shipping" size="large" />
          </Form.Item>
        </Col>

        <Col xs={24}>
          <Form.Item
            name="message"
            label={<span style={{ fontWeight: 600 }}>How can we help?</span>}
            rules={[{ required: true, message: 'Please write your message' }]}
          >
            <TextArea rows={5} placeholder="Tell us more about your project, plant requirements, or questions..." />
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
          backgroundColor: '#059669',
          borderColor: '#059669',
          height: '46px',
          fontWeight: 700,
          borderRadius: '10px',
        }}
        block
      >
        Send Message
      </Button>
    </Form>
  );
}
