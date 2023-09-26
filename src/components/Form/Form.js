import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { blueGrey } from "@mui/material/colors";
import Button from "@mui/material/Button";

const Form = ({ fetchData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    DOB: "",
    collegeName: "",
    university: "",
    collegeId: "",
    address: "",
    course: "",
    grade: "",
  });

  //   const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    fetchData((prevData) => {
      return [...prevData, formData];
    });
  };

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <Typography variant="h3" color={blueGrey}>
        Registration form
      </Typography>
      <form onSubmit={submitHandler}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <TextField
            type="text"
            id="Firstname"
            name="firstName"
            onChange={eventHandler}
            value={formData.firstName}
          ></TextField>

          <FormLabel>Middle Name</FormLabel>
          <TextField
            type="text"
            id="Middlename"
            name="middleName"
            value={formData.middleName}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>Last Name</FormLabel>
          <TextField
            type="text"
            id="Lastname"
            name="lastName"
            value={formData.lastName}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>Email</FormLabel>
          <TextField
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>Password</FormLabel>
          <TextField
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={eventHandler}
          ></TextField>

          <FormLabel> Confirm Password</FormLabel>
          <TextField
            type="password"
            id="Copassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={eventHandler}
          ></TextField>

          <FormLabel>DOB</FormLabel>
          <TextField
            type="date"
            id="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={eventHandler}
          ></TextField>

          <FormGroup>
            <Typography variant="h6" gutterBottom guttertop>
              College detail
            </Typography>

            <FormLabel>College Name</FormLabel>
            <TextField
              type="text"
              id="College"
              name="collegeName"
              value={formData.collegeName}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>University</FormLabel>
            <TextField
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>College id </FormLabel>
            <TextField
              type="text"
              id="id"
              name="collegeId"
              value={formData.collegeId}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Address</FormLabel>
            <TextField
              type="text"
              id="Address"
              name="address"
              value={formData.address}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Course</FormLabel>
            <TextField
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Grade</FormLabel>
            <TextField
              type="text"
              id="Grade"
              name="grade"
              value={formData.grade}
              onChange={eventHandler}
            ></TextField>
          </FormGroup>

          {/* <FormGroup>
            <Typography variant="h6" gutterBottom guttertop>
              Work experience
            </Typography>

            <FormLabel>Name </FormLabel>
            <TextField
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Location</FormLabel>
            <TextField
              type="text"
              id="Location"
              name="Location"
              value={formData.Location}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Work Detail</FormLabel>
            <TextField
              type="text"
              id="Workdetail"
              name="Workdetail"
              value={formData.Workdetail}
              onChange={eventHandler}
            ></TextField>

            <FormLabel>Description</FormLabel>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={eventHandler}
            ></textarea>
          </FormGroup> */}

          <Button type="submit" variant="contained">
            click
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Form;
