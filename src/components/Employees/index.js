import {employees} from "./employees.data";
import EmployeeDetail from "./EmployeeDetail";
const Employees = () => {
  return (
    <>
      {employees.map((employee) => {
        return <EmployeeDetail employee={employee} />;
      })}
    </>
  );
};

export default Employees;
