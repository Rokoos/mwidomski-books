import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DefaultPhoto from '../images/bookAvatar.png'
import { postList } from '../post/apiPost'
import Spinner from '../components/Spinner'

export default class Home extends Component {
  state = {
    posts: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    postList().then(data => {
      if (data.error) {
        console.log(data.error)
        this.setState({ loading: false })
      } else {
        this.setState({ posts: data, loading: false })
      }
    })
  }

  renderBooks = posts => posts.map(post => (

    <div key={post._id} className="post_item-photo mx-auto mb-2 ml-2 ">
      <Link to={`/post/${post._id}`}>
        <img
          src={`https://mw-books.herokuapp.com/api/post/photo/${post._id}`}
          alt={post.title}
          onError={i => i.target.src = `${DefaultPhoto}`}
          className="img-thumbnail mb-3 mt-3 post-img" />
        <h5 className="card-title home_card-text">{post.author}</h5>
        <h4 className="card-title home_card-text">
          <i>{post.title}</i>
        </h4>
      </Link>
    </div>
  ))

  render() {
    const { posts, loading } = this.state
    return (
      <div className="container">
        <div className="row text-center center_books ">
          <h2 className="mt-5 mb-5 home-text">Write about Your favourite books</h2>

          {
            loading ? (<Spinner />) : posts.length === 0 ? (<h5 className="mt-5 mb-5">There are no posts.</h5>) : (this.renderBooks(posts))
          }
        </div>
      </div>
    )
  }
}


