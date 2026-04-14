type GrayscaleZoomBannerProps = {
  src: string
  label: string
}

export function GrayscaleZoomBanner({ src, label }: GrayscaleZoomBannerProps) {
  return (
    <div className="group relative w-full py-4">
      <div className="relative w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
        <div className="relative aspect-[3/1] w-full origin-center scale-100 transform-gpu transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-[1.04] motion-reduce:scale-100 motion-reduce:transition-none">
          <img
            src={src}
            alt={`${label} banner`}
            className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 ease-in-out will-change-filter grayscale group-hover:grayscale-0 motion-reduce:grayscale-0 motion-reduce:transition-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}
