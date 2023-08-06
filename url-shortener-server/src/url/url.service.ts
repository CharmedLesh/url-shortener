import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';
const shortid = require('shortid');
import { Url } from './model/url.entity';

@Injectable()
export class UrlService {
    constructor(@InjectRepository(Url) private readonly urlRepository: Repository<Url>) {}
    private readonly logger = new Logger(UrlService.name);

    async shortenUrl(fullUrl: string) {
        const shortUrl: string = shortid.generate();
        if (this.isValidUrl(fullUrl)) {
            const urlData = await this.urlRepository.save({ fullUrl: fullUrl, shortUrl: shortUrl });
            return urlData;
        } else {
            const validUrl = `http://${fullUrl}`;
            const urlData = await this.urlRepository.save({ fullUrl: validUrl, shortUrl: shortUrl });
            return urlData;
        }
    }

    async redirectByShortUrl(shortUrl: string): Promise<string> {
        try {
            const urlData = await this.urlRepository.findOne({
                select: {
                    fullUrl: true
                },
                where: {
                    shortUrl: shortUrl
                }
            });

            return urlData.fullUrl;
        } catch (error) {
            throw new HttpException(`Page with ${shortUrl} url not found.`, HttpStatus.NOT_FOUND);
        }
    }

    async getStatsByShortUrl(shortUrl: string) {
        try {
            const urlData = await this.urlRepository.findOne({
                where: {
                    shortUrl: shortUrl
                }
            });

            return urlData;
        } catch (error) {
            throw new HttpException(`Page with ${shortUrl} url not found.`, HttpStatus.NOT_FOUND);
        }
    }

    private isValidUrl(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    }

    private async getExpiredItems() {
        const date = new Date();
        date.setDate(date.getDate() - 1);

        const expiredItems = await this.urlRepository.find({
            where: {
                creationDate: LessThan(date)
            }
        });

        return expiredItems;
    }

    private async deleteItemById(id: number) {
        const deletedItem = await this.urlRepository.delete({ id: id });
        return deletedItem;
    }

    @Cron(CronExpression.EVERY_HOUR)
    async clearData(): Promise<void> {
        this.logger.log('Deleting old data...');
        const expiredItems = await this.getExpiredItems();

        if (expiredItems.length > 0) {
            for (let i = 0; i < expiredItems.length; i++) {
                await this.deleteItemById(expiredItems[i].id);
            }
        }
    }
}
