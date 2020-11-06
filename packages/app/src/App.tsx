import React, { useEffect, useState } from 'react';
import { BadHostsApiResponse, getBadHosts } from './services/api';

const App = () => {
  const [hosts, setHosts] = useState<BadHostsApiResponse>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBadHosts()
      .then((hosts) => {
        setHosts(hosts);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) {
    return <div>Error Loading Bad Hosts</div>
  }

  if (loading) {
    return <div>Loading Bad Hosts</div>
  }

  return (
    <div className="App">
      {hosts.map((host) => (
        <div>{host.remote_host}</div>
      ))}
    </div>
  );
}

export default App;
