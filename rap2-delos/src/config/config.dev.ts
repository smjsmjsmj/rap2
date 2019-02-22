import { IConfigOptions } from "../types";

let config: IConfigOptions = {
  version: '2.3',
  serve: {
    port: 8888,
  },
  keys: ['some secret hurr'],
  session: {
    key: 'rap2:sess',
  },
  db: {
    dialect: 'mysql',
    host: '192.168.87.82',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'RAP2_DELOS_APP',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
  redis: {
    isRedisCluster: true,
    host: process.env.REDIS_URL || '192.168.43.74' || '192.168.43.74'||'192.168.87.5'||'172.20.4.78'||'172.20.4.78'||'192.168.87.5',
    port: (process.env.REDIS_PORT && parseInt(process.env.REDIS_PORT)) || 6382 || 6383 || 6384||6384||6383||6383,
    nodes:[{
        port: 6382,
        host: '192.168.43.74'
    }, {
        port: 6383,
        host: '192.168.43.74'
    }, {
        port: 6384,
        host: '192.168.87.5'
    }, {
        port: 6384,
        host: '172.20.4.78'
    }, {
        port: 6383,
        host: '172.20.4.78'
    }, {
        port: 6383,
        host: '192.168.87.5'
    }]
},
  mail: {
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: 'rap2_notify@outlook.com',
      pass: ''
    }
  },
  mailSender: 'rap2_notify@outlook.com',


}

export default config
