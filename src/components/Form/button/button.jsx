const Button = ({label, user, bgColor, color}) => {
  const styles = {
    backgroundColor: bgColor,
    color: color,
    border: "none",
    padding: "1rem",
    borderRadius: "15px",
  };

  return (
    <>
      <button style={styles}>
        {user}
        {label}
      </button>
    </>
  );
};

export default Button;
