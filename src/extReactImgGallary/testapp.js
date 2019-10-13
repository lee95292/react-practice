import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../style/appstyle.css';

const images = [
    {
        original:'/img/reactlogo.png',
        // sizes:'100%'
    },
    {
        original:'/img/reactlogo.png',
        // sizes:'100%'
    }
];

class MyGallery extends React.Component {
    constructor(){
        super();
        this.state={
            showThumbnails:false,
            showFullscreenButton:true,
            showPlayButton:false,
            showNav:true
        }
        
    }
    render() {
      return (
        <section id="app">
            <ImageGallery 
                items={images}
                showFullscreenButton={this.state.showFullscreenButton} 
                showThumbnails={this.state.showThumbnails} 
                showPlayButton={this.state.showPlayButton} 
                showNav={this.state.showNav}
                />
        </section>

      );
    }
  }
  
  export default MyGallery;