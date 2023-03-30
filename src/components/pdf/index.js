import jsPDF from "jspdf";
import "./calibril-normal"; // Light
import "./calibri-normal"; //Bold
import autoTable from "jspdf-autotable";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import {
  BOOK_BUY,
  DATE,
  FARMANDARI,
  FILED_FOOR,
  FILED_ONE,
  FILED_THERY,
  FILED_TWO,
  JOINED,
  NUMBER,
  ORDER,
  ORDER_LEFT,
  ORDER_TWO,
  SIGNATURE,
  SIGNATURE_FOOR,
  SIGNATURE_THERY,
  SIGNATURE_TWO,
  TITLE_BOLD,
  TITLE_FOOR,
  TITLE_THERY,
  TITLE_TWO,
  SIGNATURE_LEFT,
  NAME_LEFT,
  BUY_LEFT,
  RESPONSIBLE,
  NAME_RESPONSIBLE,
  REGULATION,
  NAME_VILLAGER,
} from "./text";
import { reset } from "../redux/data";

const PDFS = ({ refProps }) => {
  const dispatch = useDispatch();
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
    years,
    admin,
    fakeTable,
  } = useSelector((state) => state.data);

  const handleReset = (refProps) => {
    refProps.current.reset(); // will reset the entire form :)
    dispatch(reset());
  };

  const handleCreatePdf = async () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const dataWithIndex = fakeTable.map((d, i) => ({ ...d, Index: i + 1 }));

    const doc = new jsPDF(orientation, unit, size);
    doc.setLanguage("fa-IR");
    doc.setFontSize(13);
    doc.setFont("calibri");
    doc.text(TITLE_BOLD, 600, 20);
    doc.setFont("calibril");
    doc.setFontSize(11);
    doc.text(TITLE_TWO, 575, 40);
    doc.text(TITLE_THERY, 605, 60);
    doc.text(TITLE_FOOR(nameDehyari), 673, 80, { align: "right" });
    doc.text(DATE(date), 515, 40, { align: "right" });
    doc.text(NUMBER(number), 515, 60, { align: "right" });
    doc.text(JOINED(joined), 515, 80, { align: "right" });
    doc.text(ORDER, 708, 100);
    doc.text(
      FILED_ONE(new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price)), priceWords, fors, payTo),
      833,
      125,
      {
        maxWidth: 470,
        align: "right",
        lineHeightFactor: 2.3,
      }
    );
    doc.text(SIGNATURE, 470, 180);
    // doc.setLineWidth(-1);
    doc.setDrawColor(130, 130, 130);
    doc.line(440, 200, 830, 200); // horizontal line
    doc.text(ORDER_TWO, 833, 220, { align: "right" });
    doc.text(
      FILED_TWO(
        numberSheets,
        new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price)),
        typeAccount,
        account,
        payTo
      ),
      833,
      245,
      {
        maxWidth: 470,
        align: "right",
        lineHeightFactor: 2.3,
      }
    );
    doc.text(SIGNATURE_TWO, 470, 325);
    doc.line(440, 345, 830, 345);
    doc.text(
      FILED_THERY(
        ckeckNumber,
        date,
        new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price)),
        priceWords,
        payTo
      ),
      833,
      365,
      {
        maxWidth: 470,
        align: "right",
        lineHeightFactor: 2,
      }
    );
    doc.text(SIGNATURE_THERY, 470, 410);
    doc.line(440, 430, 830, 430);
    doc.text(
      FILED_FOOR(
        ckeckNumber,
        date,
        new Intl.NumberFormat(undefined, { currency: "USD" }).format(Number(price)),
        priceWords,
        payTo
      ),
      833,
      455,
      {
        maxWidth: 470,
        align: "right",
        lineHeightFactor: 2.3,
      }
    );
    doc.text(SIGNATURE_FOOR, 470, 495);
    doc.setDrawColor(240, 240, 240);
    // Line Table
    doc.line(430, 0, 430, 800); // horizontal line
    doc.text(TITLE_BOLD, 190, 24);
    doc.text(FARMANDARI, 170, 40);
    doc.text(TITLE_THERY, 184, 60);
    doc.setFontSize(13.5);
    doc.setFont("calibri");
    doc.text(BOOK_BUY, 125, 90);
    doc.text(REGULATION, 419, 520, { align: "right" });
    doc.text(NAME_VILLAGER(admin), 419, 542, { align: "right" });
    doc.setFont("calibril");
    doc.setFontSize(11);
    doc.text(NUMBER(number), 95, 40, { align: "right" });
    doc.text(DATE(date), 95, 60, { align: "right" });
    doc.text(TITLE_FOOR(nameDehyari), 95, 80, { align: "right" });
    doc.text(ORDER_LEFT, 420, 107, { align: "right" });
    doc.text(SIGNATURE_LEFT, 420, 416, { align: "right" });
    doc.text(NAME_LEFT(admin), 420, 430, { align: "right" });
    doc.text(BUY_LEFT(years), 421, 460, { align: "right" });
    doc.text(RESPONSIBLE, 130, 480, { align: "right" });
    doc.text(NAME_RESPONSIBLE, 130, 499, { align: "right" });

    autoTable(doc, {
      // html: '#table',

      columns: [
        { header: "خرید از محل ردیف زیر بلا مانع است", dataKey: "heal" },
        { header: "تعداد | مقدار", dataKey: "number" },
        { header: "نوع و مشخصات اقلام درخواستی", dataKey: "type" },
        { header: "ردیف", dataKey: "Index" },
      ],
      body: dataWithIndex,
      theme: "grid",
      styles: { font: "calibril", textColor: "#000", halign: "center", fontSize: 9, align: "right" },
      columnStyles: { halign: "left" },
      headStyles: { fillColor: [255, 255, 255] },
      tableLineWidth: 0.1,
      margin: { top: 117, left: 15.5 },
      tableWidth: 407,
    });

    doc.save(`${nameDehyari}-${date}.pdf`);
  };

  return (
    <Box justifyContent={{ xs: "center" }} display={{ xs: "flex" }} marginTop={{ xs: 3, sm: 3, md: 3 }}>
      <Box className="p-relative pointer" onClick={() => handleCreatePdf()}>
        <Box
          alt="header-button"
          component="img"
          height="74%"
          width="100%"
          className="w-100"
          src="/imgs/img-btn-pdf/button-right.png"
        />
        <Box className="p-absolute w-100">
          <Typography color="light.light" variant="p" component="h2" bottom="19px" right="42px" className="p-absolute">
            {" "}
            دانلود و پرینت
          </Typography>
        </Box>
      </Box>
      <Box className="p-relative pointer" onClick={() => handleReset(refProps)}>
        <Box
          alt="header-button"
          height="74%"
          width="100%"
          component="img"
          className="w-100"
          src="/imgs/img-btn-pdf/button-left.png"
        />
        <Box className="p-absolute w-100">
          <Typography
            variant="p"
            color="light.light"
            component="h2"
            bottom="19px"
            right="33.7px"
            className="p-absolute"
          >
            ریست کردن اطلاعات
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PDFS;
