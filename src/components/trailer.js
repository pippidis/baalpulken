import React from "react"
import Trailer from "../video/trailer.mp4" 


export default  () => (
  <div className="trailer">
    <video id="trailer_video" controls style={{ width: `95%` }}>
      <source src={Trailer} type="video/mp4" />
    </video>
  </div>
)