module.exports = ({ env }) => ({
  url: env("APP_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["dj1409d67f206b6", "jd09140711630990"]),
  },
});
