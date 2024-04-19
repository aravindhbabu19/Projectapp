import React from 'react'
import Feed from './Feed'

const Home = ({post}) => {
  return (
    <div>
        {
            post.length ?(
                <Feed post={post}/>
            ):(
                <h2>no post found</h2>
            )
        }
    </div>
  )
}

export default Home