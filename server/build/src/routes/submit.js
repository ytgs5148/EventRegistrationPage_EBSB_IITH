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
const express_1 = require("express");
const google_spreadsheet_1 = require("google-spreadsheet");
const google_auth_library_1 = require("google-auth-library");
const serviceAccountAuth = new google_auth_library_1.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    keyFile: 'service-account.json'
});
const submitRouter = (0, express_1.Router)();
submitRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, branch, year, department, rollNumber, intro } = req.body;
    if (!fullName || !email || !branch || !year || !department || !rollNumber || !intro) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const doc = new google_spreadsheet_1.GoogleSpreadsheet(process.env.SHEET_ID || '', serviceAccountAuth);
    yield doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    yield sheet.addRow([fullName, email, branch, year, department, rollNumber, intro]);
    yield sheet.saveUpdatedCells();
    return res.status(200).json({ link: `https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}/edit?gid=0#gid=0` });
}));
exports.default = submitRouter;
