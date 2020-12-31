import React from 'react'

function Post(id, author, date, content, avatar) {
    return (
        <div className='Post' key={id}>{author}</div>
    )
}

export default Post