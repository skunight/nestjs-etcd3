import { DynamicModule, Module } from '@nestjs/common';
import { EtcdModuleOptions } from './etcd.interface';
import { EtcdCoreModule } from './etcd.core.module';

@Module({})
export class EtcdModule {
  static root(
    options: EtcdModuleOptions,
  ): DynamicModule {
    return {
      module: EtcdModule,
      imports: [EtcdCoreModule.root(options)],
    };
  }
}
