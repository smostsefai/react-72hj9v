import React from 'react'

export default class Comp extends React.Component {
  render() {
  let stars = [2,1,6,9].map ((e,i) => 
          <li key = {e}> value is {e}</li> );
  return(
  <div>
        <ul>
            { stars } 
        </ul>
  </div>)
  }
  }
