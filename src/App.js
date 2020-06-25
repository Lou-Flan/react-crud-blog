import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import blogData from './data/post_data'
import BlogPosts from './components/BlogPosts'
import BlogPost from './components/BlogPost'
import Nav from './components/Nav'
import NewBlogPost from './components/NewBlogPost'
import EditBlogPost from './components/EditBlogPost'

const App = () => {
  const [blogPosts, setBlogPosts] = useState([])
  
  useEffect(() => {
    setBlogPosts(blogData)
  }, [])

  function getPostFromId(id) {
    return blogPosts.find((post) => post._id === parseInt(id)) 
  }

  function addBlogPost(post) {
    const newPosts = [...blogPosts, post]
    setBlogPosts(newPosts)
  }

  function deleteBlogPost(id) {
    const updatedPosts = blogPosts.filter((post) => post._id !== parseInt(id))
    setBlogPosts(updatedPosts)
  }

  function updateBlogPost(updatedPost) {
    const otherPosts = blogPosts.filter((post) => post._id !== updatedPost._id)
    setBlogPosts([...otherPosts, updatedPost])
  }

  function getNextId(){
    const ids = blogPosts.map((post) => post._id)
    return ids.sort()[ids.length - 1] + 1
  }

  const appStyles = {
    fontFamily: 'Helvetica'
  }
  
  return (
    <div style={appStyles}>
      <BrowserRouter>
        <Nav />
          <h1>Louise's React Blog</h1>
          <Switch>
          <Route exact path="/" render={(props) => 
            <BlogPosts {...props} postData={blogPosts}/>} />
          <Route exact path="/posts/new" render={(props) => 
            <NewBlogPost {...props} addBlogPost={addBlogPost} nextId={getNextId()} />} />
          <Route exact path="/posts/:id" render={(props) => 
            <BlogPost {...props} post={getPostFromId(props.match.params.id)} showControls deleteBlogPost={deleteBlogPost} />} />
            <Route exact path="/posts/edit/:id" render={(props) => <EditBlogPost {...props} updateBlogPost={updateBlogPost} post={getPostFromId(props.match.params.id)}/> }/>

            </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
