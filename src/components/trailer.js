import React from "react"
import Trailer from "../video/trailer.mp4" 


export default  () => (
  <video controls style={{ width: `100%` }}>
  <source src={Trailer} type="video/mp4" />
  </video>
)