import { EtcdModuleOptions } from './etcd.interface';
import { ETCD_CLIENT, ETCD_MODULE_OPTIONS } from './etcd.constants';
import { Etcd3 } from 'etcd3'
export const createClient = () => ({
  provide: ETCD_CLIENT,
  useFactory: (options: EtcdModuleOptions) => {
    return new Etcd3(options)
  },
  inject: [ETCD_MODULE_OPTIONS],
})