import React from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, BookOpen, Lock, Bookmark, List, Search, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function LibraryReaderPage() {
  return (
    <div className="flex flex-col gap-0 w-full h-[calc(100vh-5rem)] -mt-2 -mx-0">
      {/* Reader Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center justify-between shadow-sm z-10 shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/library/catalog" className="text-sm text-brand-primary-blue hover:underline font-bold flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" /> Back
          </Link>
          <div className="hidden sm:block h-5 w-px bg-gray-200"></div>
          <div className="hidden sm:block">
            <h3 className="text-sm font-bold text-gray-900 leading-tight">Gray&apos;s Anatomy for Students</h3>
            <p className="text-[11px] text-gray-500 font-medium">Richard L. Drake • 4th Edition</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-500" title="Table of Contents">
            <List className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-500" title="Search in Book">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-500" title="Bookmark">
            <Bookmark className="w-4 h-4" />
          </button>
          <div className="h-5 w-px bg-gray-200 mx-1"></div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-500" title="Zoom Out">
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-gray-600 min-w-[40px] text-center">100%</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-500" title="Zoom In">
            <ZoomIn className="w-4 h-4" />
          </button>
          <div className="h-5 w-px bg-gray-200 mx-1"></div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-500" title="Full Screen">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reader Body */}
      <div className="flex-1 bg-gray-200 flex items-center justify-center relative overflow-hidden">
        {/* DRM Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-[0.04]">
          <div className="text-center transform rotate-[-30deg]">
            <p className="text-6xl font-black text-gray-900 tracking-widest">US BANGLA</p>
            <p className="text-2xl font-bold text-gray-900 tracking-[1em]">DRM PROTECTED</p>
          </div>
        </div>

        {/* Previous Page */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-white hover:scale-110 transition-all z-20">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Mock Book Page */}
        <div className="bg-white shadow-2xl rounded-sm w-full max-w-2xl mx-16 h-[95%] flex flex-col overflow-hidden relative">
          {/* DRM Lock Badge */}
          <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 z-10">
            <Lock className="w-3 h-3" /> DRM Protected • Online Only
          </div>

          {/* Simulated Page Content */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 leading-snug border-b-2 border-gray-200 pb-4">
                Chapter 1: The Body
              </h2>
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">1.1 — The Regions and Planes of the Body</h3>
              
              <p className="text-sm text-gray-700 leading-7 mb-4 font-serif">
                The human body can be described in terms of standard anatomical position. In this position, a person stands erect, with the face directed forward, the upper limbs hanging to the sides, and the palms of the hands facing forward. This position is universally adopted in anatomy and medicine.
              </p>
              <p className="text-sm text-gray-700 leading-7 mb-4 font-serif">
                Using this standard anatomical position, the body is divided into sections by anatomical planes. The three primary planes used in anatomical study are the sagittal, coronal, and transverse planes. Each plane serves as a reference for describing the locations and movements of the body.
              </p>

              {/* Dummy Diagram Placeholder */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 flex flex-col items-center justify-center text-center">
                <BookOpen className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Figure 1.1</p>
                <p className="text-sm font-medium text-blue-800 mt-1">Anatomical Planes of the Human Body</p>
                <p className="text-[10px] text-blue-500 mt-2">[Interactive Diagram — Rendered Securely via DRM Viewer]</p>
              </div>

              <p className="text-sm text-gray-700 leading-7 mb-4 font-serif">
                The <strong>sagittal plane</strong> divides the body vertically into left and right portions. A midsagittal (median) plane divides it equally, while a parasagittal plane divides it unequally. The <strong>coronal (frontal) plane</strong> divides the body into anterior and posterior (front and back) portions.
              </p>
              <p className="text-sm text-gray-700 leading-7 mb-4 font-serif">
                The <strong>transverse (horizontal) plane</strong> divides the body into superior and inferior (upper and lower) portions. These planes are essential for imaging techniques such as CT and MRI scans, where cross-sectional anatomy is visualized for diagnostic purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Next Page */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-white hover:scale-110 transition-all z-20">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-gray-500">Page</span>
          <div className="flex items-center gap-1">
            <input type="text" defaultValue="24" className="w-10 text-center bg-gray-100 border border-gray-200 rounded px-1 py-0.5 text-xs font-bold text-gray-700 focus:outline-none focus:border-brand-primary-blue" />
            <span className="text-xs text-gray-400 font-bold">/ 1,168</span>
          </div>
        </div>
        <div className="w-full max-w-md mx-4">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-brand-primary-blue h-1.5 rounded-full transition-all" style={{ width: '2%' }}></div>
          </div>
        </div>
        <span className="text-xs font-bold text-gray-400">2% Complete</span>
      </div>
    </div>
  );
}
