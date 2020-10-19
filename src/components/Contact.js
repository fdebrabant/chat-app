import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online : false,
        }
    }
    render(){
        return (
            <div className='Contact'>
                <img className= "avatar" src={this.props.avatar} alt={this.props.name} />
                <div>
                    <p className="name">{this.props.name}</p>
                    <div onClick={event => {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline});
                        }}
                        className="status">
                        <div className={this.state.online ? "status-online" : "status-offline"}></div>
                        <p className="status-text">{this.state.online ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        );
    }

}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool,   
};


export default Contact;