import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import BadHostTable from "./components/EnhancedTable";
import Map from "./components/Map";
import { BadHost, getBadHosts } from "./services/api";

const App = () => {
  const [selectedHost, setSelectedHost] = useState("");
  const [hosts, setHosts] = useState<BadHost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBadHosts()
      .then((data) => {
        const sortedData = data.sort((a, b) => b.count - a.count);
        setHosts(sortedData);
        setLoading(false);
        setSelectedHost(sortedData[0]?.remote_host);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return <div>Error Loading Bad Hosts</div>;
  }

  if (loading) {
    return <div>Loading Bad Hosts</div>;
  }

  const handleSelectHost = (host: string) => {
    setSelectedHost(host);
  };

  return (
    <Container maxWidth={"md"}>
      {selectedHost && <Map host={selectedHost} />}
      <BadHostTable hosts={hosts} onSelectHost={handleSelectHost} />
    </Container>
  );
};

export default App;
