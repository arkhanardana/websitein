import Link from 'next/link'
import { Instagram, Github, } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
   const logo = {
      url: "/assets/logo.png",
   };

   return (
      <footer className="text-white bg-gray-900">
         <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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
                           <Link href={`#${item.toLowerCase()}`} className="transition-colors hover:text-blue-400">
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Kontak Kami</h3>
                  <div className="flex space-x-4">
                     <Link href="https://instagram.com/arkhanardna" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
                        <Instagram size={24} />
                        <span className="sr-only">Instagram</span>
                     </Link>
                     <Link href="https://github.com/arkhanardana" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
               <p>&copy; {new Date().getFullYear()} Websitein. All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}