const Input = ({color, bgColor, borderSize, borderRadius, borderColor}) => {
  const styles = {
    color: color,
    backgroundColor: bgColor,
    borderSize: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor,
  };
  return (
    <>
      <input style={styles}></input>
    </>
  );
};

export default Input;
