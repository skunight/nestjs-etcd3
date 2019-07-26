import { DynamicModule } from '@nestjs/common';
import { EtcdModuleOptions } from './etcd.interface';
export declare class EtcdModule {
    static root(options: EtcdModuleOptions): DynamicModule;
}
