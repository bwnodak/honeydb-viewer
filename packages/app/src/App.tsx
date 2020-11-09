import React, { useEffect, useState } from 'react';
import BadHostTable from './components/EnhancedTable';
import { BadHost, getBadHosts } from './services/api';

const App = () => {
  const [hosts, setHosts] = useState<BadHost[]>([]);
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
    <>
      <BadHostTable rows={hosts} />
    </>
  );
}

export default App;
