'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Camera, Image, BookOpen, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  // Hide bottom nav on auth and onboarding pages
  const hiddenPaths = ['/auth/signup', '/auth/questionnaire', '/pengguna/onboarding', '/mitra/onboarding'];
  const shouldHide = hiddenPaths.some(path => pathname?.startsWith(path));

  if (shouldHide) {
    return null;
  }

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    {
      href: '/landing',
      icon: Home,
      label: 'Beranda',
      active: pathname === '/landing',
      color: '#D4A373',
      neon: '#F4A460'
    },
    {
      href: '/galeri',
      icon: Image,
      label: 'Galeri',
      active: pathname === '/galeri',
      color: '#D4A373',
      neon: '#F4A460'
    },
    {
      href: '/ar',
      icon: Camera,
      label: 'AR',
      active: pathname === '/ar',
      defaultColor: '#6379B9', // Brand purple when not active
      color: '#FFC857', // Brand yellow when active
      neon: '#FFD700'
    },
    {
      href: '/storybook',
      icon: BookOpen,
      label: 'Buku Cerita',
      active: pathname === '/storybook',
      color: '#D4A373',
      neon: '#F4A460'
    },
    {
      href: '/my-pusaka',
      icon: User,
      label: 'PusakaKu',
      active: pathname === '/my-pusaka',
      color: '#D4A373',
      neon: '#F4A460'
    }
  ];

  return (
    <nav className="bottom-nav">
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes shimmerMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      
      <div className="flex justify-around items-center max-w-md mx-auto px-4 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isAR = item.label === 'AR';
          const buttonColor = item.active ? item.color : (item.defaultColor || item.color);
          const buttonNeon = item.active ? item.neon : (item.defaultColor ? '#9DB4E8' : item.neon);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`bottom-nav-item ${item.active ? 'active' : ''} ${isAR ? 'ar-button' : ''} relative overflow-hidden group`}
              style={item.active ? {
                '--item-color': buttonColor,
                '--item-neon': buttonNeon
              } : isAR ? {
                '--item-color': buttonColor,
                '--item-neon': buttonNeon
              } : {}}
            >
              {/* Active glow effect */}
              {item.active && (
                <>
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-15"
                    style={{
                      background: `radial-gradient(circle at center, ${buttonNeon}, transparent 70%)`,
                      animation: 'pulseGlow 2s ease-in-out infinite'
                    }}
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${buttonNeon}20, transparent)`,
                      animation: 'shimmerMove 2s infinite'
                    }}
                  />
                </>
              )}
              
              {/* Icon with neon effect */}
              <div className="relative z-10">
                <Icon 
                  style={item.active ? {
                    filter: `drop-shadow(0 0 6px ${buttonNeon})`
                  } : {}}
                />
              </div>
              
              {/* Label with text shadow */}
              <span 
                className="relative z-10"
                style={item.active ? {
                  textShadow: `0 0 8px ${buttonNeon}60`
                } : {}}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

