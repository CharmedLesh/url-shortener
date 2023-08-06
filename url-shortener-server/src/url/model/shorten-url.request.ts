import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ShortenUrlRequestDto {
    @IsNotEmpty()
    @IsUrl(undefined, { message: 'You must provide a URL address.' })
    fullUrl: string;
}
