"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const etcd_constants_1 = require("./etcd.constants");
const etcd3_1 = require("etcd3");
const events_1 = require("events");
let EtcdService = class EtcdService extends events_1.EventEmitter {
    constructor(client) {
        super();
        this.client = client;
        this.watchMap = new Map();
    }
    getClient(namespace) {
        if (namespace) {
            return this.client.namespace(namespace);
        }
        else {
            return this.client;
        }
    }
    watch(key, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.watchMap.has(key)) {
                this.watchMap.set(key, 1);
                const watchBuilder = yield this.client.watch().key(key).create();
                watchBuilder.on('put', (res) => { this.emit(key, res.value); });
            }
            this.on(key, handler);
        });
    }
};
EtcdService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(etcd_constants_1.ETCD_CLIENT)),
    __metadata("design:paramtypes", [etcd3_1.Etcd3])
], EtcdService);
exports.EtcdService = EtcdService;
