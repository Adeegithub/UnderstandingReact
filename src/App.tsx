// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  //Alert With Button
  const [alertVisible, setAlertVisibility] = useState(false);
  // const items = ["Colombo", "Galle", "Kandy", "Jaffna", "Trinco"];
  // const handleSelectItem = (item:string) => {
  //   console.log(item)
  // }
  // return <div> <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> </div>;
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My Alert </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}> My Button </Button>
    </div>
  );
}

export default App;
