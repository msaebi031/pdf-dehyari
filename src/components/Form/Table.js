import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { TablePdf } from "../TablePdf";

const TableFrom = () => {
  const { nameDehyari, date, number, admin, years, financial } = useSelector((state) => state.data);
  return (
    <Fragment>
      {/* Start Title and information {date , number , joined} */}
      <Box display="flex" alignItems="start" justifyContent="end">
        <Box textAlign="center" flex="auto" pr={{ xs: 0, md: 5, lg: 6 }}>
          <Typography variant="p" component="p">
            وزارت کشور
          </Typography>
          <Typography variant="p" component="p">
            فرمانداری شهرستان تیران و کرون
          </Typography>
          <Typography variant="p" component="p">
            بخشداری کرون
          </Typography>
          <Typography variant="boldTitle" component="h2">
            « برگ درخواست خرید کالا یا خدمت »
          </Typography>
        </Box>

        <Box>
          <Typography variant="p" component="p">
            شماره : {number}
          </Typography>
          <Typography variant="p" component="p">
            تاریخ : {date}
          </Typography>
          <Typography variant="p" component="p">
            دهیاری {nameDehyari}
          </Typography>
        </Box>
      </Box>

      {/* Start Tables */}
      <Typography variant="p" component="p" pt={1}>
        خواهشمند است نسبت به خرید / انجام اقلام زیر اقدام فرمایید
      </Typography>
      <TablePdf />

      <Box pt={2} className="text">
        <Typography variant="p" component="p">
          1- امضاء درخواست کننده :
        </Typography>
        <Typography variant="p" component="p" pb={2.5}>
          نام و نام خانوادگی : <span className="font-bold">{admin}</span>
        </Typography>
        <Typography variant="p" component="p" pb={2}>
          2- خرید اقلام بالا از بودجه سال <span className="font-bold">{years}</span> بلا مانع است.
        </Typography>

        <Box textAlign="left" pb={2.5}>
          <Typography variant="caption" component="p" pl="26px">
            مسئول امور مالی
          </Typography>
          <Typography variant="caption" component="p">
            نام و نام خانوادگی : {financial}
          </Typography>
        </Box>

        <Typography variant="title" component="p">
          3- برابر مقررات مالی خریداری شود.
        </Typography>
        <Typography variant="title" component="p">
          نام و نام خانوادگی دهیار : <span className="font-bold">{admin}</span>
        </Typography>
      </Box>
    </Fragment>
  );
};

export default TableFrom;
