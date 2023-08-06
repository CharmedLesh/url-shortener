import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlModule } from './url/url.module';
import * as Joi from 'joi';
import { Url } from './url/model/url.entity';

@Module({
    imports: [
        // ConfigModule.forRoot({
        //     validationSchema: Joi.object({
        //         PORT: Joi.string().required(),
        //         POSTGRES_HOST: Joi.string().required(),
        //         POSTGRES_PORT: Joi.number().required(),
        //         POSTGRES_USERNAME: Joi.string().required(),
        //         POSTGRES_PASSWORD: Joi.string().required(),
        //         POSTGRES_DB: Joi.string().required()
        //     }),
        //     envFilePath: `../.${process.env.NODE_ENV}.env`
        // }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'url-shortener',
            entities: [Url],
            synchronize: true
        }),
        UrlModule
    ]
})
export class AppModule {}
