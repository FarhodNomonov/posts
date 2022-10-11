import React from "react";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./appeals.css";

function Appeals() {
  const data = [
    {
      id: 1,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Не погашен",
    },
    {
      id: 2,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Отменён",
    },
    {
      id: 3,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Погашен",
    },
    {
      id: 4,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Пул",
    },
    {
      id: 5,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Погашен",
    },
    {
      id: 6,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Отменён",
    },
    {
      id: 7,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Погашен",
    },
    {
      id: 8,
      date: "02.08.22",
      location: "БТЦ-1-1-1",
      code: "1",
      status: "Погашен",
    },
  ];
  const [query, setQuery] = React.useState("");

  return (
    <div>
      <header className="header">
        <div className="search_inp">
          <input
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="ФИО или пропуск"
          />
          <SearchIcon />
        </div>
        <div className="header_qr">
          <QrCodeScannerIcon
            sx={{
              width: 20,
              height: 20,
              color: "#fff",
            }}
          />
        </div>
      </header>
      <div className="appeals_btn">
        <button>Не погашен</button>
        <button>Отменён</button>
        <button>Погашен</button>
        <button>Пул</button>
      </div>
      <div className="appeals_table">
        <TableContainer component={Paper}>
          <Table
            sx={{ width: "maxContent", border: "none", overflow: "scroll" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "rgba(0, 0, 0, 0.6)" }}>Дата</TableCell>
                <TableCell sx={{ color: "rgba(0, 0, 0, 0.6)" }} align="right">
                  Локация
                </TableCell>
                <TableCell sx={{ color: "rgba(0, 0, 0, 0.6)" }} align="right">
                  Код
                </TableCell>
                <TableCell sx={{ color: "rgba(0, 0, 0, 0.6)" }} align="right">
                  Статус
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((row) => {
                  if (query === "") {
                    //if query is empty
                    return row;
                  } else if (
                    row.status.toLowerCase().includes(query.toLowerCase())
                  ) {
                    //returns filtered array
                    return row;
                  }
                })
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>{row.date}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                    <TableCell align="right">{row.code}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color:
                          row.status === "Отменён"
                            ? "#E91E63"
                            : row.status === "Погашен"
                            ? "#4CAF50"
                            : "",
                      }}
                    >
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Appeals;
