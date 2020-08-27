import { User } from 'src/user/User.entity';
import { Url } from 'src/url/Url.entity';
import * as dotenv from 'dotenv';
dotenv.config();

console.log('User', User);
export = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, Url],
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
