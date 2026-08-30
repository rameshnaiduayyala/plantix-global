export const initialCustomerOrders = [
  {
    id: 'PXG-ORD-98421',
    date: '2026-08-24',
    status: 'Delivered',
    statusStep: 3, // 0: Placed, 1: Processing, 2: In Transit, 3: Delivered
    total: 227.99,
    subtotal: 197.99,
    shippingFee: 15.00,
    tax: 15.00,
    paymentMethod: 'Visa ending in 4242',
    trackingNumber: 'PXG-EXP-889021-US',
    carrier: 'PlantX Green Logistics Direct',
    estimatedDelivery: '2026-08-27',
    deliveryAddress: {
      fullName: 'Alexander Vance',
      street: '742 Evergreen Terrace',
      city: 'Seattle',
      state: 'WA',
      postalCode: '98101',
      country: 'United States',
      phone: '+1 (206) 555-0192',
    },
    items: [
      {
        id: 'pl-01',
        name: 'Monstera Deliciosa (Swiss Cheese Plant)',
        price: 49.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80',
        potSize: '12" Nursery Pot',
      },
      {
        id: 'pl-02',
        name: 'Ficus Lyrata (Fiddle Leaf Fig Tree)',
        price: 89.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=400&q=80',
        potSize: '14" Specimen Container',
      },
      {
        id: 'pl-06',
        name: 'Sansevieria Trifasciata (Snake Plant Zeylanica)',
        price: 34.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80',
        potSize: '10" Pot',
      }
    ],
    timeline: [
      { status: 'Order Placed', time: '2026-08-24 09:15 AM', description: 'Order confirmed and verified' },
      { status: 'Nursery Prep & Quality Check', time: '2026-08-25 11:30 AM', description: 'Hydration and packaging completed at Main Nursery' },
      { status: 'In Transit', time: '2026-08-26 08:00 AM', description: 'Loaded into climate-controlled carrier truck' },
      { status: 'Delivered', time: '2026-08-27 02:45 PM', description: 'Safely delivered and signed for' },
    ]
  },
  {
    id: 'PXG-ORD-98310',
    date: '2026-08-18',
    status: 'In Transit',
    statusStep: 2,
    total: 380.00,
    subtotal: 380.00,
    shippingFee: 0.00,
    tax: 0.00,
    paymentMethod: 'Mastercard ending in 8891',
    trackingNumber: 'PXG-EXP-772199-EU',
    carrier: 'EuroBotanical Express',
    estimatedDelivery: '2026-09-02',
    deliveryAddress: {
      fullName: 'Alexander Vance',
      street: '742 Evergreen Terrace',
      city: 'Seattle',
      state: 'WA',
      postalCode: '98101',
      country: 'United States',
      phone: '+1 (206) 555-0192',
    },
    items: [
      {
        id: 'pl-05',
        name: 'Olea Europaea (Mature European Olive Tree)',
        price: 380.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400&q=80',
        potSize: '45L Wooden Crate',
      }
    ],
    timeline: [
      { status: 'Order Placed', time: '2026-08-18 04:20 PM', description: 'Order confirmed and phytosanitary certificate generated' },
      { status: 'Nursery Prep & Quality Check', time: '2026-08-20 10:00 AM', description: 'Root ball baled and boxed in timber crate' },
      { status: 'In Transit', time: '2026-08-22 06:30 AM', description: 'Departed regional logistics center' },
    ]
  }
];
