import React from 'react';

const LinkToggle = props => (
    <div onClick={props.click} 
             style={{position:"fixed",
                     top:"3.5%",
                     left:"5%", 
                     textAlign:"center",
                     fontSize:"28px",
                     border:"solid #ffa812 3px",
                     width:"10%",
                     cursor:"pointer",
                     }}> X
    </div>
);

export default LinkToggle