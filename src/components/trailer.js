import React from "react"
import Trailer from "../video/trailer.mp4" 

<script>
const video = document.getElementById("trailer_video");
video.currentTime = 4;
</script>

export default  () => (
  <video id="trailer_video" controls style={{ width: `100%` }}>
  <source src={Trailer} type="video/mp4" />
  </video>
)