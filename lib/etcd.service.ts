import { Injectable, Inject } from "@nestjs/common";
import { ETCD_CLIENT } from './etcd.constants';
import { Etcd3, Namespace } from "etcd3";
import { EventEmitter } from "events";

@Injectable()
export class EtcdService extends EventEmitter {
  private readonly watchMap = new Map<string, number>()
  constructor(@Inject(ETCD_CLIENT) private readonly client: Etcd3) {
    super()
  }
  getClient(namespace? :string): Namespace {
    if (namespace) {
      return this.client.namespace(namespace)
    } else {
      return this.client
    }
  }

  async watch(key: string, handler: (res: string) => void): Promise<void> {
    if (!this.watchMap.has(key)) {
      this.watchMap.set(key, 1)
      const watchBuilder = await this.client.watch().key(key).create()
      watchBuilder.on('put', (res) => { this.emit(key, res.value.toString()) })
    } 
    this.on(key, handler)
  }
}