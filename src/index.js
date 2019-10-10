import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './7userView/loginControll';
import ActionLink from './6eventHandling/eventApp'
import Toggle from './6eventHandling/toggle'
import MyGallery from './extReactImgGallary/testapp.js';
/*
    6. Event handling App
*/


class ReturnALL extends React.Component{
    render(){
        return(
            <div>
                <p>My Gallery</p>
                <MyGallery />
                <p>Login Controll App</p>
                <LoginControl />
                <hr/>
                <p>Action Link App</p>
                <ActionLink />
                <hr/>
                <p>Toggle App</p>
                <Toggle />
                <hr/>
            </div>
        )
    }
}
ReactDOM.render(<ReturnALL /> ,document.getElementById('root'));