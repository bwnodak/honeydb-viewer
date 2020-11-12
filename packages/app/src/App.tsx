import React, { useEffect, useState } from "react";
import Info from "@material-ui/icons/Info";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import BadHostTable from "./components/EnhancedTable";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Map from "./components/Map";
import { BadHost, getBadHosts } from "./services/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const App = () => {
  const [selectedHost, setSelectedHost] = useState("");
  const [hosts, setHosts] = useState<BadHost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState({
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  });

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

  const handleSelectHost = (host: string) => setSelectedHost(host);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Container maxWidth={"md"}>
      <div style={{ textAlign: "center", margin: "30px 0 15px 0" }}>
        <Typography variant="h2" component="h1">
          HoneyDB Viewer
        </Typography>
        <Typography variant="subtitle1">
          A tracker of for bad host behavior
          <IconButton
            color="primary"
            aria-label="more info"
            component="span"
            onClick={handleOpenModal}
          >
            <Info />
          </IconButton>
        </Typography>
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          aria-labelledby="bad-host-info"
          aria-describedby="Bad Host Description"
        >
          <div style={modalStyle} className={classes.paper}>
            A bad host is a host on the Internet that has connected or attempted
            to connect to one of the honeypots that feed data to HoneyDB. In
            general, there is no legitimate reason for any host to connect to
            these honeypots. So those that do can be considered bad, and a
            potential threat. If you see connectivity from any of these hosts on
            your network it may be malicious and may require some investigation.
          </div>
        </Modal>
      </div>

      {selectedHost && <Map host={selectedHost} />}
      <BadHostTable hosts={hosts} onSelectHost={handleSelectHost} />
    </Container>
  );
};

export default App;
