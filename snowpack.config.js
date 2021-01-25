/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/dist' },
    public: { url: '/', static: true },
  },
  plugins: ['@snowpack/plugin-typescript'],
};
