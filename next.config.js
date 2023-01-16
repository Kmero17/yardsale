const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com',
    'placeimh.com', 
    'api.lorem.space',
    'vuzoon.com',
    'www.complementosdelcafe.com',
    'placing.com',
    'www.nespresso.com',
    'm.media-amazon.com', 
    'picsum.photos',
    'upcdn.io',
    'www.elgrafico.com.ar',
    'api.escuelajs.co'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);
