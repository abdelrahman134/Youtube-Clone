import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidbar from "./Sidbar";
import Video from "./Video";
import { fetchFromAPI } from "../utilti/fetchAPI";
import { useParams } from "react-router-dom";
export default function Search() {
  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams()
  useEffect(() => {
    fetchFromAPI(`search?part-snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search result for : <span style={{ color: "#F31503" }}> {searchTerm} videos</span>
      </Typography>
      <Video videos={videos} />
    </Box>
  )
}
