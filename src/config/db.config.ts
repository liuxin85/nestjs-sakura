import { DataSourceOptions } from 'typeorm';
import * as path from 'path';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'dbconfig.dev',
  (): DataSourceOptions => ({
    url: process.env.url,
    type: 'postgres',
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
  }),
);
