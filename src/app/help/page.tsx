import React from 'react';
import { LifeBuoy, FileText, MessageCircle, Phone, Book, ExternalLink } from 'lucide-react';

export default function HelpCenterPage() {
  const faqs = [
    { q: 'How do I request a transcript?', a: 'Transcripts can be requested through the Academics section. Standard processing time is 3-5 business days.' },
    { q: 'When is the tuition fee due?', a: 'Fees must be paid by the 5th of every month. Check the Finances dashboard for specific details and late fines.' },
    { q: 'I have a Wi-Fi issue in my hostel.', a: 'Please navigate to Hostel Management within the portal and submit a Maintenance Request detailing your room number.' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Help Center</h1>
        <p className="mt-2 text-sm md:text-base text-gray-500">Find answers and get support for portal or academic issues.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center items-center justify-center gap-3 cursor-pointer group">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-primary-blue flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Student Handbook</h3>
          <p className="text-xs text-gray-500 px-4">Download the latest PDF guidelines for campus rules.</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center items-center justify-center gap-3 cursor-pointer group">
          <div className="w-14 h-14 rounded-full bg-green-50 text-brand-primary-green flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">Admin Contact</h3>
          <p className="text-xs text-gray-500 px-4">Call the student affairs office for urgent inquiries.</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center items-center justify-center gap-3 cursor-pointer group">
          <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">IT Support</h3>
          <p className="text-xs text-gray-500 px-4">Open a live chat ticket for portal bugs or access issues.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* FAQs */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Book className="w-5 h-5 text-brand-primary-blue" /> Frequently Asked Questions
            </h3>
          </div>
          <div className="p-6 flex flex-col gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group">
                <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-brand-primary-blue transition-colors">Q: {faq.q}</h4>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-brand-primary-blue/5 rounded-2xl p-6 border border-brand-primary-blue/20 shadow-sm h-fit">
           <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-6">
             <LifeBuoy className="w-5 h-5 text-brand-primary-blue" /> Quick Links
           </h3>
           <div className="flex flex-col gap-3">
             <a href="#" className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-primary-blue/50 transition-colors shadow-sm text-sm font-semibold text-gray-700">
               Library Portal <ExternalLink className="w-4 h-4 text-gray-400" />
             </a>
             <a href="#" className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-primary-blue/50 transition-colors shadow-sm text-sm font-semibold text-gray-700">
               Medical Services <ExternalLink className="w-4 h-4 text-gray-400" />
             </a>
             <a href="#" className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-primary-blue/50 transition-colors shadow-sm text-sm font-semibold text-gray-700">
               Campus Security <ExternalLink className="w-4 h-4 text-gray-400" />
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}
