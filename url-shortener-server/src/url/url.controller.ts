import { Controller, Post, Body, Get, Param, Redirect, Delete } from '@nestjs/common';
import { UrlService } from './url.service';
import { ShortenUrlRequestDto } from './model/shorten-url.request';

@Controller('')
export class UrlController {
    constructor(private readonly urlService: UrlService) {}

    @Post('/shorten-url')
    async shortenUrl(@Body() fullUrlObj: ShortenUrlRequestDto) {
        const result = await this.urlService.shortenUrl(fullUrlObj.fullUrl);
        return result;
    }

    // @Delete('/:id')
    // async deleteItemById(@Param('id') id: string) {
    //     const result = await this.urlService.deleteItemById(Number(id));
    //     return result;
    // }

    @Get('/:shortUrl')
    @Redirect()
    async redirectByShortUrl(@Param('shortUrl') shortUrl: string) {
        const fullUrl = await this.urlService.redirectByShortUrl(shortUrl);
        return { url: fullUrl };
    }
}
