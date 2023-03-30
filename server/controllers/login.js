const { ReadLogin } = require("../../src/components/utils/ReadAndWrite");

const checkLogin = async ({ password, email }) => {
  const data = await ReadLogin();
  const checkExistingUser = data.find((e) => e.email == email && e.password == password);
  if (checkExistingUser) {
    return { result: true, message: "با موفقیت وارد شدید" };
  } else {
    return { result: false, message: "نام کاربری یا پسوورد اشتباه می باشد." };
  }
};

module.exports = {
  checkLogin,
};
