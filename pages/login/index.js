import Head from "next/head";
import { Fragment } from "react";
import Login from "../../src/components/Login";

const Logins = () => {
  return (
    <Fragment>
      <Head>
        <title>ورود | فرم دهیاری ها</title>
      </Head>
      <Login />
    </Fragment>
  );
};

export default Logins;
