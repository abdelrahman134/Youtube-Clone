import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Feed from './Component/Feed';
import Video from './Component/Video';
import Channel from './Component/Channel';
import Search from './Component/Search';
import Navbar from './Component/Navbar';
import VideoDetail from './Component/VideoDetail';
function App() {

  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<Channel />} />
          <Route path="/search/:searchTerm" exact element={<Search />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App
