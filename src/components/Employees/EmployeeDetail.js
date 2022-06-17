import {useState} from "react";
import {styles} from "./styles";

const EmployeeDetail = ({employee}) => {
  const [visible, setVisible] = useState(false);

  const showDetails = () => {
    setVisible((prev) => !prev);
  };
  const detailsContent = visible && (
    <div style={styles.cellDetails}>
      <p>Tel: {employee.phoneNumber}</p>
      <p>Salary: {employee.salary}</p>
      <p>Start Date: {employee.startDate}</p>
    </div>
  );

  return (
    <>
      <div style={{display: "flex"}}>
        <div onClick={showDetails} style={styles.cellName}>
          {employee.name}
        </div>
        {detailsContent}
      </div>
    </>
  );
};

export default EmployeeDetail;
