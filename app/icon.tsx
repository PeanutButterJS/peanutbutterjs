import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const spoon = readFileSync(join(process.cwd(), 'public', 'spoon1.png'))
  const src = `data:image/png;base64,${spoon.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1020',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={src} style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
      </div>
    ),
    { ...size }
  )
}
