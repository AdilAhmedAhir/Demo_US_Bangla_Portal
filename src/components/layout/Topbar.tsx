import React from 'react';
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Topbar({ setSidebarOpen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 transition-all">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator for mobile */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1 w-full max-w-2xl" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-transparent outline-none transition-all focus:bg-gray-50/50 rounded-xl my-3"
            placeholder="Search for courses, grades, documents..."
            type="search"
            name="search"
          />
        </form>
        
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notifications */}
          <button type="button" className="relative -m-2.5 p-2.5 text-gray-500 hover:text-gray-700 sm:p-2 sm:hover:bg-gray-100 sm:rounded-full transition-all group">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span className="absolute top-2.5 right-2 sm:top-1.5 sm:right-1.5 block h-2.5 w-2.5 rounded-full bg-brand-accent-red ring-2 ring-white shadow-sm" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

          {/* Profile dropdown */}
          <div className="relative">
            <button
              type="button"
              className="-m-1.5 flex items-center p-1.5 hover:bg-gray-50 rounded-xl transition-colors sm:pr-3 border border-transparent hover:border-gray-200"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-brand-primary-blue to-teal-400 flex items-center justify-center text-white font-bold shadow-inner ring-2 ring-white">
                <span className="text-sm">AS</span>
              </div>
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-3 text-sm font-semibold leading-6 text-gray-900 text-left flex flex-col" aria-hidden="true">
                  <span>Adil Student</span>
                  <span className="text-[10px] text-gray-500 font-medium leading-tight">ID: USB-2604-102</span>
                </span>
                <ChevronDown className="ml-2 h-4 w-4 text-gray-400" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
