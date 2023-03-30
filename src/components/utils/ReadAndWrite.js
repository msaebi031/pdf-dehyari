const fs = require("fs");
const editJsonFile = require("edit-json-file");

const ReadData = () => {
  try {
    let file = editJsonFile(`database/data.json`);
    return file.get();
  } catch (error) {
    console.log(error);
  }
};

const ReadLogin = () => {
  try {
    let file = editJsonFile(`database/login.json`);
    return file.get();
  } catch (error) {
    console.log(error);
  }
};

const WriteData = async (id, name, admin, acount) => {
  try {
    const data = await ReadData();
    const copyData = [...data];
    const find = copyData.findIndex((e) => e.id == id);
    let getDate = copyData[find];
    getDate.name = name;
    getDate.admin = admin;
    getDate.account = acount;
    copyData[find] = getDate;
    var json = JSON.stringify(copyData);

    fs.writeFileSync("database/data.json", json);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ReadData, ReadLogin, WriteData };
