import { Injectable, Inject } from "@nestjs/common";
import { ETCD_CLIENT } from './etcd.constants';
import { Etcd3 } from "etcd3";

@Injectable()
export class EtcdService {
  constructor(@Inject(ETCD_CLIENT) private readonly client: Etcd3) {}
  getClient(): Etcd3 {
    return this.client
  }
}