import React from 'react';
import ReactDom from 'react-dom';
import Carousel from 'react-image-carousel';
import '../style/appstyle.css';

const img = [
    '/img/reactlogo.png',
    '/img/sogae1.jpg'
];

class MyCarousel extends React.Component{

    render(){
        return (
            <Carousel 
                images={img}
                thumb={false}
                loop={true}
                autoplay={4000}
            />
        );
    }
}
export default MyCarousel;