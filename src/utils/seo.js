import { useEffect } from 'react';

export const useSEO = ({ title, description }) => {
  useEffect(() => {
    const baseTitle = 'PlantX Global | Plants. Landscapes. Worldwide.';
    document.title = title ? `${title} | PlantX Global` : baseTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
};
