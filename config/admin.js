module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a110c3fb1e0069e2cdbcd424b24056f'),
  },
});
