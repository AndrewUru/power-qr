/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pbxt.replicate.delivery',
      'g4yqcv8qdhf169fk.public.blob.vercel-storage.com',
      'eh9eslytvq0gtpjx.public.blob.vercel-storage.com', // Añade este dominio
    ],
  },
};

module.exports = nextConfig;
