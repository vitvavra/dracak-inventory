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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const sequelize_1 = require("sequelize");
const SQLite = __importStar(require("sqlite3"));
const db = new sequelize_1.Sequelize('', '', '', {
    dialect: "sqlite",
    storage: "public/db.sqlite3",
    dialectOptions: {
        mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
    }
});
exports.Character = db.define('character', {
    id: sequelize_1.DataTypes.INTEGER,
    playerName: sequelize_1.DataTypes.TEXT,
    characterName: sequelize_1.DataTypes.TEXT,
    attrDexterity: sequelize_1.DataTypes.INTEGER,
    attrCharm: sequelize_1.DataTypes.INTEGER,
    attrIntelligence: sequelize_1.DataTypes.INTEGER,
    attrConstitution: sequelize_1.DataTypes.INTEGER,
    attrSerenity: sequelize_1.DataTypes.INTEGER,
    attrDetermination: sequelize_1.DataTypes.INTEGER,
    profBojovnik: sequelize_1.DataTypes.INTEGER,
    profLovec: sequelize_1.DataTypes.INTEGER,
    profKejklir: sequelize_1.DataTypes.INTEGER,
    profMastickar: sequelize_1.DataTypes.INTEGER,
    profZarikavac: sequelize_1.DataTypes.INTEGER
});
const Inventory = db.define('inventory', {
    id: sequelize_1.DataTypes.INTEGER,
    name: sequelize_1.DataTypes.TEXT
});
