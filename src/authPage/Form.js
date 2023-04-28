import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import "./Form.css";
import Dropzone from "react-dropzone";
import { login, signup } from "../apiCalls";
const Form = (props) => {
  let { status } = props;
  let urlState = status.includes("signup") === true ? true : false;
  const message = urlState
    ? "Already have an account? Login here"
    : "Dont have an acount? Sign Up here";
  const mode = useSelector((state) => {
    return state.mode.mode;
  });
  const initialValues = urlState
    ? {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        occupation: "",
        picture: "",
        location: "",
      }
    : {
        email: "",
        password: "",
      };
  const theme = useTheme();
  let validationSchema;
  const changeStatus = (resetForm) => {
    resetForm();
    props.handleStatus(urlState);
  };
  const getSchema = () => {
    if (status.includes("login")) {
      validationSchema = yup.object({
        password: yup
          .string()
          .min(6, "Password is too short - should be 8 chars minimum.")
          .required("Mandatory Field"),
        email: yup
          .string()
          .email("email address incorect")
          .required("Mandatory Field"),
      });
    } else {
      validationSchema = yup.object({
        password: yup
          .string()
          .min(6, "Password is too short - should be 8 chars minimum.")
          .required("Mandatory Field"),
        email: yup
          .string()
          .email("email address incorect")
          .required("Mandatory Field"),
        firstName: yup.string().required("Mandatory Field").min(2),
        lastName: yup.string().required("Mandatory Field").min(2),
        location: yup.string().required("Mandatory Field").min(2),
        occupation: yup.string().required("Mandatory Field").min(2),
        picture: yup.string().required("Mandatory Field").min(2),
      });
    }
  };
  getSchema();
  const handleFormSubmit = async (values, errors) => {
    let data;
    if (!urlState) {
      data = await login(values);
    } else {
      data = await signup(values);
    }
    if (data.status === "ok") {
      props.handleAuth(data.user);
    }
  };
  // const handleSubmit = (values) => {
  //   console.log(values, "asd");
  // };

  return (
    <Box>
      {" "}
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              className="form"
              sx={{
                backgroundColor: theme.palette.background.alt,
                mt: "50px",
              }}
            >
              {urlState && (
                <>
                  <Box className="name">
                    <TextField
                      sx={{
                        ml: "10px",
                        backgroundColor: theme.palette.background.alt,
                      }}
                      InputLabelProps={{
                        style: { color: theme.palette.alt },
                      }}
                      className="inputName"
                      id="filled-basic1"
                      variant="filled"
                      type="text"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={!!touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <TextField
                      sx={{
                        ml: "10px",
                        backgroundColor: theme.palette.background.alt,
                      }}
                      InputLabelProps={{
                        style: { color: theme.palette.alt },
                      }}
                      className="inputName"
                      id="filled-basic2"
                      variant="filled"
                      type="text"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={!!touched.lastName && !!errors.lastName}
                      helperText={touched.email && errors.lastName}
                    />
                  </Box>
                  <TextField
                    sx={{
                      ml: "10px",
                      backgroundColor: theme.palette.background.alt,
                    }}
                    InputLabelProps={{
                      style: { color: theme.palette.alt },
                    }}
                    className="input"
                    id="filled-basic3"
                    variant="filled"
                    type="text"
                    label="Location"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.location}
                    name="location"
                    error={!!touched.location && !!errors.location}
                    helperText={touched.location && errors.location}
                  />
                  <TextField
                    sx={{
                      ml: "10px",
                      backgroundColor: theme.palette.background.alt,
                    }}
                    InputLabelProps={{
                      style: { color: theme.palette.alt },
                    }}
                    className="input"
                    id="filled-basic4"
                    variant="filled"
                    type="text"
                    label="Occupation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.occupation}
                    name="occupation"
                    error={!!touched.occupation && !!errors.occupation}
                    helperText={touched.occupation && errors.occupation}
                  />
                  <Box
                    className="drop"
                    sx={{
                      ":hover": { backgroundColor: theme.palette.primary.main },
                    }}
                  >
                    <Dropzone
                      acceptedFiles=".jpg,.jpeg,.png"
                      multiple={false}
                      onDrop={(acceptedFiles) =>
                        setFieldValue("picture", acceptedFiles[0])
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                              Drag 'n' drop some files here, or click to select
                              files
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                    {values?.picture?.name ? (
                      <Box>{values.picture.name}</Box>
                    ) : null}
                  </Box>
                </>
              )}
              <TextField
                sx={{
                  ml: "10px",
                  backgroundColor: theme.palette.background.alt,
                }}
                InputLabelProps={{
                  style: { color: theme.palette.alt },
                }}
                className="input"
                id="filled-basic5"
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                sx={{ ml: "10px" }}
                className="input"
                id="filled-basic6"
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                InputLabelProps={{
                  style: { color: theme.palette.alt },
                }}
              />{" "}
              <Button
                onClick={() => {
                  //handleFormSubmit(values, errors);
                }}
                className="input"
                sx={{
                  ml: "10px",
                  backgroundColor: theme.palette.alt,
                  marginTop: "20px",
                  ":hover": { backgroundColor: theme.palette.alt },
                }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
              <p onClick={() => changeStatus(resetForm)} className="msg">
                {message}
              </p>
            </Box>
            {/* handleBlur, handleChange fumctions that works from formik
          name="firstName" need to be match to the field name
          error={!!touched.firstName && !!errors.firstName}
        helperText={touched.firstName && errors.firstName}
        if touch and error at same time
      */}

            <div></div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
