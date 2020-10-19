import React from "react";
import Contact from './Contact'

const ContactList = () => {

    const users = [
        {
          name: 'Robert Reyes',
          avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        },
        {
          name: 'Nellie Caldwell',
          avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        },
        {
          name: 'Vernon Mason',
          avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        },
        {
          name: 'Erica Hunt',
          avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        },
        {
          name: 'Juanita Phillips',
          avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        }
      ];

    return <div className="ContactList">
              {users.map((user) => {
              return <Contact key={user.name}   
                              name={user.name}
                              avatar={user.avatar}/>
              })}
            </div>
    
}




  export default ContactList;