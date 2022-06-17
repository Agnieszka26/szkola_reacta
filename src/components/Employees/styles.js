import {colors} from "../../../src/constants";
export const styles = {
  table: {
    border: "4px solid purple",

    display: "flex",
    // flexWrap: "wrap",
    // width: "100vw",
  },

  column: {

    backgroundColor: colors.beige,
    display: "flex",

  },
  cellName: {
    height: "10vw",
    width: "30vw",
    color: colors.allmostBlack,
    border: `1px solid ${colors.fuchsia}`,
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cellDetails: {
    height: "10vw",
    width: "30vw",
    color: colors.beige,
    backgroundColor: colors.fuchsia,
    border: `1px solid ${colors.fuchsia}`,
    padding: "1rem",

    // display:"flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
};
