import React,{useState, useEffect} from 'react'

import Carousel from '../components/carousel/Carousel';
import Categories from '../components/categories/Categories';
import SubCategories from '../components/categories/SubCategories';
import Footer from '../components/footer/Footer';
import Section from '../components/section/Section';
import Slider from '../components/Slider/Slider';

function Home() {
      // calculate the screen width
    const [mediaWidth , setMediaWidth] = useState(window.matchMedia("(min-width: 768px)").matches)
    useEffect(() => {
        setMediaWidth(window.matchMedia("(min-width: 768px)").matches)
    },  []) 
    return (
        <>

            <Carousel/>
            <Slider mediaWidth = {mediaWidth }  />
            <Section
             title = "Fresh Food"  
             details = "Fresh from the farm to the tables"
             img = "https://myimages87.s3.us-east-2.amazonaws.com/fresh1.png"
             qualityImg= "https://myimages87.s3.us-east-2.amazonaws.com/freshfood.png"
             color = "a"
             />
            <Categories/>
            <Section
             title = "Electronics"  
             details = "high quality with the lowest price"
             img = "https://myimages87.s3.us-east-2.amazonaws.com/electronics.png"
             qualityImg= "https://myimages87.s3.us-east-2.amazonaws.com/quality.png"
             color = "b"
             />
            <SubCategories/>
            <Footer/>
        </>
    )
}

export default Home
