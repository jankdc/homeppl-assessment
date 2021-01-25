/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-typescript'],
};
