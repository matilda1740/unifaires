module.exports = {
  async redirects() {
    return [
      {
        source: '/business',
        destination: '/business/dashboard',
        permanent: true,
      },
    ];
  },
};