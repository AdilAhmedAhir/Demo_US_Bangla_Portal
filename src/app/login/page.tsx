'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Eye,
  EyeOff,
  LogIn,
  GraduationCap,
  Users,
  ShieldCheck,
  UserCheck,
  Lock,
  IdCard,
  ChevronRight,
} from 'lucide-react';

const roles = [
  { id: 'student',  label: 'Student',  icon: GraduationCap },
  { id: 'faculty',  label: 'Faculty',  icon: Users },
  { id: 'admin',    label: 'Admin',    icon: ShieldCheck },
  { id: 'guardian', label: 'Guardian', icon: UserCheck },
] as const;

type Role = (typeof roles)[number]['id'];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<Role>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] px-4 py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary-blue/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary-green/[0.03] rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-primary-blue/[0.02] rounded-full blur-2xl pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 mb-5">
            <Image
              src="/logo.png"
              alt="US Bangla Medical College"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            US Bangla Medical College
          </h1>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1.5">
            Enterprise Campus Management
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Role Selector */}
          <div className="px-6 pt-6 pb-2">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              Login as
            </label>
            <div className="grid grid-cols-4 gap-1.5 p-1 bg-gray-100 rounded-xl">
              {roles.map((role) => {
                const Icon = role.icon;
                const isActive = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`
                      flex flex-col items-center gap-1 py-2.5 px-1 rounded-lg text-center transition-all duration-200
                      ${isActive
                        ? 'bg-white shadow-sm text-brand-primary-blue'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }
                    `}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-brand-primary-blue' : 'text-gray-400'}`} />
                    <span className={`text-[10px] font-bold ${isActive ? 'text-brand-primary-blue' : 'text-gray-500'}`}>
                      {role.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="p-6 space-y-5">
            {/* User ID Field */}
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-50 group-focus-within:bg-brand-primary-blue/10 flex items-center justify-center transition-colors">
                <IdCard className="w-4 h-4 text-gray-400 group-focus-within:text-brand-primary-blue transition-colors" />
              </div>
              <input
                id="login-user-id"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder=" "
                className="
                  peer w-full pl-14 pr-4 pt-5 pb-2 text-sm font-semibold text-gray-900
                  bg-gray-50 border-2 border-gray-200 rounded-xl
                  focus:outline-none focus:ring-0 focus:border-brand-primary-blue focus:bg-white
                  transition-all placeholder-transparent
                "
              />
              <label
                htmlFor="login-user-id"
                className="
                  absolute left-14 top-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-semibold
                  peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:font-bold peer-focus:text-brand-primary-blue
                  transition-all pointer-events-none
                "
              >
                Student / Faculty ID
              </label>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-50 group-focus-within:bg-brand-primary-blue/10 flex items-center justify-center transition-colors">
                <Lock className="w-4 h-4 text-gray-400 group-focus-within:text-brand-primary-blue transition-colors" />
              </div>
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="
                  peer w-full pl-14 pr-12 pt-5 pb-2 text-sm font-semibold text-gray-900
                  bg-gray-50 border-2 border-gray-200 rounded-xl
                  focus:outline-none focus:ring-0 focus:border-brand-primary-blue focus:bg-white
                  transition-all placeholder-transparent
                "
              />
              <label
                htmlFor="login-password"
                className="
                  absolute left-14 top-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider
                  peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-semibold
                  peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:font-bold peer-focus:text-brand-primary-blue
                  transition-all pointer-events-none
                "
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-4.5 h-4.5 rounded-md border-2 border-gray-300 peer-checked:bg-brand-primary-blue peer-checked:border-brand-primary-blue transition-all flex items-center justify-center">
                    {remember && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-700 transition-colors">
                  Remember me
                </span>
              </label>
              <Link
                href="#"
                className="text-xs font-bold text-brand-primary-blue hover:text-brand-primary-blue/80 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="
                w-full py-3.5 px-6 rounded-xl
                bg-brand-primary-blue text-white text-sm font-bold
                hover:bg-brand-primary-blue/90
                active:scale-[0.98]
                shadow-md hover:shadow-lg
                transition-all duration-200
                flex items-center justify-center gap-2
              "
            >
              <LogIn className="w-4.5 h-4.5" />
              Sign In to Portal
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Divider */}
          <div className="px-6 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Secure Access</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-[11px] font-semibold text-gray-400">
            Portal managed by{' '}
            <a
              href="https://startdaily.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-500 hover:text-brand-primary-blue transition-colors"
            >
              Start Daily
            </a>
          </p>
          <p className="text-[10px] text-gray-300 mt-1">
            © {new Date().getFullYear()} US Bangla Medical College. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
