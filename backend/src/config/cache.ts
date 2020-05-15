import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  config: {
    reids: RedisOptions;
  };
}

export default {
  driver: 'redis',

  config: {
    reids: {
      host: 'localhost',
      port: 6379,
      password: undefined,
    },
  },
} as ICacheConfig;
