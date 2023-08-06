import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
const shortid = require('shortid');

@Entity()
export class Url {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    fullUrl: string;

    @Column({ nullable: false })
    shortUrl: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    creationDate: Date;
}
