import { UpdateInfDehyari } from "../../../server/controllers/InfDehyari";

export default async function handler(req, res) {
  const { id, name, admin, account } = req.body;
  await UpdateInfDehyari({ id, name, admin, account });

  res.status(200).json({ result: true });
}
