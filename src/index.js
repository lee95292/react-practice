import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './7userView/loginControll';
import ActionLink from './6eventHandling/eventApp'
import Toggle from './6eventHandling/toggle'
import MyGallery from './extReactImgGallary/testapp';
import Carousel from './extReactImgGallary/testCarousel';
import CarouselBT from './extReactImgGallary/bootstrapCarousel';
class ReturnALL extends React.Component {
    render() {
        return (
            <div>
                <p class="fixed"><a href="">react-Image-Carousel npm test</a> </p>
                <Carousel />
                {/* <p>My Gallery</p>
                <MyGallery /> */}
                <p>Login Controll App</p>
                <LoginControl />
                <hr />
                <p>Action Link App</p>
                <ActionLink />
                <hr />
                <p>Toggle App</p>
                <Toggle />
                <hr />
                <p>Bootstrap Carousel</p>
                <CarouselBT />
            </div>
        )
    }
}
ReactDOM.render(<ReturnALL />, document.getElementById('root'));