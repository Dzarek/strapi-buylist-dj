module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8457cfde176d6c4cdf89ccfea6fb8f01'),
  },
});
