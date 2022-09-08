import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import "./App.css";
import { Assignment, Loader, ErrorMessage } from "./components";

const App = () => {
  const [assignmentData, setAssignmentData] = useState([]);
  const [errorData, setErrorData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData("/bff/assignment/19123135651", 1000)
      .then((res) => {
        setAssignmentData(res);
      })
      .catch((e) => {
        setErrorData(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {errorData === null && !isLoading && (
        <Assignment assignmentData={assignmentData?.data} />
      )}
      {errorData !== null && <ErrorMessage errorData={errorData} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
