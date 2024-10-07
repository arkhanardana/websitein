import Link from 'next/link'
import { Instagram, Github, } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
   const logo = {
      url: "/assets/logo.png",
   };

   return (
      <footer className="bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="space-y-4">
                  <Link href="/" className="flex items-center space-x-2">
                     <Image src={logo.url} alt="logo-websitein" width={65} height={80} loading="lazy" />
                     <span className="text-xl font-bold">Websitein</span>
                  </Link>
                  <p className="text-gray-400">
                     Solusi jasa pembuatan website dengan desain modern dan kreatif
                  </p>
               </div>
               <nav className="space-y-4 md:col-span-2">
                  <h3 className="text-lg font-semibold">Navigation</h3>
                  <ul className="grid grid-cols-2 gap-2">
                     {['Home', 'Pricing', 'About', 'Benefits', 'Services', 'FAQ'].map((item) => (
                        <li key={item}>
                           <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Kontak Kami</h3>
                  <div className="flex space-x-4">
                     <Link href="https://instagram.com/arkhanardna" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        <Instagram size={24} />
                        <span className="sr-only">Instagram</span>
                     </Link>
                     <Link href="https://github.com/arkhanardana" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
               <p>&copy; {new Date().getFullYear()} Websitein. All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}