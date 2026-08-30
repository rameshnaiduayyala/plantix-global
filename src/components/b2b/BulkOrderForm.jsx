import React, { useState } from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Upload,
  Tabs,
  Card,
  Row,
  Col,
  message,
  Alert,
} from 'antd';
import {
  InboxOutlined,
  SendOutlined,
  CheckCircleFilled,
  FileDoneOutlined,
  AppstoreOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { quoteService } from '../../services/quoteService';

const { Dragger } = Upload;
const { TextArea } = Input;

export default function BulkOrderForm({ onSuccess }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [activeTab, setActiveTab] = useState('upload');

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await quoteService.submitBulkOrderRequest({
        ...values,
        requiredDate: values.requiredDate ? values.requiredDate.format('YYYY-MM-DD') : '',
        fileName: fileList.length > 0 ? fileList[0].name : null,
      });
      message.success('Your bulk order request has been submitted to our Global Trade Desk!');
      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      message.error('Failed to submit bulk request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const uploadProps = {
    name: 'file',
    multiple: false,
    fileList,
    beforeUpload: (file) => {
      const isAccepted =
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'text/csv' ||
        file.type === 'application/pdf' ||
        file.name.endsWith('.xlsx') ||
        file.name.endsWith('.csv') ||
        file.name.endsWith('.pdf');
      if (!isAccepted) {
        message.error('Please upload an Excel (.xlsx), CSV, or PDF file.');
        return Upload.LIST_IGNORE;
      }
      setFileList([file]);
      return false; // Prevent automatic HTTP post
    },
    onRemove: () => {
      setFileList([]);
    },
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
        <CheckCircleFilled style={{ fontSize: '56px', color: '#059669', marginBottom: '16px' }} />
        <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#064E3B', marginBottom: '8px' }}>
          Bulk Order Request Received
        </h3>
        <p style={{ color: '#64746B', fontSize: '15px', maxWidth: '520px', margin: '0 auto 24px' }}>
          Our international trade and nursery logistics specialists will review your botanical manifest and provide a detailed proforma quotation with shipping timelines within 24 business hours.
        </p>
        <Button
          type="primary"
          onClick={() => {
            setSubmitted(false);
            form.resetFields();
            setFileList([]);
          }}
          style={{ background: '#059669', borderColor: '#059669', borderRadius: '8px' }}
        >
          Submit Another Bulk Request
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
          Start Your Bulk Order
        </h2>
        <p style={{ color: '#64746B', fontSize: '14px', marginTop: '4px' }}>
          Fill out your business requirements or upload your botanical plant bill of quantities (BOQ).
        </p>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        style={{ marginBottom: '24px' }}
        items={[
          {
            key: 'upload',
            label: (
              <span>
                <FileDoneOutlined /> Upload Plant List (Excel/CSV/PDF)
              </span>
            ),
          },
          {
            key: 'custom',
            label: (
              <span>
                <SearchOutlined /> Custom Sourcing Specs
              </span>
            ),
          },
        ]}
      />

      {activeTab === 'upload' && (
        <div style={{ marginBottom: '24px' }}>
          <Dragger {...uploadProps} style={{ padding: '20px', background: '#F7FAF7', borderRadius: '12px' }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ color: '#059669', fontSize: '40px' }} />
            </p>
            <p style={{ fontWeight: 700, color: '#064E3B', fontSize: '15px', marginBottom: '4px' }}>
              Click or drag your plant manifest file to this area
            </p>
            <p style={{ color: '#64746B', fontSize: '13px', margin: 0 }}>
              Supports Excel (.xlsx), CSV (.csv), or PDF botanical specification lists.
            </p>
          </Dragger>
        </div>
      )}

      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark="optional">
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="company"
              label={<span style={{ fontWeight: 600 }}>Company / Developer Name</span>}
              rules={[{ required: true, message: 'Please enter company name' }]}
            >
              <Input placeholder="e.g. Azura Resorts Group" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="contactPerson"
              label={<span style={{ fontWeight: 600 }}>Contact Person</span>}
              rules={[{ required: true, message: 'Please enter contact person' }]}
            >
              <Input placeholder="e.g. David Sterling" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label={<span style={{ fontWeight: 600 }}>Work Email</span>}
              rules={[{ required: true, type: 'email', message: 'Please enter valid email' }]}
            >
              <Input placeholder="trade@company.com" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="phone"
              label={<span style={{ fontWeight: 600 }}>Phone / WhatsApp</span>}
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input placeholder="+1 (555) 019-2831" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="country"
              label={<span style={{ fontWeight: 600 }}>Country of Destination</span>}
              rules={[{ required: true, message: 'Please select destination country' }]}
            >
              <Select
                size="large"
                placeholder="Select destination"
                options={[
                  { label: 'United States', value: 'United States' },
                  { label: 'United Arab Emirates (UAE)', value: 'United Arab Emirates' },
                  { label: 'United Kingdom', value: 'United Kingdom' },
                  { label: 'Germany', value: 'Germany' },
                  { label: 'Singapore', value: 'Singapore' },
                  { label: 'Saudi Arabia (KSA)', value: 'Saudi Arabia' },
                  { label: 'Canada', value: 'Canada' },
                  { label: 'Qatar', value: 'Qatar' },
                  { label: 'Australia', value: 'Australia' },
                ]}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              name="requiredDate"
              label={<span style={{ fontWeight: 600 }}>Target Delivery Date</span>}
              rules={[{ required: true, message: 'Please select required date' }]}
            >
              <DatePicker size="large" style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item
              name="deliveryLocation"
              label={<span style={{ fontWeight: 600 }}>Delivery Port / Site Address</span>}
              rules={[{ required: true, message: 'Please specify port or site address' }]}
            >
              <Input placeholder="e.g. Jebel Ali Port, Dubai or Project Site Address" size="large" />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item
              name="requirements"
              label={<span style={{ fontWeight: 600 }}>Additional Requirements / Plant Quantities</span>}
            >
              <TextArea
                rows={4}
                placeholder="Please describe required species, pot sizes, mature tree heights, Phytosanitary requirements, or packaging guidelines..."
              />
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
            backgroundColor: '#064E3B',
            borderColor: '#064E3B',
            height: '48px',
            fontSize: '16px',
            fontWeight: 700,
            borderRadius: '10px',
            marginTop: '8px',
          }}
          block
        >
          Submit Bulk Order Request
        </Button>
      </Form>
    </Card>
  );
}
