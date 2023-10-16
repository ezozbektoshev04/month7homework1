import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";
import AddTeacher from "./AddTeacher";
// import { Stack } from "react-bootstrap";
import { Button, Stack } from "@mui/material";

const Teachers = () => {
  const [student, setStudent] = useState([]);
  const [teacherInp, setTeacherInp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setTeacherInp({
      ...teacherInp,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/teachers");
      setStudent(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addStudentData = () => {
    handleClose();
    try {
      axios.post("http://localhost:3000/teachers", teacherInp);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);
  const deleteStudent = (id) => {
    // handleClose();
    try {
      axios.delete("http://localhost:3000/teachers/" + id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setTeacherInp({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };
  return (
    <div
      style={{ marginLeft: "240px", marginTop: "100px", marginRight: "100px" }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: "600", fontSize: "20px" }}
                align="left"
              >
                #
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", fontSize: "20px" }}
                align="left"
              >
                Firstname
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", fontSize: "20px" }}
                align="left"
              >
                Lastname
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", fontSize: "20px" }}
                align="left"
              >
                Email
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", fontSize: "20px" }}
                align="left"
              >
                Phone number
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", fontSize: "20px" }}
                align="left"
              >
                Action
              </TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {student.length > 0
              ? student.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.firstname}
                    </TableCell>
                    <TableCell align="left">{row.lastname}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell
                      align="left"
                      sx={{ display: "flex", gap: "20px" }}
                    >
                      <Delete
                        sx={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteStudent(row.id)}
                      />
                      {/* <Edit sx={{ color: "lightblue" }} /> */}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack sx={{ paddingTop: "30px" }}>
        <Button
          variant="contained"
          sx={{ width: "200px" }}
          color="primary"
          onClick={handleShow}
        >
          Add New Teacher
        </Button>
      </Stack>
      <AddTeacher
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleChange={handleChange}
        student={teacherInp}
        addStudentData={addStudentData}
      />
    </div>
  );
};

export default Teachers;
