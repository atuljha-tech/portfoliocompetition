'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const certificates = [
    { id: 1, src: '/img1.jpeg', alt: 'Certificate 1' },
    { id: 2, src: '/img2.jpeg', alt: 'Certificate 2' },
    { id: 3, src: '/img3.jpeg', alt: 'Certificate 3' },
    { id: 4, src: '/img4.png', alt: 'Certificate 4' },
  ];

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? certificates.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === certificates.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <section 
      id="certificates"
      className="relative py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#0A0F1C] via-[#0D1424] to-[#0A0F1C]"
    >
      {/* Simple background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with quote */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Quote className="w-4 h-4 text-purple-400/50" />
            <span className="text-xs font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              ACHIEVEMENTS
            </span>
            <Quote className="w-4 h-4 text-pink-400/50 rotate-180" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            My 
            <span className="relative inline-block ml-4">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient">
                Certificates
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm" />
            </span>
          </h2>

          <p className="text-sm text-slate-400 max-w-2xl mx-auto font-light italic">
            "Learning never exhausts the mind."
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedImage(index)}
              className="group relative cursor-pointer"
            >
              {/* Hover border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur" />
              
              {/* Certificate card */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0D1424] border border-slate-800/50 group-hover:border-transparent transition-all duration-300">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-xs text-white">Click to view</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
          
          {/* Modal content */}
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient bar */}
            <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />

            {/* Certificate image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#0D1424] border border-slate-800/50">
              <Image
                src={certificates[selectedImage].src}
                alt={certificates[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />

              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500 transition-all duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-xs text-white">
                  {selectedImage + 1} / {certificates.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}