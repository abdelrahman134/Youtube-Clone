import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

import { Box, Stack } from "@mui/system";
import { fetchFromAPI } from "../utilti/fetchAPI";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Video from "./Video";
export default function VideoDetail() {
    const [videoDetail,setVideoDetail] =useState(null)
    const [video, setVideo] = useState([]);
    
    const {id} =useParams()
    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data)=>setVideoDetail(data.items[0]))
        fetchFromAPI(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        ).then((data) => setVideo(data?.items));
           
    },[id])
        
    
 return (
   <Box minHeight="95vh">
     <Stack direction={{ xs: "column", md: "row" }}>
       <Box flex={1}>
         <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
           <ReactPlayer
             url={`https://www.youtube.com/watch?v=${id}`}
             className="react-player"
             controls
           />
           <Typography color="white" variant="h5" fontWeight="bold" p={2}>
             {videoDetail?.snippet.title}
           </Typography>
           <Stack
             direction="row"
             justifyContent="space-between"
             sx={{ color: "white" }}
             p={1}
             px={2}
           >
             <Link
               to={`/channel/${videoDetail?.snippet.channelId}`}
               style={{ color: "white" }}
             >
               <Typography variant="h6">
                 {videoDetail?.snippet?.channelTitle}
                 <CheckCircle
                   sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                 />
               </Typography>
             </Link>
             <Stack direction="row" gap="20px" alignItems="center">
               <Typography variant="body1" sx={{ opacity: 0.7 }}>
                 {parseInt(videoDetail?.statistics.viewCount).toLocaleString()}{" "}
                 views
               </Typography>
               <Typography variant="body1" sx={{ opacity: 0.7 }}>
                 {parseInt(videoDetail?.statistics.likeCount).toLocaleString()}{" "}
                 likes
               </Typography>
             </Stack>
           </Stack>
         </Box>
       </Box>
       <Box
         p={2}
         py={{ md: 1, xs: 5 }}
         justifyContent="center"
         alignItems="center"
       >
         <Video videos={video}  direction={"column"}/>
       </Box>
     </Stack>
   </Box>
 );}
