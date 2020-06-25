import React, {useState, useEffect} from 'react'

export default function NewBlogPost({history, updateBlogPost, post}) {
    //styling
    const divStyles = {
        display: 'grid',
        width: '60vw'
    }

    const inputStyles = {
        width: '70%',
        height: '50%',
        margin: '.5rem'
    }

    const labelStyles = {
        fontSize: '1.2em'
    }

    const textAreaStyles = {
        height: '200px',
        margin: '.5em',
        width: '70%'
    }

    const buttonStyle = {
        height: '20px',
        width: '100px',
        background: 'lightgreen'
    }
    // state
    const initialFormState = {
        title: '',
        category: '',
        content: ''
    }

    const [formState, setFormState] = useState(initialFormState)

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormState({...formState, [name]: value})
    }

    useEffect(() => {
        post && setFormState({
            title: post.title,
            category: post.category,
            content: post.content
        })
    },[post])

    function handleSubmit(e){
        e.preventDefault()
        const updatedPost = {
            _id: post._id,
            title: formState.title,
            category: formState.category,
            modified_date: new Date(),
            content: formState.content
        }
        updateBlogPost(updatedPost)
        history.push(`/posts/${post._id}`)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles}  required type="text" name="title" value={formState.title} onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles} type="text" name="category" value={formState.category} onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <input style={textAreaStyles}  type="text" name="content" value={formState.content} onChange={handleChange}/>
            </div>
            <input style={buttonStyle} type="submit" value="Add a post"/>
        </form>
    )
}
