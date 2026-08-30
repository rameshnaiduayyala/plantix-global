import { initialQuotes } from '../data/quotes';

const QUOTES_STORAGE_KEY = 'plantx_quotes';

const getStoredQuotes = () => {
  const stored = localStorage.getItem(QUOTES_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return initialQuotes;
};

export const quoteService = {
  getQuotes: async () => {
    await new Promise((res) => setTimeout(res, 60));
    return getStoredQuotes();
  },

  submitQuote: async (quoteData) => {
    await new Promise((res) => setTimeout(res, 120));
    const current = getStoredQuotes();
    const newQuote = {
      id: `PXG-QT-${Math.floor(4000 + Math.random() * 5000)}`,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Under Evaluation',
      statusTag: 'processing',
      quoteAmount: null,
      ...quoteData,
    };
    const updated = [newQuote, ...current];
    localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(updated));
    return newQuote;
  },

  submitBulkOrderRequest: async (bulkOrderData) => {
    await new Promise((res) => setTimeout(res, 120));
    return quoteService.submitQuote({
      ...bulkOrderData,
      businessType: bulkOrderData.businessType || 'Bulk Wholesaler / Contractor',
      notes: `Bulk Request: ${bulkOrderData.requirements || 'Standard wholesale inquiry'}`,
    });
  },
};
