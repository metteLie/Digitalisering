import { getDokumenter } from "../../utils/Fauna";
export default async function handler(req, res) {
    if (req.method!== 'GET') {
        return res.status(405);
    }
    try { 
        const dokumenter = await getDokumenter();
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Noe gikk galt'});
    }
}