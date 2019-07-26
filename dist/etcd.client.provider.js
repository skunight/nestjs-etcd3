"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const etcd_constants_1 = require("./etcd.constants");
const etcd3_1 = require("etcd3");
exports.createClient = () => ({
    provide: etcd_constants_1.ETCD_CLIENT,
    useFactory: (options) => {
        return new etcd3_1.Etcd3(options);
    },
    inject: [etcd_constants_1.ETCD_MODULE_OPTIONS],
});
