import { Module } from '@nestjs/common';
import { StoresModule } from './stores/stores.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StoresModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
