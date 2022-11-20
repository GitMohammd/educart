import { useContext } from "react";
import { CartContext } from "./ContextProvider";

const UseCourseContext = () => {
  const course = useContext(CartContext);

  return course;
};
export default UseCourseContext;
