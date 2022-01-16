import { useState } from "react";
import { Form, Formik } from "formik";
import { Sign } from "components/ui/buttons/Sign/Sign";
import * as yup from "yup";

import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import cn from "classnames";

export const RegistrationForm = ({ show }) => {
  const classes = useStyles();
  const [checked, isChecked] = useState(false);

  const validationSchema = yup.object({
    login: yup
      .string("Enter your login")
      .min(3, "Minimum 3 symbols")
      .matches(/^\S*$/, "No spaces")
      .required("Login is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Minimum 8 symbols")
      .matches(/^\S*$/, "No spaces")
      .required("Password is required"),
  });

  return (
    <div className={classes.container}>
      <div
        className={cn(
          classes.containerForm,
          show ? classes.animatedForm : null
        )}
      >
        <div className={classes.containerCubes}>
          <div
            className={cn(
              classes.cubesContainer,
              show ? classes.animatedCubes : null
            )}
          >
            <div className={classes.perspectiveOne}>
              <div
                className={cn(classes.one, show ? classes.animatiedOne : null)}
              />
            </div>
            <div className={classes.perspectiveTwo}>
              <div
                className={cn(classes.two, show ? classes.animatiedTwo : null)}
              />
            </div>
            <div className={classes.perspectiveThree}>
              <div
                className={cn(
                  classes.three,
                  show ? classes.animatiedThree : null
                )}
              />
            </div>
            <div className={classes.perspectiveFour}>
              <div
                className={cn(
                  classes.four,
                  show ? classes.animatiedFour : null
                )}
              />
            </div>
          </div>
        </div>
        <h1 className={classes.h1}>qcrm</h1>
        <p className={classes.p}>by SupportYourApp</p>
        <Formik
          initialValues={{
            login: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          validationSchema={validationSchema}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form className={classes.form}>
              <TextField
                id="login"
                label="Login"
                type={"text"}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: 40 }}
              />
              {touched.login && errors.login && (
                <p className={classes.errorLogin}>{errors.login}</p>
              )}
              <TextField
                id="password"
                label="Password"
                type={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: 45 }}
              />
              {touched.password && errors.password && (
                <p className={classes.errorPassword}>{errors.password}</p>
              )}
              <div className={classes.check}>
                <input
                  checked={checked}
                  type={"checkbox"}
                  className={classes.checkbox}
                  onChange={(e) => isChecked(e.target.checked)}
                />
                <span className={classes.span}>
                  Remember me on this computer{" "}
                </span>
              </div>
              <Sign disabled={checked} errors={errors} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    perspective: 1000,
  },
  containerForm: {
    width: 605,
    backgroundColor: "white",
    boxShadow: "0px 6px 65px 0px rgba(0, 0, 0, 0.21)",
    textAlign: "center",
    padding: "156px 80px 80px 80px",
    transformOrigin: "top",
    transform: "rotateX(-113deg)",
    opacity: 0,
    zIndex: 5,
  },
  containerCubes: {
    perspective: 1000,
  },
  cubesContainer: {
    position: "absolute",
    width: 200,
    height: 200,
    boxShadow: "0px 6px 24px 0px rgba(0,0,0,0.3)",
    backgroundColor: "white",
    borderRadius: 45,
    top: -250,
    left: 120,
    transformOrigin: "top",
    transform: "rotateX(100deg)",
    opacity: 0,
    zIndex: 10,
  },
  perspectiveOne: {
    perspective: 1000,
  },
  one: {
    width: 55,
    height: 55,
    borderRadius: 10,
    background: "#ee610f",
    position: "absolute",
    left: 55,
    top: 40,
    zIndex: 1,
    opacity: 0.9,
    transformOrigin: "center",
    transform: "rotateX(94deg) translateY(-300px)",
  },
  perspectiveTwo: {
    perspective: 1000,
  },
  two: {
    width: 55,
    height: 55,
    borderRadius: 10,
    background: "#6c1b74",
    position: "absolute",
    left: 85,
    top: 60,
    opacity: 0.9,
    transformOrigin: "center",
    transform: "rotateX(94deg) translateY(-500px)",
  },
  perspectiveThree: {
    perspective: 1000,
  },
  three: {
    width: 55,
    height: 55,
    borderRadius: 10,
    background: "#1979b9",
    position: "absolute",
    left: 55,
    top: 96,
    opacity: 0.9,
    transformOrigin: "center",
    transform: "rotateX(94deg) translateY(-700px)",
  },
  perspectiveFour: {
    perspective: 1000,
  },
  four: {
    width: 55,
    height: 55,
    borderRadius: 10,
    background: "#24b347",
    position: "absolute",
    left: 85,
    top: 116,
    opacity: 0.9,
    transformOrigin: "center",
    transform: "rotateX(94deg) translateY(-800px)",
  },
  h1: {
    fontFamily: "Roboto",
    fontSize: 60,
    lineHeight: 1.2,
    fontWeight: 300,
    color: "black",
    textTransform: "uppercase",
  },
  p: {
    fontFamily: "Roboto",
    opacity: 0.5,
    fontSize: 30,
    lineHeight: 1.2,
    fontWeight: 300,
    color: "black",
    marginBottom: 74,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  checkbox: {
    cursor: "pointer",
    width: 18,
    height: 18,
    marginRight: 15,
    borderRadius: 5,
  },
  check: {
    display: "flex",
    alignItems: "center",
    marginBottom: 40,
  },
  span: {
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 1.2,
    color: "#636363",
  },
  errorLogin: {
    textAlign: "start",
    fontSize: 14,
    color: "red",
    position: "absolute",
    top: 65,
  },
  errorPassword: {
    textAlign: "start",
    fontSize: 14,
    color: "red",
    position: "absolute",
    top: 160,
  },
  animatedForm: {
    animation: "$formAnimation 2s",
    animationFillMode: "forwards",
  },
  "@keyframes formAnimation": {
    "50%": {
      transform: "rotateX(0)",
      opacity: 0.6,
    },
    "100%": {
      transform: "rotateX(0)",
      opacity: 0.8,
    },
  },
  animatedCubes: {
    animation: "$cubesAnimation 2.5s",
    animationFillMode: "forwards",
  },
  "@keyframes cubesAnimation": {
    "50%": {
      transform: "rotateX(0)",
      opacity: 1,
    },
    "100%": {
      transform: "rotateX(0)",
      opacity: 1,
    },
  },
  animatiedOne: {
    animation: "$oneAnimation 1s",
    animationFillMode: "forwards",
  },
  "@keyframes oneAnimation": {
    "50%": {
      transform: "rotateX(0) translateY(0)",
    },
    "100%": {
      transform: "rotateX(0) translateY(0)",
    },
  },
  animatiedTwo: {
    animation: "$twoAnimation 1.5s",
    animationFillMode: "forwards",
  },
  "@keyframes twoAnimation": {
    "50%": {
      transform: "rotateX(0) translateY(0)",
    },
    "100%": {
      transform: "rotateX(0) translateY(0)",
    },
  },
  animatiedThree: {
    animation: "$threeAnimation 2s",
    animationFillMode: "forwards",
  },
  "@keyframes threeAnimation": {
    "50%": {
      transform: "rotateX(0) translateY(0)",
    },
    "100%": {
      transform: "rotateX(0) translateY(0)",
    },
  },
  animatiedFour: {
    animation: "$fourAnimation 2.5s",
    animationFillMode: "forwards",
  },
  "@keyframes fourAnimation": {
    "50%": {
      transform: "rotateX(0) translateY(0)",
    },
    "100%": {
      transform: "rotateX(0) translateY(0)",
    },
  },
});
