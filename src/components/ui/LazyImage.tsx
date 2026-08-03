import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspect?: string;
  loading?: 'lazy' | 'eager';
};

export default function LazyImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/3]',
  loading = 'lazy',
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden ${aspect} ${className}`}>
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-beige-200 to-lightgray" />
      )}
      {errored ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-beige text-matte/40">
          <ImageIcon className="h-8 w-8" />
          <span className="text-xs uppercase tracking-widest">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
