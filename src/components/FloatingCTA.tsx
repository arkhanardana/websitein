'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Instagram, X, MessageCircle } from "lucide-react"
import Image from 'next/image'

export default function FloatingCTA() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="fixed bottom-6 right-6 z-50">
         <div className="relative">
            {isOpen && (
               <div className="absolute bottom-20 right-0 flex flex-col items-center gap-3 transition-all duration-300 ease-in-out">
                  <Button
                     size="icon"
                     variant="outline"
                     className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white border-none rounded-full shadow-lg flex items-center justify-center"
                     onClick={() => window.open('https://wa.me/62989098432', '_blank')}
                  >
                     <Image src="/assets/wa.png" alt="WhatsApp" width={32} height={32} />
                     <span className="sr-only">WhatsApp</span>
                  </Button>
                  <Button
                     size="icon"
                     variant="outline"
                     className="w-16 h-16 bg-pink-500 hover:bg-pink-600 text-white border-none rounded-full shadow-lg flex items-center justify-center"
                     onClick={() => window.open('https://www.instagram.com/arkhanardna', '_blank')}
                  >
                     <Instagram className="h-8 w-8" />
                     <span className="sr-only">Instagram</span>
                  </Button>
               </div>
            )}
            <Button
               size="icon"
               variant="outline"
               className={`w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white border-none rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ${isOpen ? 'rotate-45' : ''
                  }`}
               onClick={() => setIsOpen(!isOpen)}
            >
               {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
               <span className="sr-only">{isOpen ? 'Close' : 'Open'} social media links</span>
            </Button>
         </div>
      </div>
   )
}
