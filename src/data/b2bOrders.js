export const b2bOrders = [
  {
    id: 'PXG-B2B-10928',
    poNumber: 'PO-AZURA-2026-09',
    company: 'Azura Luxury Resorts & Spa',
    contactPerson: 'David Sterling (Head of Landscaping)',
    orderDate: '2026-08-15',
    status: 'In Production',
    statusTag: 'processing',
    totalItems: 450,
    totalAmount: 18450.00,
    paidAmount: 9225.00, // 50% deposit
    paymentTerms: '50% Advance / Net 30 on Port Dispatch',
    destinationPort: 'Port of Dubai / Jebel Ali (UAE)',
    phytosanitaryStatus: 'Approved & Certified',
    containerType: '1x 40ft High-Cube Reefer (18°C Controlled)',
    estimatedShippingDate: '2026-09-10',
    products: [
      { name: 'Phoenix Dactylifera (Medjool Date Palm)', qty: 12, unitPrice: 520.00, subtotal: 6240.00 },
      { name: 'Dypsis Lutescens (Areca Golden Palm 5ft)', qty: 150, unitPrice: 34.00, subtotal: 5100.00 },
      { name: 'Bougainvillea Royal Purple (Trellis 4ft)', qty: 200, unitPrice: 21.00, subtotal: 4200.00 },
      { name: 'Monstera Deliciosa Specimen (Interior)', qty: 88, unitPrice: 33.00, subtotal: 2910.00 }
    ],
    timeline: [
      { date: '2026-08-15', title: 'Purchase Order Signed & 50% Deposit Received' },
      { date: '2026-08-18', title: 'Phytosanitary Inspection Passed by Agriculture Dept' },
      { date: '2026-08-25', title: 'Hardening & Pre-Shipment Hydration in Greenhouse 4' },
      { date: '2026-09-08 (Planned)', title: 'Container Reefer Loading & Sea Freight Dispatch' }
    ]
  },
  {
    id: 'PXG-B2B-10814',
    poNumber: 'PO-GREENLIVING-44',
    company: 'GreenLiving Urban Landscapes UK',
    contactPerson: 'Sophie Turner',
    orderDate: '2026-07-28',
    status: 'Delivered',
    statusTag: 'success',
    totalItems: 320,
    totalAmount: 14600.00,
    paidAmount: 14600.00,
    paymentTerms: 'Net 30 (Settled)',
    destinationPort: 'Port of Southampton (UK)',
    phytosanitaryStatus: 'Cleared Customs',
    containerType: '1x 20ft Temperature-Controlled',
    estimatedShippingDate: '2026-08-12',
    products: [
      { name: 'Olea Europaea Mature Olive Trees', qty: 20, unitPrice: 220.00, subtotal: 4400.00 },
      { name: 'Buxus Topiary Spheres (50cm)', qty: 180, unitPrice: 38.00, subtotal: 6840.00 },
      { name: 'Ficus Lyrata (Fiddle Leaf 6ft)', qty: 120, unitPrice: 28.00, subtotal: 3360.00 }
    ],
    timeline: [
      { date: '2026-07-28', title: 'PO Approved' },
      { date: '2026-08-04', title: 'Packed & Dispatched' },
      { date: '2026-08-15', title: 'Customs Cleared & Delivered to Site' }
    ]
  },
  {
    id: 'PXG-B2B-10701',
    poNumber: 'PO-MARRIOT-SG-01',
    company: 'Marina Bay Hospitality Group',
    contactPerson: 'Marcus Lim',
    orderDate: '2026-08-22',
    status: 'Pending Customs Clearance',
    statusTag: 'warning',
    totalItems: 110,
    totalAmount: 9800.00,
    paidAmount: 4900.00,
    paymentTerms: 'Letter of Credit (L/C)',
    destinationPort: 'Singapore Port (PSA)',
    phytosanitaryStatus: 'Inspection in Progress at Destination',
    containerType: 'Air Cargo Express Pallets',
    estimatedShippingDate: '2026-08-24',
    products: [
      { name: 'Monstera Albo Variegata Collector', qty: 30, unitPrice: 160.00, subtotal: 4800.00 },
      { name: 'Philodendron Pink Princess Cultivar', qty: 40, unitPrice: 85.00, subtotal: 3400.00 },
      { name: 'Strelitzia Nicolai Giant Specimen', qty: 40, unitPrice: 40.00, subtotal: 1600.00 }
    ],
    timeline: [
      { date: '2026-08-22', title: 'Air Freight Dispatched' },
      { date: '2026-08-25', title: 'Arrived at Changi Cargo Terminal' }
    ]
  }
];

export const b2bStats = {
  activeOrdersCount: 4,
  totalSpend: 142850.00,
  pendingQuotesCount: 2,
  shippedContainers: 18,
  livePlantsSupplied: 24500,
};
