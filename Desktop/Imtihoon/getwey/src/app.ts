import { catalogConfig } from '@config';
import { AuthGetweyModule, CatalogGetweyModule, ProductModuleGetwey, SectionModuleGetwey } from '@module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { userConfig } from 'config/user.config';

@Module({
  imports: [ConfigModule.forRoot({
    load: [catalogConfig, userConfig],
    isGlobal: true
  }),
  CatalogGetweyModule, SectionModuleGetwey, ProductModuleGetwey, AuthGetweyModule],
})

export class App { }
