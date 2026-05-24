import { DataSourceOptions } from 'typeorm';
import * as path from 'path';

export default (): DataSourceOptions => ({
  url: process.env.url,
  type: 'postgres',
  synchronize: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
});
