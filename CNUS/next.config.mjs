/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Strapi local (desarrollo)
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Cloudinary (producción — agregar cuando esté lista la cuenta)
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      // Unsplash (para imágenes de referencia durante desarrollo)
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
