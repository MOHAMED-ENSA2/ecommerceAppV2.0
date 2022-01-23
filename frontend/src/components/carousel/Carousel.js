import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    // speed: 50,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  
    autoplaySpeed: 2500,

  };

  const styles = { container :  {   width:"90%" , marginInline : "auto" , paddingInline : "2.5%", marginTop : "2rem" , height  : "69vh" }  ,
                    img :  { objectFit : "fill" , display : "block" , width:"100%" , height  : "55vh" ,cursor : "pointer" }
                    }

return (

    <div style = {styles.container}>
    <Slider {...settings} >
        
        <div >
          <img src="https://cdnprod.mafretailproxy.com/sys-master-root/haa/h10/15464386265118/060102021_egy_hb_ariel_web_en.png"  style = {styles.img}/>
        </div>
        <div >
          <img src="https://cdnprod.mafretailproxy.com/sys-master-root/hba/h58/15600756359198/100102021_egy_healthy_beauty_appb_en.png" style = {styles.img} />
        </div>
        <div >
          <img src="https://cdnprod.mafretailproxy.com/sys-master-root/hd8/h25/15300066115614/29092021_egy_app_hp_hb_onsite_meat_poultry_en.png" style = {styles.img} />
        </div>
        <div >
          <img src="https://cdnprod.mafretailproxy.com/sys-master-root/h58/h04/15080270856222/16092021_egy_web_hp_hb_nc_onsite_dairy_en.png" style = {styles.img} />
        </div>
           
    </Slider>
    </div>
  );
}