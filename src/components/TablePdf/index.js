import { useDispatch, useSelector } from "react-redux";
import { deleteTable, fakeTable } from "../redux/data";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Clear } from "@mui/icons-material";

export const TablePdf = () => {
  const items = [
    { name: "ردیف" },
    { name: "نوع و مشخصات اقلام درخواستی" },
    { name: "تعداد | مقدار" },
    { name: "خرید از محل ردیف زیر بلا مانع است" },
    { name: "حذف" },
  ];

  const dispatch = useDispatch();
  const { table } = useSelector((state) => state.data);

  return (
    <Box bgcolor="dark.contrastText" width="100%" pt={1} pb={2}>
      <TableContainer>
        <Table className="table-minWidth" size="small" aria-label="a dense table" id="tablePdf">
          <TableHead>
            <TableRow>
              {items.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{ color: "#424242", border: " 1px solid #e1e1e1" }}
                  className="font-light"
                  align="right"
                >
                  {item.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row, index) => {
              let i = index + 1;
              return (
                <TableRow
                  key={index}
                  sx={{
                    color: "#424242",
                    "&:last-child td, &:last-child th": {
                      border: "1px solid #e1e1e1",
                    },
                  }}
                >
                  <TableCell
                    sx={{ color: "#424242", border: "1px solid #e1e1e1", fontSize: "22px" }}
                    size="small"
                    align="right"
                    className="font-salamat"
                    component="th"
                    scope="row"
                  >
                    {i}
                  </TableCell>
                  <TableCell sx={{ color: "#424242", border: "1px solid #e1e1e1" }} align="right">
                    {row.type}
                  </TableCell>
                  <TableCell sx={{ color: "#424242", border: "1px solid #e1e1e1" }} align="right">
                    {row.number}
                  </TableCell>
                  <TableCell sx={{ color: "#424242", border: "1px solid #e1e1e1" }} align="right">
                    {row.heal}
                  </TableCell>
                  <TableCell sx={{ color: "#424242", border: "1px solid #e1e1e1" }} align="right">
                    <Tooltip
                      enterDelay={300}
                      arrow
                      title={
                        <Typography className="font-bold" component="span" variant="caption">
                          حذف
                        </Typography>
                      }
                    >
                      <IconButton
                        onClick={() => {
                          dispatch(deleteTable(row.id));
                          dispatch(fakeTable());
                        }}
                      >
                        <Clear color="red" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
