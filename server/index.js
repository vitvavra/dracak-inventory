"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const characters_ts_1 = require("./characters.ts");
const ICharacter_ts_1 = require("./client/src/interface/ICharacter.ts");
const express = require('express');
const cors = require('cors');
const app = express();
const host = 'http://localhost';
const port = 3000;
const corsOptions = {
    origin: 'https://localhost:5173'
};
app.use(cors());
// We'll use the public directory to serve the Vue App
app.use(express.static('public'));
app.get('/characters', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield characters_ts_1.Character.findAll();
    const response = [];
    for (let a in data) {
        response.push(ICharacter_ts_1.Character.fromDb(a));
    }
    res.send(JSON.stringify(response));
}));
app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
});
