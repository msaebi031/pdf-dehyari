import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Box, Divider, Typography } from "@mui/material";

const ChailedForm = () => {
  const {
    nameDehyari,
    date,
    number,
    joined,
    price,
    priceWords,
    fors,
    payTo,
    numberSheets,
    typeAccount,
    account,
    ckeckNumber,
  } = useSelector((state) => state.data);
  return (
    <Fragment>
      {/* Start Title and information {date , number , joined} */}
      <Box display="flex" alignItems="end" justifyContent="end">
        <Box textAlign="center" flex="auto">
          <Typography variant="title" component="h2">
            وزارت کشور
          </Typography>
          <Typography variant="p" component="p">
            فرمانداری شهرستان تیران و کرون
          </Typography>
          <Typography variant="p" component="p">
            بخشداری کرون
          </Typography>
          <Typography variant="p" component="p">
            دهیاری {nameDehyari}
          </Typography>
        </Box>

        <Box>
          <Typography variant="p" component="p">
            تاریخ : {date}
          </Typography>
          <Typography variant="p" component="p">
            شماره : {number}
          </Typography>
          <Typography variant="p" component="p">
            پیوست : {joined}
          </Typography>
        </Box>
      </Box>

      {/* Start feild one */}
      <Box pt={2} className="text">
        <Typography variant="p" component="p">
          خواهشمند است دستور فرمایید :
        </Typography>
        <Typography variant="p" component="p">
          مبلغ{" "}
          <span className="font-bold">
            {new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price))}{" "}
          </span>
          ریال به حروف <span className="font-bold">{priceWords}</span> ریال بابت{" "}
          <span className="font-bold">{fors}</span> دروجه <span className="font-bold">{payTo}</span> پرداخت گردد.
        </Typography>
        <Typography variant="caption" component="p" textAlign="left" pb={2.5} pl={2}>
          نام و امضاء درخواست کننده
        </Typography>
        <Divider />
      </Box>

      {/* Start feild Two */}
      <Box pt={2} className="text">
        <Typography variant="p" component="p">
          مسئول امور مالی دهیاری های بخش کرون
        </Typography>
        <Typography variant="p" component="p">
          به استناد آیین نامه مایی دهیاری ها با توجه به تعداد <span className="font-bold">{numberSheets}</span> برگ
          ضمائم پیوست پرداخت مبلغ{" "}
          <span className="font-bold">
            {new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price))}{" "}
          </span>{" "}
          ریال از محل اعتبارات <span className="font-bold">{typeAccount}</span> از حساب به شماره{" "}
          <span className="font-bold">{account}</span> پست بانک شعبه تیران در وجه{" "}
          <span className="font-bold">{fors}</span> در صورت وجود اعتبار پس از کسر کسوارات بلا مانع است
        </Typography>
        <Typography variant="caption" component="p" textAlign="left" pb={2.5} pl={2}>
          نام و امضاء دهیار
        </Typography>
        <Divider />
      </Box>

      {/* Start feild Thery */}
      <Box pt={2} className="text">
        <Typography variant="p" component="p">
          {" "}
          چک شماره <span className="font-bold">{ckeckNumber}</span> به تاریخ <span className="font-bold">{date}</span> و
          مبلغ{" "}
          <span className="font-bold">
            {new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price))}
          </span>{" "}
          ریال به حروف <span className="font-bold">{priceWords}</span> ریال عهده پست بانک شعبه تیران در وجه{" "}
          <span className="font-bold">{fors}</span> صادر گردید
        </Typography>
        <Typography variant="caption" component="p" textAlign="left" pb={2.5} pl={2}>
          مسئول امور مالی
        </Typography>
        <Divider />
      </Box>

      {/* Start feild Foor */}
      <Box pt={2} className="text">
        <Typography variant="p" component="p">
          {" "}
          چک شماره <span className="font-bold">{ckeckNumber}</span> به تاریخ <span className="font-bold">{date}</span> و
          مبلغ{" "}
          <span className="font-bold">
            {new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price))}
          </span>{" "}
          ریال به حروف <span className="font-bold">{priceWords}</span> ریال تحویل اینجانت{" "}
          <span className="font-bold">{fors}</span> صادر گردید
        </Typography>
        <Typography variant="caption" component="p" textAlign="left" pb={2.5} pl={2}>
          تحویل گیرنده
        </Typography>
      </Box>
    </Fragment>
  );
};

export default ChailedForm;
