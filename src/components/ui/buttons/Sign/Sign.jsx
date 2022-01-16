import { makeStyles } from "@mui/styles";

import cn from "classnames";

const useStyles = makeStyles({
  sign: {
    width: "100%",
    padding: "13px 0",
    backgroundColor: "#3e9ffd",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 32,
    lineHeight: 1.2,
    fontWeight: 300,
  },
  disabled: {
    background: "red",
    cursor: "default",
  },
});

export const Sign = ({ disabled, errors }) => {
  const classes = useStyles();

  return (
    <div>
      <button
        disabled={!disabled}
        type={"submit"}
        className={cn(
          classes.sign,
          !disabled || errors.login || errors.password ? classes.disabled : null
        )}
      >
        Sign in to QCRM
      </button>
    </div>
  );
};
