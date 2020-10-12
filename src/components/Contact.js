import React from 'react';
import './Contact.css';



function Contact() {
    const name = "Juan Willis";
    const img = "https://randomuser.me/api/portraits/men/32.jpg";
    const online = true;


    return(
        <div className='Contact'>
            <img className= "avatar" src = {img} />
            <div>
            <p className="name">{name}</p>
                <div className="status">
                    <div className={online? "status-online" : "status-offline"}></div>
                    <p className="status-text">{online ? "online" : "offline"}</p>
                </div>
            </div>

        </div>
    );
}


export default Contact;