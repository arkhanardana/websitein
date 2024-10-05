import React from "react";
import { Building2, FolderKanban, BookOpen, Wrench, LucideIcon } from "lucide-react";

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
               <div className="flex-shrink-0 bg-blue-400 rounded-md p-3">{icon}</div>
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
            <p className="my-4 max-w-2xl text-lg font-semibold text-blue-700 sm:mx-auto text-center">Services</p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">Apa Layanan Websitein?</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 sm:mx-auto text-center">
               Kami menyediakan berbagai layanan untuk memenuhi kebutuhan online anda. Dari profil perusahaan hingga
               solusi kustom, kami siap membantu.
            </p>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               <ServiceCard
                  icon={<Building2 className="h-8 w-8 text-white" />}
                  title="Company Profile"
                  description="Buat kesan pertama yang kuat dengan profil perusahaan yang profesional dan menarik."
               />
               <ServiceCard
                  icon={<FolderKanban className="h-8 w-8 text-white" />}
                  title="Portfolio"
                  description="Tampilkan karya terbaik Anda dengan portofolio yang mengesankan dan mudah dinavigasi."
               />
               <ServiceCard
                  icon={<BookOpen className="h-8 w-8 text-white" />}
                  title="Katalog"
                  description="Sajikan produk atau layanan Anda dalam katalog online yang menarik dan informatif."
               />
               <ServiceCard
                  icon={<Wrench className="h-8 w-8 text-white" />}
                  title="Custom"
                  description="Solusi web kustom untuk memenuhi kebutuhan unik bisnis Anda."
               />
            </div>
         </div>
      </div>
   );
};

export default ServicesSection;
