import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './model/url.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
    imports: [TypeOrmModule.forFeature([Url]), ScheduleModule.forRoot()],
    providers: [UrlService],
    controllers: [UrlController]
})
export class UrlModule {}
