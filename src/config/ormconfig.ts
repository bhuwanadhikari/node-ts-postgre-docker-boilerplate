import config from './index'
export =  {
  host: config.postgres.host,
  type: 'postgres',
  port: config.postgres.port,
  username: config.postgres.username,
  password: config.postgres.password,
  database: config.postgres.database,
  entities: [
    'src/api/v1/models/*.entity.ts',
    'src/api/v1/models/**/*.entity.ts'
  ],
  migrations: [
    'src/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};