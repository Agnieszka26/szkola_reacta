const TextArea = ({color, bgColor, borderSize, borderRadius, borderColor}) => {
  const styles = {
    color: color,
    backgroundColor: bgColor,
    borderSize: borderSize,
    borderRadius: borderRadius,
    borderColor: borderColor,
  };
  return (
    <>
      <textarea style={styles}></textarea>
    </>
  );
};

export default TextArea;
