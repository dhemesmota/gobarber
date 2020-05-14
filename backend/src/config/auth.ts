export default {
  jwt: {
    secret: process.env.APP_SECRET || '4a292cc65d2d3e2559a46902001ba202',
    expiresIn: process.env.APP_EXPIRES_IN || '1d',
  },
};
