import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
<img
  src={src}
  alt={`Cover Image for ${title}`}
  className={cn('w-32 h-32 md:w-40 md:h-40 object-contain mb-4 mx-auto transition-transform duration-200', {
    'hover:scale-105': slug, 
  })}
/>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
