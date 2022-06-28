module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-m0t0r`
  extends: ['m0t0r'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
