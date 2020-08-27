import { Module } from '@nestjs/common';
import { databaseInfo } from './config/ConnectDb';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';

@Module({
  imports: [databaseInfo],
  controllers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
