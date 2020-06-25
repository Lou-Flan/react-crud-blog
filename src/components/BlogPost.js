import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({post}) => {
    if(!post) return <p>This post doesn't exist yet</p>

    const linkStyles = {
        textDecoration: 'none',
        color: 'hotpink'
    }

    const {title, modified_date, category, content} = post
    return (
        <div>
            <Link to={`/posts/${post._id}`} style={linkStyles}>
                <h2>{title}</h2>
            </Link>
                <p>{modified_date.toLocaleString()}</p>
                <p>{category}</p>
                <p>{content}</p>
        </div>
    )
}

export default BlogPost;