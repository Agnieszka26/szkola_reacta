import { colors } from "../../constants";

export const styles = {
  main: {
    width: "450px",
    borderRadius: "20px",
    boxShadow: `1px 3px 40px ${colors.allmostBlack}`,
  },
  upBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.allmostBlack,
    borderRadius: "20px",
    padding: "1rem",
  },
  redCycle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fuchsia,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    color: colors.beige,
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    color: colors.frenchViolet,
  },
};