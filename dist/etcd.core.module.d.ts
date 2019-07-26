import { DynamicModule } from '@nestjs/common';
import { EtcdModuleOptions } from './etcd.interface';
export declare class EtcdCoreModule {
    static root(options: EtcdModuleOptions): DynamicModule;
}
