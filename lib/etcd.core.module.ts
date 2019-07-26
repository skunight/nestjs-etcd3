import { DynamicModule, Module, Global } from '@nestjs/common';
import { EtcdModuleOptions } from './etcd.interface';
import { createClient } from './etcd.client.provider';
import { ETCD_MODULE_OPTIONS } from './etcd.constants';
import { EtcdService } from './etcd.service';


@Global()
@Module({
  providers: [EtcdService],
  exports: [EtcdService],
})
export class EtcdCoreModule {
  static root(
    options: EtcdModuleOptions,
  ): DynamicModule {
    return {
      module: EtcdCoreModule,
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
