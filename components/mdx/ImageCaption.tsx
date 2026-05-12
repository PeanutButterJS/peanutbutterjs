import Image from 'next/image';

interface ImageCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function ImageCaption({
  src,
  alt,
  caption,
  width = 760,
  height = 400,
}: ImageCaptionProps) {
  return (
    <figure className="my-8 not-prose">
      <div className="rounded-[14px] overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
