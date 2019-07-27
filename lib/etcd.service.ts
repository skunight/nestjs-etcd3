import { Injectable, Inject } from "@nestjs/common";
import { ETCD_CLIENT } from './etcd.constants';
import { Etcd3, Namespace } from "etcd3";
import { Observable } from "rxjs";

@Injectable()
export class EtcdService {
  private readonly watchMap = new Map<string, Observable<string>>()
  constructor(@Inject(ETCD_CLIENT) private readonly client: Etcd3) {}
  getClient(namespace? :string): Namespace {
    if (namespace) {
      return this.client.namespace(namespace)
    } else {
      return this.client
    }
  }

  watch(key: string): Observable<string> {
    if(!key || key.trim() === '') {
      throw new Error('key is empty')
    }
    if (this.watchMap.has(key)) {
      return this.watchMap.get(key)
    } else {
      const observable = Observable.create(async (observer) => {
        const watchBuilder = await this.client.watch().key(key).create()
        watchBuilder.on('put', (res) => { observer.next(res.value.toString()) })
      })
      this.watchMap.set(key, observable)
      return observable
    }
  }
}