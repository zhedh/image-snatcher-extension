/// <reference types="vite/client" />

declare module '@/components/*' {
  const component: any;
  export default component;
}

declare module '@/assets/*' {
  const asset: string;
  export default asset;
}

declare module '@/popup/pages/*' {
  const page: any;
  export default page;
}

declare module '@/theme' {
  const theme: any;
  export default theme;
}

declare module '@/theme/*' {
  const themeModule: any;
  export default themeModule;
}
