import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utilti/fetchAPI";
import { Box } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import ChannelCard from "./ChannelCard";
import Video from "./Video";
import VideoCard from "./VideoCard";

export default function Channel() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideo(data?.items)
    );
  }, [id]);
  console.log(channelDetail, video);

  return (
    <Box>
      <Box minHeight="95vh">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(23,23,125,1) 56%, rgba(34,33,59,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={video} />
      </Box>
    </Box>
  );
}
