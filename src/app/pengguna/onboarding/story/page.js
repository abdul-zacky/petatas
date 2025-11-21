'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Sparkles, Zap, Gift, ArrowRight } from 'lucide-react';

export default function PenggunaStoryPage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('petatasUser');
    if (user) {
      setUserData(JSON.parse(user));
    } else {
      router.push('/auth/signup');
    }

    // Allow skip after 30 seconds
    const timer = setTimeout(() => {
      setCanSkip(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [router]);

  const slides = [
    {
      icon: Sparkles,
      title: 'Kenalan dengan QRIS',
      description: `Hai ${userData?.nama || 'Kak'}! QRIS adalah cara bayar yang super praktis. Tinggal scan QR, bayar tanpa ribet kembalian!`,
      illustration: '📱'
    },
    {
      icon: Zap,
      title: 'Cepat & Aman',
      description: 'Ga perlu antri lama, ga khawatir uang hilang. Semua transaksi tercatat dengan aman dan real-time!',
      illustration: '⚡'
    },
    {
      icon: Gift,
      title: 'Dapat Hadiah!',
      description: 'Setiap transaksi QRIS, Anda bisa dapat poin dan cashback. Kumpulin poin, tukar hadiah menarik!',
      illustration: '🎁'
    },
    {
      icon: ArrowRight,
      title: 'Yuk Mulai!',
      description: 'Siap jelajahi dunia pembayaran digital? Mari kita mulai perjalanan QRIS Anda!',
      illustration: '🚀'
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleFinish();
    }
  };

  const handleSkip = () => {
    if (canSkip) {
      handleFinish();
    }
  };

  const handleFinish = () => {
    // Mark onboarding as complete
    if (userData) {
      const updatedUser = { ...userData, onboardingComplete: true };
      localStorage.setItem('petatasUser', JSON.stringify(updatedUser));
    }
    router.push('/galeri');
  };

  if (!userData) return null;

  const slide = slides[currentSlide];
  const SlideIcon = slide.icon;

  return (
    <div className="min-h-screen flex flex-col px-4 py-6 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f5ff 50%, #fff9f5 100%)'
    }}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#6379B9 1px, transparent 1px), linear-gradient(90deg, #6379B9 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-30" style={{
          background: 'radial-gradient(circle, rgba(99, 121, 185, 0.3), transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
          filter: 'blur(40px)'
        }} />
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full opacity-30" style={{
          background: 'radial-gradient(circle, rgba(212, 163, 115, 0.3), transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
          filter: 'blur(40px)'
        }} />
      </div>

      {/* Skip Button */}
      <div className="relative z-10 flex justify-end mb-4">
        <button
          onClick={handleSkip}
          disabled={!canSkip}
          className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          style={{
            color: canSkip ? '#6379B9' : '#999',
            background: 'rgba(255, 255, 255, 0.6)',
            border: `2px solid ${canSkip ? 'rgba(99, 121, 185, 0.3)' : 'rgba(153, 153, 153, 0.2)'}`,
            backdropFilter: 'blur(10px)',
            cursor: canSkip ? 'pointer' : 'not-allowed',
            opacity: canSkip ? 1 : 0.5
          }}
        >
          {canSkip ? 'Lewati' : 'Lewati (30s)'}
        </button>
      </div>

      {/* Story Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-lg mx-auto relative z-10">
        <div className="w-full relative rounded-3xl p-8 overflow-hidden" style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(99, 121, 185, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 20px rgba(99, 121, 185, 0.05)'
        }}>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            background: 'radial-gradient(circle at top, rgba(99, 121, 185, 0.3), transparent 70%)'
          }} />

          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <div className="text-7xl animate-bounce">
              {slide.illustration}
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 rounded-full flex items-center justify-center" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '2px solid rgba(99, 121, 185, 0.4)',
              boxShadow: '0 0 30px rgba(99, 121, 185, 0.3), inset 0 0 20px rgba(99, 121, 185, 0.1)'
            }}>
              <SlideIcon className="w-8 h-8" style={{
                color: '#6379B9',
                filter: 'drop-shadow(0 0 8px rgba(99, 121, 185, 0.5))'
              }} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-4 relative z-10" style={{
            color: '#1B1B1E',
            textShadow: '0 0 15px rgba(99, 121, 185, 0.2)'
          }}>
            {slide.title}
          </h2>

          {/* Description */}
          <p className="text-base text-center leading-relaxed mb-8 relative z-10" style={{
            color: '#8B7355'
          }}>
            {slide.description}
          </p>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-full relative py-3.5 rounded-xl font-bold text-base text-white transition-all duration-300 overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #6379B9 0%, #7A8FD1 100%)',
              border: '2px solid rgba(99, 121, 185, 0.4)',
              boxShadow: '0 0 30px rgba(99, 121, 185, 0.35)',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(99, 121, 185, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 121, 185, 0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
              animation: 'shimmer 2s infinite'
            }} />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {currentSlide < slides.length - 1 ? (
                <>
                  Lanjut
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                'Mulai Sekarang!'
              )}
            </span>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-2 mt-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className="transition-all duration-300"
              style={{
                width: currentSlide === index ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: currentSlide === index
                  ? 'linear-gradient(135deg, #6379B9 0%, #7A8FD1 100%)'
                  : 'rgba(99, 121, 185, 0.3)',
                boxShadow: currentSlide === index ? '0 0 10px rgba(99, 121, 185, 0.5)' : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-10px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
