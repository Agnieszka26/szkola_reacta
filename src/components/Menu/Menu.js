import MenuLink from "./MenuLink/MenuLink";
const Menu = () => {
  const styles = {
display:"flex",
padding: "1rem",
justifyContent:"space-between",
width: "50%",
  };
  return (
    <ul style={styles}>
      <MenuLink to="/" label={"Home"} />
      <MenuLink to="/about" label={"About"} />
      <MenuLink to="/contact" label={"Contact"}  isActive />

      <MenuLink to="/posts" label={"Posts"} />
    </ul>
  );
};

export default Menu;
