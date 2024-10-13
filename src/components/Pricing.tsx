"use client"

import { Check, Zap, Shield, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
   const plans = [
      {
         name: "Pemula",
         price: 250,
         description: "Cocok untuk bisnis kecil atau personal yang baru memulai",
         features: ["Free domain .my.id", "3x revisi", "SEO Basic", "1 page", "Desain responsif", "Garansi selamanya", "Statis"],
         icon: <Cloud className="w-8 h-8 mb-4 text-blue-500" />,
         whatsappMessage: "Halo, saya tertarik dengan paket Pemula."
      },
      {
         name: "Menengah",
         price: 550,
         description: "Ideal untuk bisnis menengah yang ingin tampil profesional",
         features: ["Free domain .com", "Revisi sepuasnya", "SEO Standar", "Multi page", "Desain responsif", "Garansi selamanya", "Statis/Dinamis"],
         icon: <Zap className="w-10 h-10 mb-4 text-white" />,
         popular: true,
         whatsappMessage: "Halo, saya tertarik dengan paket Menengah."
      },
      {
         name: "Profesional",
         price: 999,
         description: "Sempurna untuk perusahaan besar yang membutuhkan fitur lengkap",
         features: ["Custom domain", "Revisi sepuasnya", "SEO Premium", "Multi page", "Desain responsif", "Garansi selamanya", "Statis/Dinamis"],
         icon: <Shield className="w-8 h-8 mb-4 text-blue-500" />,
         whatsappMessage: "Halo, saya tertarik dengan paket Professional."
      },
   ]

   const handleWhatsAppClick = (message: string) => {
      const phoneNumber = "628989098432"
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
   }

   return (
      <div className="min-h-screen px-4 py-24 bg-white sm:px-6 lg:px-8 scroll-mt-0" id="pricing">
         <div className="mx-auto max-w-7xl">
            <h2 className="mb-2 text-lg font-semibold leading-7 text-center text-blue-700">Pricing</h2>

            <h2 className="mb-8 text-4xl font-bold text-center text-black">
               Pilih jenis Paket Anda
            </h2>
            <p className="mb-16 text-lg text-center text-gray-600 md:text-xl">Buka potensi penuh layanan kami dengan paket yang disesuaikan</p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
               {plans.map((plan, index) => (
                  <div
                     key={index}
                     className={`relative ${plan.popular ? "lg:-mt-8 lg:mb-8" : ""
                        } bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-2`}
                  >
                     {plan.popular && (
                        <div className="absolute top-0 px-8 py-2 text-sm font-semibold text-white transform -translate-x-1/2 left-1/2 bg-gradient-to-r from-blue-500 to-blue-800 rounded-b-xl">
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
                        <ul className="mb-8 space-y-4">
                           {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                 <Check className="w-5 h-5 mr-2 text-blue-500" />
                                 <span className="text-gray-700">{feature}</span>
                              </li>
                           ))}
                        </ul>
                        <Button
                           onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                           className={`w-full py-6 ${plan
                              && "bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900"
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
