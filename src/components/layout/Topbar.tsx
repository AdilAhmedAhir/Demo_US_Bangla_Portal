import React from 'react';
import { Search, Bell, Menu, ChevronDown, ExternalLink } from 'lucide-react';

interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Topbar({ setSidebarOpen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 shrink-0 items-center justify-between gap-x-4 border-b border-gray-200 bg-white px-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] sm:gap-x-6 sm:px-6 lg:px-8 transition-all">
      <div className="flex items-center gap-x-4">
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
      </div>

      <div className="flex flex-1 gap-x-4 self-stretch items-center lg:gap-x-6 max-w-7xl mx-auto w-full justify-between">
        <form className="relative flex w-full max-w-md items-center" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full flex items-center group">
            <Search
              className="pointer-events-none absolute left-4 h-4 w-4 text-gray-400 group-focus-within:text-brand-primary-blue transition-colors"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block w-full border-0 py-2.5 pl-10 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-brand-primary-blue sm:text-sm bg-gray-50 hover:bg-gray-100 outline-none transition-all rounded-full border border-gray-200 focus:bg-white"
              placeholder="Search courses, files, people..."
              type="search"
              name="search"
            />
          </div>
        </form>
        
        <div className="flex items-center gap-x-3 lg:gap-x-5">
          {/* Notifications */}
          <button type="button" className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all group border border-transparent hover:border-gray-200">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-brand-accent-red ring-2 ring-white shadow-sm" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

          {/* Profile dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center p-1.5 hover:bg-gray-50 rounded-full transition-colors border border-transparent hover:border-gray-200 shadow-sm"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-brand-primary-blue to-teal-400 flex items-center justify-center text-white font-bold shadow-inner ring-2 ring-white">
                <span className="text-sm">AS</span>
              </div>
              <span className="hidden lg:flex lg:items-center pr-2">
                <span className="ml-3 text-sm font-bold leading-6 text-gray-900 text-left flex flex-col" aria-hidden="true">
                  <span>Adil Student</span>
                  <span className="text-[10px] text-gray-500 font-medium leading-tight">ID: USB-2604</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
