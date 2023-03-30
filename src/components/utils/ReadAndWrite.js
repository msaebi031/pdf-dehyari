import fs from "fs";

const ReadData = () => {
  try {
    let file = fs.readFileSync("database/data.json");
    var json = JSON.parse(file);
    return json;
  } catch (error) {
    console.log(error);
  }
};

const ReadLogin = () => {
  try {
    let file = fs.readFileSync(`database/login.json`);
    var json = JSON.parse(file);
    return json;
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

export { ReadData, ReadLogin, WriteData };
