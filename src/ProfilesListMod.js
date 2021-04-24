import React, { Component } from 'react'

class ProfilesList extends Component{
	render(){
      const profiles = this.props.profiles
      const users = this.props.users
      const movies = this.props.movies
      
      console.log(profiles)
      console.log(users)
      console.log(movies)
      return (
        <div>
          <ul className='contact-list'>
            {profiles.map((profile) => (
                <li className='contact-list-item' key={profile.id}>
                  {users[profile.userID].name}  favorite movie is {movies[profile.favoriteMovieID].name}
                </li>
               ))}
          </ul>
		</div>
      )
    }
}
export default ProfilesList