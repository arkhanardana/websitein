"use client"

import { Check, Zap, Shield, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
   const plans = [
      {
         name: "Bronze",
         price: 250,
         description: "Cocok untuk bisnis kecil atau personal yang baru memulai",
         features: ["Free domain .my.id", "3x revisi", "SEO Basic", "1 page", "Desain responsif", "Garansi selamanya", "Statis"],
         icon: <Cloud className="h-8 w-8 mb-4 text-blue-500" />,
         whatsappMessage: "Halo, saya tertarik dengan paket Bronze."
      },
      {
         name: "Silver",
         price: 550,
         description: "Ideal untuk bisnis menengah yang ingin tampil profesional",
         features: ["Free domain .com", "Revisi sepuasnya", "SEO Standar", "Multi page", "Desain responsif", "Garansi selamanya", "Statis/Dinamis"],
         icon: <Zap className="h-10 w-10 mb-4 text-white" />,
         popular: true,
         whatsappMessage: "Halo, saya tertarik dengan paket Silver."
      },
      {
         name: "Gold",
         price: 999,
         description: "Sempurna untuk perusahaan besar yang membutuhkan fitur lengkap",
         features: ["Custom domain", "Revisi sepuasnya", "SEO Premium", "Multi page", "Desain responsif", "Garansi selamanya", "Statis/Dinamis"],
         icon: <Shield className="h-8 w-8 mb-4 text-blue-500" />,
         whatsappMessage: "Halo, saya tertarik dengan paket Gold."
      },
   ]

   const handleWhatsAppClick = (message: string) => {
      const phoneNumber = "628989098432"
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
   }

   return (
      <div className="bg-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 scroll-mt-0" id="pricing">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-semibold leading-7 text-blue-700 text-center mb-2">Pricing</h2>

            <h2 className="text-4xl font-bold text-black text-center mb-8">
               Pilih jenis Paket Anda
            </h2>
            <p className="text-lg md:text-xl text-gray-600 text-center mb-16">Buka potensi penuh layanan kami dengan paket yang disesuaikan</p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
               {plans.map((plan, index) => (
                  <div
                     key={index}
                     className={`relative ${plan.popular ? "lg:-mt-8 lg:mb-8" : ""
                        } bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-2`}
                  >
                     {plan.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-800 text-white px-8 py-2 rounded-b-xl font-semibold text-sm">
                           Paling Populer
                        </div>
                     )}
                     <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-blue-500 to-blue-800 text-white' : 'bg-gray-100'}`}>
                        {plan.icon}
                        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                        <p className={`text-5xl font-extrabold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                           {plan.price}K
                        </p>
                        <p className={`text-base ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                           {plan.description}
                        </p>
                     </div>
                     <div className="p-8">
                        <ul className="space-y-4 mb-8">
                           {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                 <Check className="h-5 w-5 text-blue-500 mr-2" />
                                 <span className="text-gray-700">{feature}</span>
                              </li>
                           ))}
                        </ul>
                        <Button
                           onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                           className={`w-full py-6 ${plan.popular
                              ? "bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900"
                              : "bg-gray-800 hover:bg-gray-700"
                              } text-white font-semibold rounded-xl transition-colors duration-300 text-lg`}
                        >
                           Pilih {plan.name}
                        </Button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
