type AssetType = 'logo' | 'icon' | 'wallpaper'
type AssetColor = 'blue' | 'white' | 'light' | 'dark'
export interface AssetProps {
  name: string
  type: AssetType
  color: AssetColor
  usage: string
  svgPath?: string
  pngPath: string
  width: number
  height: number
}

/**
 * File updated: corrected PNG paths to match actual filenames with -512 suffix
 * (verus-*-*-512.png) so production downloads work.
 */
export const brand_assets: AssetProps[] = [
  {
    name: 'Horizontal blue logo',
    type: 'logo',
    color: 'blue',
    usage: 'Default logo for light backgrounds',
    svgPath: '/img/brand-assets/verus-logo-blue.svg',
    pngPath: '/img/brand-assets/verus-logo-blue-512.png',
    width: 300,
    height: 100,
  },
  {
    name: 'Horizontal white logo',
    type: 'logo',
    color: 'white',
    usage: 'For dark backgrounds',
    svgPath: '/img/brand-assets/verus-logo-white.svg',
    pngPath: '/img/brand-assets/verus-logo-white-512.png',
    width: 300,
    height: 100,
  },
  {
    name: 'Icon blue',
    type: 'icon',
    color: 'blue',
    usage: 'Default icon for light backgrounds',
    svgPath: '/img/brand-assets/verus-icon-blue.svg',
    pngPath: '/img/brand-assets/verus-icon-blue-512.png',
    width: 100,
    height: 100,
  },
  {
    name: 'Icon white',
    type: 'icon',
    color: 'white',
    usage: 'For dark backgrounds',
    svgPath: '/img/brand-assets/verus-icon-white.svg',
    pngPath: '/img/brand-assets/verus-icon-white-512.png',
    width: 100,
    height: 100,
  },
  {
    name: 'Desktop Wallpaper - Logo Dark',
    type: 'wallpaper',
    color: 'dark',
    usage: 'Desktop wallpaper with Verus logo on dark background',
    pngPath: '/img/brand-assets/desktop-wallpaper-verus-logo-dark.png',
    width: 400,
    height: 225, // 16:9 aspect ratio
  },
  {
    name: 'Desktop Wallpaper - Logo Light',
    type: 'wallpaper',
    color: 'light',
    usage: 'Desktop wallpaper with Verus logo on light background',
    pngPath: '/img/brand-assets/desktop-wallpaper-verus-logo-light.png',
    width: 400,
    height: 225, // 16:9 aspect ratio
  },
  {
    name: 'Desktop Wallpaper - Tagline Dark',
    type: 'wallpaper',
    color: 'dark',
    usage: 'Desktop wallpaper with Verus logo and tagline on dark background',
    pngPath: '/img/brand-assets/desktop-wallpaper-verus-tagline-dark.png',
    width: 400,
    height: 225, // 16:9 aspect ratio
  },
  {
    name: 'Desktop Wallpaper - Tagline Light',
    type: 'wallpaper',
    color: 'light',
    usage: 'Desktop wallpaper with Verus logo and tagline on light background',
    pngPath: '/img/brand-assets/desktop-wallpaper-verus-tagline-light.png',
    width: 400,
    height: 225, // 16:9 aspect ratio
  },
]
