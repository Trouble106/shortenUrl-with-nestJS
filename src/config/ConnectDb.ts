import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
// import { User } from '../entity/users/User.entity';
// import { Entity } from '../entity/index';
import { User } from '../user/User.entity';
import { Url } from '../url/Url.entity';

dotenv.config();
export const databaseInfo = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [User, Url],
  migrations: ['migration/**/*.ts'],
  cli: {
    entitiesDir: 'entity',
    migrationsDir: 'migration',
    subscribersDir: 'subscriber',
  },
});
