import fs from "fs";

const ReadData = () => {
  try {
    const jsonDirectory = path.join(process.cwd(), "database");
    let file = fs.readFileSync(jsonDirectory + "/data.json", "utf8");
    var json = JSON.parse(file);
    return json;
  } catch (error) {
    console.log(error);
  }
};

const ReadLogin = () => {
  try {
    const jsonDirectory = path.join(process.cwd(), "database");
    let file = fs.readFileSync(jsonDirectory + "/login.json", "utf8");
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
    const jsonDirectory = path.join(process.cwd(), "database");
    fs.writeFileSync(jsonDirectory + "/data.json", json);
  } catch (error) {
    console.log(error);
  }
};

export { ReadData, ReadLogin, WriteData };
