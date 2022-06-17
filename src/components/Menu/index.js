import Menu from "./Menu";
import {colors} from "../../../src/constants";
const NavBar = () => {
  const styles = {
    display: "flex",
    width: "100vw",
    backgroundColor: colors.beige,
    
  };
  return (
    <div style={styles}>
      <Menu />
    </div>
  );
};

export default NavBar;
