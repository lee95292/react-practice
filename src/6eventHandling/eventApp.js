import React from 'react';
import ReactDOM from 'react-dom';
function ActionLink(props){
    function handleClick(e){
        e.preventDefault();
        console.log('The Link was clicked');
    }
    return (
        <a href="#" onClick={handleClick}>click link</a>
    );
}

ReactDOM.render(<ActionLink />,document.getElementById('root'));
    
export default ActionLink;