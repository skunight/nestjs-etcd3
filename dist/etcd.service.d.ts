import { Etcd3 } from "etcd3";
export declare class EtcdService {
    private readonly client;
    constructor(client: Etcd3);
    getClient(): Etcd3;
}
