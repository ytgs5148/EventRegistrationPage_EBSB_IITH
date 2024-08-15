import { Router } from 'express';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    keyFile: 'service-account.json'
});

const submitRouter = Router();

submitRouter.post('/', async (req, res) => {
    const { fullName, email, branch, year, department, rollNumber, intro } = req.body

    if (!fullName || !email || !branch || !year || !department || !rollNumber || !intro) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const doc = new GoogleSpreadsheet(process.env.SHEET_ID || '', serviceAccountAuth);

    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow([fullName, email, branch, year, department, rollNumber, intro]);
    await sheet.saveUpdatedCells();

    return res.status(200).json({ link: `https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}/edit?gid=0#gid=0` });
});

export default submitRouter;
