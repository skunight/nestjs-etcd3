import { Etcd3, Namespace } from "etcd3";
import { EventEmitter } from "events";
export declare class EtcdService extends EventEmitter {
    private readonly client;
    private readonly watchMap;
    constructor(client: Etcd3);
    getClient(namespace?: string): Namespace;
    watch(key: string, handler: (res: string) => void): Promise<void>;
}
