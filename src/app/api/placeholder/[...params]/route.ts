import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params: string[] }> }
) {
  const resolvedParams = await params
  const [width, height] = resolvedParams.params
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect x="20%" y="20%" width="60%" height="60%" fill="#e5e7eb" rx="8"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dy="0.3em">
        ${width}×${height}
      </text>
      <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="12" fill="#9ca3af" text-anchor="middle" dy="0.3em">
        Campaign Merch
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
