import { EtcdModuleOptions } from './etcd.interface';
import { Etcd3 } from 'etcd3';
export declare const createClient: () => {
    provide: string;
    useFactory: (options: EtcdModuleOptions) => Etcd3;
    inject: string[];
};
