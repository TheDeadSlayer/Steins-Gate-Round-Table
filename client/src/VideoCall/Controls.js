import { useState } from "react";
import { useClient } from "../settings";
import { Grid, Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {useNavigate} from "react-router-dom"
import { withRouter } from 'react-router'

export default function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const navigate=useNavigate();

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <Grid container spacing={2} alignItems="center" 
    sx={{
        "margin-bottom":"50px"
    }}>
      <Grid item>
        <Button sx={{
                          background:'white',
                          width:"100px",
                      }}
          variant="contained"

        //   color={trackState.audio ? "primary" : "secondary"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? <MicIcon sx={{
                          color:'black',
                      }} /> : <MicOffIcon  sx={{
                        color:'black',
                    }}  />}
        </Button>
      </Grid>
      <Grid item>
        <Button sx={{
                          background:'white',
                          width:"100px"
                      }}
          variant="contained"

        //   color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          {trackState.video ? <VideocamIcon  sx={{
                          color:'black',
                      }} /> : <VideocamOffIcon  sx={{
                        color:'black',
                    }} />}
        </Button>
      </Grid>
      <Grid item>
        <Button sx={{
                          background:'red',
                          width:"100px"
                      }}
          variant="contained"
        //   color="default"
          onClick={() => {leaveChannel(); navigate(-1)}}
        >
          Leave
          <ExitToAppIcon />
        </Button>
      </Grid>
    </Grid>
  );
}