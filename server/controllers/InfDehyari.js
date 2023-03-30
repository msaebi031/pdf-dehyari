import { ReadData, WriteData } from "../../src/components/utils/ReadAndWrite";

const SelectInfDehyari = async ({ id }) => {
  const data = await ReadData();
  const find = await data.find((e) => e.id == id);
  return find;
};

const SelectAllInfDehyari = async () => {
  const data = await ReadData();
  return data;
};

const UpdateInfDehyari = async ({ id, name, admin, account }) => {
  await WriteData(id, name, admin, account);
};

export { SelectInfDehyari, SelectAllInfDehyari, UpdateInfDehyari };
