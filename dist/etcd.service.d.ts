import { Etcd3, Namespace } from "etcd3";
export declare class EtcdService {
    private readonly client;
    constructor(client: Etcd3);
    getClient(namespace?: string): Namespace;
}
