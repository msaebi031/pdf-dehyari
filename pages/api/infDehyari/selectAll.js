import { SelectAllInfDehyari } from "../../../server/controllers/InfDehyari";

export default async function handler(req, res) {
  const data = await SelectAllInfDehyari();

  res.status(200).json({ result: true, data });
}
