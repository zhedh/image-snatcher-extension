export enum ImageType {
  IMG = 'img',
  CSS = 'css',
  CANVAS = 'canvas'
}

export const ImageSettingType = {
  ...ImageType,
  COMPRESS: 'compress'
} as const

export type ImageSettingType = typeof ImageSettingType[keyof typeof ImageSettingType]

export interface ImageInfo {
  id: string;
  url: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  size: number;
  type: ImageType;
  thumbnail: string;
  originalUrl: string;
}