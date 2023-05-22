"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@mdi/font/css/materialdesignicons.css");
const vue_1 = require("vue");
const App_vue_1 = __importDefault(require("./App.vue"));
const router_1 = __importDefault(require("./router"));
require("vuetify/styles");
const vuetify_1 = require("vuetify");
const components = __importStar(require("vuetify/components"));
const directives = __importStar(require("vuetify/directives"));
const mdi_1 = require("vuetify/iconsets/mdi");
const vuetify = (0, vuetify_1.createVuetify)({
    icons: {
        defaultSet: 'mdi',
        aliases: mdi_1.aliases,
        sets: {
            mdi: mdi_1.mdi,
        }
    },
    components,
    directives,
});
const app = (0, vue_1.createApp)(App_vue_1.default);
app.use(router_1.default);
app.use(vuetify);
app.mount('#app');
