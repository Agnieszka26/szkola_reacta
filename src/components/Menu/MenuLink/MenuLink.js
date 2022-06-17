import {colors} from "../../../constants";
const MenuLink = ({to, label, isActive}) => {
  const styles = {
    a: {
      color: isActive ? colors.fuchsia : colors.allmostBlack,
      textDecoration: "none",
    },
    li: {listStyleType: "none"},
    // backgroundColor: bgColor,
    // borderSize: borderSize,
    // borderRadius: borderRadius,
    // borderColor: borderColor,
  };

  return (
    <li style={styles.li}>
      <a style={styles.a} href={to}>
        {label}
      </a>
    </li>
  );
};

export default MenuLink;
