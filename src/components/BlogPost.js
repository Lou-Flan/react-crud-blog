import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({history, post, showControls, deleteBlogPost}) => {
    if(!post) return <p>This post doesn't exist yet</p>

    const linkStyles = {
        textDecoration: 'none',
        color: 'hotpink'
    }
    const buttonStyles = {
        margin: '.5em',
        fontSize: '1em'
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteBlogPost(post._id)
        history.push('/')
    }

    const handleEdit = (e) => {
        e.preventDefault()
        history.push(`/posts/edit/${post._id}`)
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
                {showControls && (
                    <div>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )}
        </div>
    )
}

export default BlogPost;