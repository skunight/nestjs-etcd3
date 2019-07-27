import { Etcd3, Namespace } from "etcd3";
import { Observable } from "rxjs";
export declare class EtcdService {
    private readonly client;
    private readonly watchMap;
    constructor(client: Etcd3);
    getClient(namespace?: string): Namespace;
    watch(key: string): Observable<string>;
}
