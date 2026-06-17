'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronsLeftRight, Maximize, X } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

// Internal slider component to avoid state conflicts when rendered in both card and modal
function SliderContent({
  beforeImage,
  afterImage,
  alt,
  sliderPosition,
  onSliderChange,
  showMaximizeButton = false,
  onMaximize,
}: {
  beforeImage: string;
  afterImage: string;
  alt: string;
  sliderPosition: number;
  onSliderChange: (value: number) => void;
  showMaximizeButton?: boolean;
  onMaximize?: () => void;
}) {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSliderChange(Number(e.target.value));
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
          {/* Handle with horizontal arrows */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
            <ChevronsLeftRight className="h-5 w-5 text-gray-800" strokeWidth={2} />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 rounded bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Avant
        </div>
        <div className="absolute right-3 top-3 rounded bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Après
        </div>

        {/* Maximize button */}
        {showMaximizeButton && onMaximize && (
          <button
            onClick={onMaximize}
            className="absolute right-3 bottom-3 z-50 flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label="Agrandir"
          >
            <Maximize className="h-4 w-4" strokeWidth={2} />
          </button>
        )}

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

export function BeforeAfterSlider({ beforeImage, afterImage, alt = 'Before/After comparison' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSliderChange = (value: number) => {
    setSliderPosition(value);
  };

  const handleMaximize = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Regular slider in card */}
      <SliderContent
        beforeImage={beforeImage}
        afterImage={afterImage}
        alt={alt}
        sliderPosition={sliderPosition}
        onSliderChange={handleSliderChange}
        showMaximizeButton={true}
        onMaximize={handleMaximize}
      />

      {/* Fullscreen modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-10 md:top-10"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          {/* Large slider in modal */}
          <div className="w-full max-w-6xl">
            <SliderContent
              beforeImage={beforeImage}
              afterImage={afterImage}
              alt={alt}
              sliderPosition={sliderPosition}
              onSliderChange={handleSliderChange}
              showMaximizeButton={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
