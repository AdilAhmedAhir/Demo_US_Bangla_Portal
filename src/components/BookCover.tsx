'use client';

import React, { useState } from 'react';
import { BookOpen, Lock } from 'lucide-react';
import { subjectStyle, type Book } from '@/data/library';

interface BookCoverProps {
  book: Book;
  className?: string;
  /** Show the DRM lock badge (default true). */
  drm?: boolean;
}

/**
 * Designed book cover: a subject-coloured spine + title block that always renders
 * cleanly offline. If `book.coverUrl` is set and loads, the real image is shown
 * on top; otherwise it silently falls back to the designed cover.
 */
export default function BookCover({ book, className = '', drm = true }: BookCoverProps) {
  const [imgOk, setImgOk] = useState(false);
  const style = subjectStyle(book.subject);

  return (
    <div className={`relative w-full overflow-hidden bg-gradient-to-br ${style.gradient} ${className}`}>
      {/* faux spine */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-black/25" />
      <div className="absolute left-2.5 top-0 bottom-0 w-px bg-white/20" />

      {/* designed content (hidden once a real cover image loads) */}
      <div className={`absolute inset-0 flex flex-col justify-between p-3 pl-5 transition-opacity ${imgOk ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-start justify-between gap-2">
          {book.edition ? (
            <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
              {book.edition}
            </span>
          ) : <span />}
          {drm && (
            <span className="bg-black/40 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shrink-0">
              <Lock className="w-2.5 h-2.5" /> DRM
            </span>
          )}
        </div>

        <BookOpen className="w-6 h-6 text-white/30 mx-auto" />

        <div>
          <p className="text-[8px] font-bold uppercase tracking-widest text-white/70 mb-1">{book.subject}</p>
          <h3 className="text-white font-serif font-bold text-[13px] leading-tight line-clamp-3">{book.title}</h3>
          <p className="text-white/70 text-[10px] font-medium mt-1 line-clamp-1">{book.author}</p>
        </div>
      </div>

      {/* real cover image, if provided — fades in over the designed cover when it loads */}
      {book.coverUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={book.coverUrl}
          alt={`${book.title} cover`}
          onLoad={() => setImgOk(true)}
          onError={() => setImgOk(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${imgOk ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}
