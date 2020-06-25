import React, {useState} from 'react'

export default function NewBlogPost({history, addBlogPost, nextId}) {
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

    function handleSubmit(e){
        e.preventDefault()
        const newPost = {
            _id: nextId,
            title: formState.title,
            category: formState.category,
            modified_date: new Date(),
            content: formState.content
        }
        addBlogPost(newPost)
        // history.push('/')
        history.push(`/posts/${nextId}`)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles}  required type="text" name="title" placeholder="Enter a title" onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles} type="text" name="category" placeholder="Enter a category" onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <input style={textAreaStyles}  type="text" name="content" placeholder="Enter a post" onChange={handleChange}/>
            </div>
            <input style={buttonStyle} type="submit" value="Add a post"/>
        </form>
    )
}
