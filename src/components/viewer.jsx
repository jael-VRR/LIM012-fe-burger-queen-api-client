
/*import React from 'react'
import { RViewer, RViewerTrigger } from 'react-viewerjs';


const Viewer = () => {
    let sourceImageUrls = [
        require("../images/boot.jpg"),
        require("../images/figma.jpeg"),
        require("../images/css.png"),
        require("../images/html.png"),
        require("../images/react.png")
    ]
    let thumbImageUrls = sourceImageUrls
    return (
      <RViewer imageUrls={sourceImageUrls}>
        <ul>
          {thumbImageUrls.map((pic, index) => {
            return (
              <li  key={index} style={{marginBottom:"20PX"}}>
                <span>image {index+1}</span>
                <RViewerTrigger index={index}>
                  <img src={pic} style={{width:"50px",verticalAlign:"middle"}}  />
                </RViewerTrigger>
              </li>
            )
          })
          }
        </ul>
      </RViewer>
    )
  };
  export default Viewer;

const Viewer = () => {
    let imagenes=[
        require('../images/boot.jpg'),
        require('../images/css.png'),
        require('../images/figma.jpeg')
    ]
  return (
    <div className="wrapper">
          <RViewer imageUrls={imagenes}>
              <div style={{display:'flex', width:'30px', height:'30px'}}>
                {imagenes.map((imagen,index)=>{
                return(
                  <RViewerTrigger index={index}>
                      <img src={imagen} style={{width:"50px",marginLeft:"10px",verticalAlign:"middle"}} />
                  </RViewerTrigger>  
                )
                })}
              </div>
          </RViewer>
    </div>
      )
     
    
  
}

export default Viewer;*/