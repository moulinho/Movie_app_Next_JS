import { Fragment } from "react";
import Card from "../components/Card";

const List = (props) => {
  console.log('props',props);
  // if (!props.results.length) return <p>No Results :( </p>; 
  return (
    <div style={{ height: "calc(100vh - 180px)", overflow: "scroll" }}>
      {props.results && props.results.map((result,i) => <Card {...result}  key={i}/>)}
    </div>
  );
};

export default List;
