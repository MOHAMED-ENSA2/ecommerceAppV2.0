import React from 'react';
import { useHistory } from 'react-router';

import "./Back.css"
function Back() {
    const history = useHistory()
  
    return (
        <div className='back' onClick={() => history.push("/")}>
            <i class="fas fa-arrow-left"></i> <span>home</span>
        </div>
    );
}

export default Back;
