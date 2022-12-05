import React from "react";
import "./index.css";
// import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
// import Button from '@mui/material/Button';
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from '@mui/material/Stack';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Courses = () => {
  // Material UI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        classDays: "",
        teacherName: "",
        sectionName: "",
        courseName: "",
        batchNumber: "",
      },

      validationSchema: yup.object({
        batchNumber: yup
          .number("Enter batch Number in number")
          .required("batch Number is required")
          .min(1, "Batch can't be less then 1")
          .max(200, "User can't be older then 200")
          .positive("Age can't be negative")
          .integer("Enter age without decimal"),
        classDays: yup
          .string("Enter your classDays")
          .required("classDays is required")
          .min(3, "Please enter more then 3 characters ")
          .max(12, "Please enter within 12 characters "),
        teacherName: yup
          .string("Enter your Teacher Name")
          // .email("Enter your email")
          .required("Teacher Name is required")
          .min(3, "Please enter more then 3 characters ")
          .max(35, "Please enter within 35 characters"),
        sectionName: yup
          .string("Enter your Section Name")
          .required("Section nName is required")
          .min(1, "Please enter more then 1 characters ")
          .max(25, "Please enter within 25 characters "),
        courseName: yup
          .string("Enter your Course Name")
          .required("Course Name is required")
          .min(1, "Please enter more then 1 characters ")
          .max(25, "Please enter within 25 characters "),
        createdOn: yup.date().default(() => new Date()),
      }),

      onSubmit: async (values) => {
        console.log(values.courseName);
        try {
          await axios.post(" http://localhost:3002/course", {
            course: values.courseName,
          });
        } catch (err) {
          console.log(err);
        }
        //do something like there you can call API or send data to firebase
        //   if (errors) console.log("error is", errors);
      },
    });
  // console.log(Formik)
  // if (fmrk.errors) console.log("error is", fmrk.errors);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Course
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} className="modalForm1">
            <label htmlFor="classStartTime" className="lable">
              Class Start Time
            </label>
            <input
              type="time"
              className="input"
              name="classStartTime"
              // value={values.name}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />

            <label htmlFor="classEndTime" className="lable">
              Class End Time
            </label>
            <input
              type="time"
              className="input"
              name="classEndTime"
              // value={values.name}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />

            <label htmlFor="classDays" className="placeholder">
              Class Days
            </label>
            <input
              className="input"
              type="text"
              autoComplete="on"
              id="classDays"
              placeholder="Monday..."
              name="classDays"
              value={values.classDays}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && Boolean(errors.classDays) ? (
              <span className="errorSpan">{errors.classDays}</span>
            ) : null}

            <label htmlFor="teacherName" className="placeholder">
              Teacher Name
            </label>
            <input
              className="input"
              type="text"
              autoComplete="on"
              id="teacherName"
              placeholder="Inzamam Malik..."
              name="teacherName"
              value={values.teacherName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && Boolean(errors.teacherName) ? (
              <span className="errorSpan">{errors.teacherName}</span>
            ) : null}

            <label htmlFor="sectionName" className="placeholder">
              Section Name
            </label>
            <input
              className="input"
              type="text"
              autoComplete="on"
              id="sectionName"
              placeholder="section H..."
              name="sectionName"
              value={values.sectionName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && Boolean(errors.sectionName) ? (
              <span className="errorSpan">{errors.sectionName}</span>
            ) : null}

            <label htmlFor="courseName" className="placeholder">
              Course Name
            </label>
            <input
              className="input"
              type="text"
              autoComplete="on"
              id="courseName"
              placeholder="Web Development..."
              name="courseName"
              value={values.courseName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && Boolean(errors.courseName) ? (
              <span className="errorSpan">{errors.courseName}</span>
            ) : null}

            <label htmlFor="batchNumber" className="placeholder">
              Batch Number
            </label>
            <input
              className="input"
              type="number"
              autoComplete="on"
              id="batchNumber"
              placeholder="8..."
              min="0"
              name="batchNumber"
              value={values.batchNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && Boolean(errors.batchNumber) ? (
              <span className="errorSpan">{errors.batchNumber}</span>
            ) : null}

            {/* <p id="error_msg">{errors}</p> */}

            <button type="submit" className="submitBtn">
              SUBMIT
            </button>

            <div className="subtitle">by Shehzad</div>
          </form>
        </Box>
      </Modal>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button> */}
    </>
  );
};

export default Courses;
