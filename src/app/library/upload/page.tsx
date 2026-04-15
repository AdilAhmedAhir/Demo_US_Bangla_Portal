import React from 'react';
import { UploadCloud, FileText, Image, AlertCircle, CheckCircle2, BookOpen, Tag, Hash, Layers } from 'lucide-react';
import Link from 'next/link';

export default function LibraryUploadPage() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <Link href="/library" className="text-sm text-brand-primary-blue hover:underline mb-1 inline-block font-bold">← Library Home</Link>
        <h1 className="text-3xl font-black tracking-tight text-gray-900">Upload New Book</h1>
        <p className="mt-1 text-sm text-gray-500 font-medium">Add a new textbook or journal to the campus digital library. All uploads are reviewed before publishing.</p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800 font-medium leading-relaxed">
          <strong className="font-bold">Upload Guidelines:</strong> Only PDF files are accepted (max 200MB). Uploads are automatically DRM-locked before publishing. Ensure you have the legal right to distribute the material.
        </div>
      </div>

      {/* Upload Form */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-base font-black text-gray-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-primary-blue" /> Book Information
          </h3>
        </div>
        <div className="p-6 space-y-5">
          {/* Book Title */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Book Title <span className="text-red-500">*</span></label>
            <input type="text" placeholder="e.g. Gray's Anatomy for Students" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm" />
          </div>

          {/* Author & Edition Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Author(s) <span className="text-red-500">*</span></label>
              <input type="text" placeholder="e.g. Richard L. Drake" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Edition</label>
              <input type="text" placeholder="e.g. 4th Edition" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm" />
            </div>
          </div>

          {/* Category & ISBN Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" /> Department / Category <span className="text-red-500">*</span></label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm appearance-none cursor-pointer">
                <option>Select Department</option>
                <option>Anatomy</option>
                <option>Physiology</option>
                <option>Biochemistry</option>
                <option>Pathology</option>
                <option>Pharmacology</option>
                <option>Microbiology</option>
                <option>Community Medicine</option>
                <option>Forensic Medicine</option>
                <option>Surgery</option>
                <option>Internal Medicine</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5"><Hash className="w-3.5 h-3.5" /> ISBN (Optional)</label>
              <input type="text" placeholder="e.g. 978-0-323-39304-1" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm" />
            </div>
          </div>

          {/* Year & Pages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Publication Year</label>
              <input type="number" placeholder="e.g. 2024" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> Total Pages</label>
              <input type="number" placeholder="e.g. 1168" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Description (Optional)</label>
            <textarea rows={3} placeholder="A brief summary or note about this textbook..." className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all shadow-sm resize-none" />
          </div>
        </div>
      </div>

      {/* File Uploads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* PDF Upload */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-brand-primary-blue hover:bg-blue-50/30 transition-all p-8 flex flex-col items-center justify-center text-center cursor-pointer group">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary-blue mb-4 group-hover:scale-110 transition-transform">
            <FileText className="w-7 h-7" />
          </div>
          <h4 className="font-bold text-gray-900 mb-1">Upload PDF File <span className="text-red-500">*</span></h4>
          <p className="text-xs text-gray-500 font-medium mb-4">Drag and drop or click to browse. Max 200MB.</p>
          <div className="px-4 py-2 bg-brand-primary-blue text-white rounded-lg text-xs font-bold shadow-sm">Choose PDF File</div>
        </div>

        {/* Cover Image Upload */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-purple-500 hover:bg-purple-50/30 transition-all p-8 flex flex-col items-center justify-center text-center cursor-pointer group">
          <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
            <Image className="w-7 h-7" />
          </div>
          <h4 className="font-bold text-gray-900 mb-1">Upload Cover Image</h4>
          <p className="text-xs text-gray-500 font-medium mb-4">JPG, PNG. Recommended 400x600px.</p>
          <div className="px-4 py-2 bg-purple-600 text-white rounded-lg text-xs font-bold shadow-sm">Choose Image</div>
        </div>
      </div>

      {/* DRM Auto-Apply Notice */}
      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-sm text-emerald-800 font-medium leading-relaxed">
          <strong className="font-bold">Automatic DRM Protection:</strong> Once uploaded, the system will automatically apply Digital Rights Management to your PDF. Students will be able to read the book through our secure online viewer but will not be able to download it for offline use.
        </div>
      </div>

      {/* Submit Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-200">
        <p className="text-sm text-gray-500 font-medium">Your upload will be reviewed by the Library Admin before it is visible to students.</p>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-primary-green hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold text-sm transition shadow-md whitespace-nowrap">
          <UploadCloud className="w-4 h-4" /> Submit for Review
        </button>
      </div>
    </div>
  );
}
