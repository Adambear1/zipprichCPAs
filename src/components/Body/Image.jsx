import React from 'react'

import "./styles.css"

function Image({
  src,
  alt,
  styles = {},
  mask = null
}) {
  const [hover, setHover] = React.useState(false);
  return(mask ? (
    <div class="bg-image"
      onClick={
        () => setHover(!hover)
      }>
      <img src={src}
        class="img-fluid hover-shadow"
        alt={alt}
        styles={styles}/>
      <div class="mask" style={hover ? {backgroundColor: "rgba(0, 0, 0, 0.6)"} :{display:"none"}}>
        <div class="d-flex justify-content-center align-items-center h-100">
          <p class="text-white mb-0">Can you see me?</p>
        </div>
      </div>
    </div>
  ) : <img src={src}
      class="img-fluid hover-shadow"
      alt={alt}
      style={styles}/>)
}

export default Image
