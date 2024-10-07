import { Zap, Rocket, PenTool } from 'lucide-react'

export default function Benefits() {
   const benefits = [
      {
         title: "Development Cepat",
         description: "Membangun website dengan cepat dan menerapkan fleksibel komponen",
         icon: <Zap className="w-8 h-8" strokeWidth={2} color='#fff' />,
      },
      {
         title: "Desain Responsif",
         description: "Membangun website yang menerapkan desain yang modern serta responsif",
         icon: <PenTool className="w-8 h-8" strokeWidth={2} color='#fff' />,
      },
      {
         title: "Performa Tinggi",
         description: "Membangun website dengan performa yang tinggi serta aksesibilitas yang luas",
         icon: <Rocket className="w-8 h-8" strokeWidth={2} color='#fff' />,
      },
   ]

   return (
      <div className="bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-0 mx-auto" id='benefit'>
         <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-semibold leading-7 text-blue-700 text-center mb-2">Benefit</h2>
            <h2 className="text-4xl font-bold text-black text-center mb-10">
               Benefit order di Websitein
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
               {benefits.map((benefit, index) => (
                  <div
                     key={index}
                     className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-400 to-blue-600"
                  >
                     <div className="relative p-6">
                        <div className="flex items-center justify-center mb-4">
                           <div className="p-3 rounded-full bg-white bg-opacity-20">
                              {benefit.icon}
                           </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white text-center mb-2">{benefit.title}</h3>
                        <p className="text-white text-opacity-80 text-center">{benefit.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}