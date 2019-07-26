"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EtcdModule_1;
const common_1 = require("@nestjs/common");
const etcd_client_provider_1 = require("./etcd.client.provider");
const etcd_constants_1 = require("./etcd.constants");
const etcd_service_1 = require("./etcd.service");
let EtcdModule = EtcdModule_1 = class EtcdModule {
    static root(options) {
        return {
            module: EtcdModule_1,
            providers: [
                etcd_client_provider_1.createClient(),
                {
                    provide: etcd_constants_1.ETCD_MODULE_OPTIONS,
                    useValue: options,
                },
                etcd_service_1.EtcdService,
            ],
            exports: [etcd_service_1.EtcdService]
        };
    }
};
EtcdModule = EtcdModule_1 = __decorate([
    common_1.Module({})
], EtcdModule);
exports.EtcdModule = EtcdModule;
