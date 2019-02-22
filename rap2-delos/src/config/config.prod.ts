import { IConfigOptions } from "../types";

// 先从环境变量取配置
let config: IConfigOptions =  {
    version: '2.3',
    serve: {
        port: (process.env.EXPOSE_PORT && parseInt(process.env.EXPOSE_PORT)) || 8888,
    },
    keys: ['some secret hurr'],
    session: {
        key: 'rap2:sess',
    },
    db: {
        dialect: 'mysql',
        host: process.env.MYSQL_URL || '192.168.87.82',
        port: (process.env.MYSQL_PORT && parseInt(process.env.MYSQL_PORT)) || 3306,
        username: process.env.MYSQL_USERNAME || 'root',
        password: process.env.MYSQL_PASSWD || 'root',
        database: process.env.MYSQL_SCHEMA || 'RAP2_DELOS_APP',
        pool: {
            max: 80,
            min: 0,
            idle: 20000,
            acquire: 20000,
        },
        logging: false,
    },
    redis: {
        isRedisCluster: true,
        host: process.env.REDIS_URL || '192.168.87.5' || '192.168.43.74',
        port: (process.env.REDIS_PORT && parseInt(process.env.REDIS_PORT)) || 6380 || 6380,
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
