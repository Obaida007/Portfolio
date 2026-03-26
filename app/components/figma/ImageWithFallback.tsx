'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number | string
  height?: number | string
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  className,
  style,
  ...rest
}) => {
  const [didError, setDidError] = useState(false)

  const handleError = () => setDidError(true)

  // Optional: convert string percentages to numeric for next/image
  const isNumeric = (val: any) => typeof val === 'number' || /^\d+$/.test(val)

  return didError ? (
    <div
      className={`flex items-center justify-center bg-gray-100 ${className ?? ''}`}
      style={{ width, height, ...style }}
    >
      <img
        src={ERROR_IMG_SRC}
        alt="Error loading image"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        {...rest}
        data-original-url={src}
      />
    </div>
  ) : (
    <Image
      src={src as string || ERROR_IMG_SRC}
      alt={alt || ''}
      width={isNumeric(width) ? Number(width) : undefined}
      height={isNumeric(height) ? Number(height) : undefined}
      style={{ width, height, objectFit: 'contain', ...style }}
      className={className}
      onError={handleError}
      {...rest}
    />
  )
}