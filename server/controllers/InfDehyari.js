const { ReadData, WriteData } = require("../../src/components/utils/ReadAndWrite");

const SelectInfDehyari = async ({ id }) => {
  const data = await ReadData();
  const find = await data.find((e) => e.id == id);
  console.log(SelectInfDehyari);
  return find;
};

const SelectAllInfDehyari = async () => {
  const data = await ReadData();
  return data;
};

const UpdateInfDehyari = async ({ id, name, admin, account }) => {
  await WriteData(id, name, admin, account);
};

module.exports = { SelectInfDehyari, SelectAllInfDehyari, UpdateInfDehyari };
