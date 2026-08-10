/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /**
     * Hosts permitidos para imágenes remotas.
     * Hoy: Unsplash (fotos libres de derechos, licencia Unsplash).
     * Fase 2: al usar UploadThing/Cloudinary, agrega aquí ese host, ej:
     * { protocol: "https", hostname: "res.cloudinary.com" }
     */
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
