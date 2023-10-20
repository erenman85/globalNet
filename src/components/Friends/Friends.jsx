import React from "react";
import classes from "./Friends.module.css";




const Friends = (props) => {
  if(props.friends.length === 0) {
    props.setFriends( [
      {id : 1,followed: true, name: 'Erentsen', status: 'clear cod', location: {city:'Elista', country: 'Kalmyc'}, avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 2,followed: false, name: 'Saglara', status: 'I`m a boos', location: {city:'Elista', country: 'Kalmyc'}, avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 3,followed: true, name: 'Chingis', status: 'I`m a boss too', location: {city:'Elista', country: 'Kalmyc'}, avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 4,followed: true, name: 'Mama', status: 'tortylan', location: {city:'Elista', country: 'Kalmyc'}, avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'},
      {id : 5,followed: false, name: 'Papa', status: 'clear cod', location: {city:'Elista', country: 'Kalmyc'}, avatar:'https://cdn2.iconfinder.com/data/icons/danger-problems/512/anonymous-1024.png'}
    ])
  }
   return <div>
    {
      props.friends.map( u => <div key={u.id}>
          <div>
            <div>
              <img className={classes.avatar} src= {u.avatar}/>
            </div>
            <div>
              {u.followed
              ?<button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
              : <button onClick={() => {props.follow(u.id)}}>follow</button>}
            </div>
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </div>
          </div>
        </div>
      )
    }
   </div>
  
}

export default Friends;