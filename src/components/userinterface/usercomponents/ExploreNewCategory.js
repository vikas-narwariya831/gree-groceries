import React, { createRef } from "react";
import Slider from "react-slick";
import { ServerURL } from "../services/serverServices";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Rowing } from "@mui/icons-material";

export default function ExplorNewCategory(){
      
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
 var settings = {
    dots: false,
    infinite: true,
    speed: false,
    slidesToShow: 6,
    slidesToScroll: false,
    autoplay: false,
    autoplaySpeed: false,
    arrow: false,
    
    
  };

  var slider=createRef()
  var images=['kitchen.webp','makeupbeauty.webp','fitness.webp','safefood.webp','petcare.webp','party.webp']
 
  function ExplorImage()
  { return images.map((item)=>{
        return(<div ><img src={`${ServerURL}/images/${item}`} style={{width:'70%'}}/></div>)
  })
  } 





    return(<div style={{position:'relative'}}>
        
<h3>Explore New Categories</h3>
<Slider ref={slider} {...settings}>
 {ExplorImage()}
 </Slider>


    </div>)





}