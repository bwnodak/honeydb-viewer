import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import BadHostTable from "./components/EnhancedTable";
import Map from "./components/Map";

const App = () => {
  const [selectedHost, setSelectedHost] = useState("");

  const handleSelectHost = (host: string) => {
    setSelectedHost(host);
  };

  return (
    <Container maxWidth={"md"}>
      {selectedHost && <Map host={selectedHost} />}
      <BadHostTable onSelectHost={handleSelectHost} />
    </Container>
  );
};

export default App;
