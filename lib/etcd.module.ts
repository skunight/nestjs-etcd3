import { DynamicModule, Module } from '@nestjs/common';
import { EtcdModuleOptions } from './etcd.interface';
import { createClient } from './etcd.client.provider';
import { ETCD_MODULE_OPTIONS } from './etcd.constants';
import { EtcdService } from './etcd.service';

@Module({})
export class EtcdModule {
  static root(
    options: EtcdModuleOptions,
  ): DynamicModule {
    return {
      module: EtcdModule,
      providers: [
        createClient(),
        {
          provide: ETCD_MODULE_OPTIONS,
          useValue: options,
        },
        EtcdService,
      ],
      exports: [EtcdService]
    };
  }
}
