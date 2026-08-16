import React from 'react';
import type { ServiceItem } from '../../data/servicesData';

interface ServiceCardProps {
  item: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    amber: 'bg-amber-100 text-amber-600',
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mb-4 ${colorMap[item.colorScheme]}`}>
        {item.number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};