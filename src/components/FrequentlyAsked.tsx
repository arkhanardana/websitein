import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
   {
      question: "Berapa lama pengerjaan di Websitein?",
      answer: "Waktu pembuatan website bervariasi tergantung dari kompleksitas fitur dan desain. Untuk website sederhana, biasanya memakan waktu sekitar 3 hingga 6 hari. Untuk website yang kompleks, bisa memakan waktu 3 hingga 4 minggu."
   },
   {
      question: "Apakah harus menyediakan gambar & teks?",
      answer: "Kami bisa membantu dalam menyediakan konten jika dibutuhkan. Namun, jika kamu sudah punya konten seperti teks atau gambar, itu akan sangat membantu untuk proses pembuatan."
   },
   {
      question: "Gimana proses pembuatan di Websitein?",
      answer: "Prosesnya terdiri dari beberapa tahap: konsultasi, perancangan desain, pengembangan, pengujian, dan peluncuran. Kami akan terus berkomunikasi dengan klien selama proses ini untuk memastikan hasil akhir sesuai dengan keinginan."
   },
   {
      question: "Apakah ada layanan maintenance?",
      answer: "Ya, kami menyediakan layanan maintenance untuk memastikan website kamu tetap berjalan dengan baik dan aman. Layanan ini mencakup pembaruan sistem, backup, dan perbaikan jika ada masalah."
   },
   {
      question: "Bagaimana jika project selesai tapi ada revisi?",
      answer: "Kami memberikan revisi gratis sesuai dengan paket yang dipilih. Jika revisi melebihi batas yang ditentukan, akan ada tambahan biaya per-revisi."
   },
   {
      question: "Bagaimana dengan sistem pembayaran?",
      answer: "Kami menerima pembayaran melalui Paypal, OVO, Dana, ShopeePay, Mandiri, dan BRI. Pembayaran dapat dilakukan dengan dua opsi yaitu Full Payment, DP 50% dan kekurangan dapat dibayar ketika project sudah selesai "
   }
]

export default function FAQSection() {
   return (
      <div className="w-full max-w-2xl mx-auto px-4 py-16 sm:py-24 scroll-mt-0" id="faq">
         <h2 className="text-lg font-semibold leading-7 text-blue-700 text-center mb-2">FAQ</h2>
         <h2 className="text-4xl font-bold text-center mb-8">Paling Sering Ditanyakan</h2>
         <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
               <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                     {faq.answer}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </div>
   )
}