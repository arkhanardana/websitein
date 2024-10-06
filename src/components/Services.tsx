import React from "react";
import { Building2, BookOpen, Wrench, LucideIcon, UserRoundPen } from "lucide-react";

interface ServiceCardProps {
   icon: React.ReactElement<LucideIcon>;
   title: string;
   description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
   return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
         <div className="p-5">
            <div className="flex items-center">
               <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">{icon}</div>
               <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">{title}</h3>
            </div>
            <p className="mt-4 text-base text-gray-500">{description}</p>
         </div>
      </div>
   );
};

const ServicesSection = () => {
   return (
      <div className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 scroll-mt-0" id="services">
         <div className="max-w-7xl mx-auto">
            <p className="my-2 max-w-2xl text-lg font-semibold text-blue-700 sm:mx-auto text-center">Services</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">Apa Layanan Websitein?</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 sm:mx-auto text-center">
               Kami menyediakan berbagai layanan untuk memenuhi kebutuhan online anda. Dari profil perusahaan hingga
               website kustom, kami siap membantu.
            </p>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               <ServiceCard
                  icon={<Building2 className="h-8 w-8 text-white" />}
                  title="Company Profile"
                  description="Tampilkan identitas dan keunggulan bisnis dengan profil perusahaan yang profesional."
               />
               <ServiceCard
                  icon={<UserRoundPen className="h-8 w-8 text-white" />}
                  title="Portofolio"
                  description="Pamerkan proyek-proyek terbaik kamu dalam portofolio yang keren dan menarik."
               />
               <ServiceCard
                  icon={<BookOpen className="h-8 w-8 text-white" />}
                  title="Katalog"
                  description="Perkenalkan produk atau layanan kamu dengan katalog online yang atraktif dan informatif."
               />
               <ServiceCard
                  icon={<Wrench className="h-8 w-8 text-white" />}
                  title="Custom"
                  description="Dapatkan solusi website yang dirancang khusus untuk kebutuhan bisnis kamu."
               />

            </div>
         </div>
      </div>
   );
};

export default ServicesSection;
