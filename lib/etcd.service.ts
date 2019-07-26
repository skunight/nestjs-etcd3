import { Injectable, Inject } from "@nestjs/common";
import { ETCD_CLIENT } from './etcd.constants';
import { Etcd3, Namespace } from "etcd3";

@Injectable()
export class EtcdService {
  constructor(@Inject(ETCD_CLIENT) private readonly client: Etcd3) {}
  getClient(namespace? :string): Namespace {
    if (namespace) {
      return this.client.namespace(namespace)
    } else {
      return this.client
    }
  }
}