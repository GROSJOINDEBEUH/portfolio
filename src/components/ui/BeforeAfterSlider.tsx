'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt = 'Before/After comparison' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-border bg-card">
      {/* Container for both images */}
      <div className="relative aspect-video w-full overflow-hidden">
        
        {/* After image (background - full width) */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={afterImage}
            alt={`${alt} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Before image (overlay - clipped width) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={beforeImage}
            alt={`${alt} - Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Separator line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
            <svg
              className="h-5 w-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 rounded bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Avant
        </div>
        <div className="absolute right-3 top-3 rounded bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Après
        </div>

        {/* Invisible range input for interaction */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 z-10 w-full cursor-ew-resize opacity-0"
          aria-label="Slider avant/après"
        />
      </div>
    </div>
  );
}
