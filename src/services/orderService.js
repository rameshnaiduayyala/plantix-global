import { initialCustomerOrders } from '../data/orders';
import { b2bOrders, b2bStats } from '../data/b2bOrders';

// In-memory / local storage store for session persistence
const ORDERS_STORAGE_KEY = 'plantx_customer_orders';
const B2B_ORDERS_STORAGE_KEY = 'plantx_b2b_orders';

const getStoredCustomerOrders = () => {
  const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return initialCustomerOrders;
};

const getStoredB2BOrders = () => {
  const stored = localStorage.getItem(B2B_ORDERS_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return b2bOrders;
};

export const orderService = {
  // Retail Orders
  getCustomerOrders: async () => {
    await new Promise((res) => setTimeout(res, 60));
    return getStoredCustomerOrders();
  },

  getOrderById: async (orderId) => {
    await new Promise((res) => setTimeout(res, 50));
    const orders = getStoredCustomerOrders();
    const order = orders.find((o) => o.id === orderId);
    if (!order) {
      throw new Error(`Order ${orderId} not found`);
    }
    return order;
  },

  createOrder: async (orderData) => {
    await new Promise((res) => setTimeout(res, 100));
    const current = getStoredCustomerOrders();
    const newOrder = {
      id: `PXG-ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      statusStep: 1,
      total: orderData.total,
      subtotal: orderData.subtotal,
      shippingFee: orderData.shippingFee || 15,
      tax: orderData.tax || 0,
      paymentMethod: orderData.paymentMethod || 'Credit Card',
      trackingNumber: `PXG-EXP-${Math.floor(100000 + Math.random() * 900000)}-GL`,
      carrier: 'PlantX Green Logistics Direct',
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      deliveryAddress: orderData.deliveryAddress,
      items: orderData.items,
      timeline: [
        {
          status: 'Order Placed',
          time: new Date().toLocaleString(),
          description: 'Order confirmed and registered in plant nursery system',
        },
      ],
    };

    const updated = [newOrder, ...current];
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
    return newOrder;
  },

  // B2B Orders
  getB2BOrders: async () => {
    await new Promise((res) => setTimeout(res, 60));
    return getStoredB2BOrders();
  },

  getB2BOrderById: async (b2bOrderId) => {
    await new Promise((res) => setTimeout(res, 50));
    const orders = getStoredB2BOrders();
    const order = orders.find((o) => o.id === b2bOrderId || o.poNumber === b2bOrderId);
    if (!order) {
      throw new Error(`B2B Order ${b2bOrderId} not found`);
    }
    return order;
  },

  getB2BStats: async () => {
    await new Promise((res) => setTimeout(res, 50));
    return b2bStats;
  },
};
