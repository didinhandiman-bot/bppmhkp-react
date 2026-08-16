import { ServiceCard } from '../components/common/ServiceCard';
import { servicesData } from '../data/servicesData';

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-16 px-4 max-w-6xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Layanan Unggulan</h2>
        <p className="text-slate-600 mt-2">Kemudahan akses informasi dan sertifikasi dalam satu pintu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} item={service} />
        ))}
      </div>
    </section>
  );
};