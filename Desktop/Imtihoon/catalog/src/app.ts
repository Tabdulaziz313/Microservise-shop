import { dbConfig } from './config/database.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { catalogModule } from './modules/catalog';
import {ProductModule, } from './modules/product'
import {SectionModule} from './modules/section'

@Module({
  imports: [ConfigModule.forRoot({
    load: [dbConfig],
    isGlobal: true
  }), catalogModule ,
  //  ProductModule, SectionModule
  ],
})
export class App {}
