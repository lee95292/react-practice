import React from 'react';

function ActionLink(props){
    function handleClick(e){
        e.preventDefault();
        console.log('The Link was clicked');
    }
    return (
        <a href="#" onClick={handleClick}>click link</a>
    );
}

export default ActionLink;