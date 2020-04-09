import React from 'react'

import onLineIcon from '../../Icons/onlineIcon.png'
import './TextContainer.css'

 const TextContainer = ({users}) => (
        
        <div className="textContainer">
            <div>
                <h1>RealTime Chat Application</h1>
                <h2>Created with React, Node, Express and Socket.io</h2>
                <h2>Follow the yasweb channel for more info <span role="img" aria-label="emoji">❤️</span></h2>
            </div>
            {
                users
                ?(
                    <div>
                        <h1>Connected People</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({name}) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img src={onLineIcon} alt="Online"/>
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                ) 
                : null
            }
        </div>
    )

export default TextContainer