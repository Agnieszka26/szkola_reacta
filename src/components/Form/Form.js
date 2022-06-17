import {Button, Input, TextArea} from "./index";
import {FaUser} from "react-icons/fa";

const Form = () => {
  const user = <FaUser />;
  const color = "#130f40";
  const bgColor = "#7ed6df";
  const borderColor = "#16a085";
  const borderRadius = "25px";
  const borderSize = "2px";
  return (
    <>
      <div style={{display: "flex", flexWrap: "wrap", width: "23%"}}>
        <Button label="click me" user={user} color={color} bgColor={bgColor} />
        <Input
          color={color}
          bgColor={bgColor}
          borderRadius={borderRadius}
          borderColor={borderColor}
          borderSize={borderSize}
        />
        <TextArea
          color={color}
          bgColor={bgColor}
          borderRadius={borderRadius}
          borderColor={borderColor}
          borderSize={borderSize}
        />
      </div>
    </>
  );
};
export default Form;
