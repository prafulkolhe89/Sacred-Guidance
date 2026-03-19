import React from 'react';

export function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-12 opacity-60">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent w-1/3"></div>
      <div className="mx-4 text-gold">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="h-[1px] bg-gradient-to-r from-gold via-gold to-transparent w-1/3"></div>
    </div>
  );
}
