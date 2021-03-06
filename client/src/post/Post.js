import React from 'react'
import {Link} from 'react-router-dom'
import DefaultPhoto from '../images/bookAvatar.png'

const Post = ({post, check}) => {
  const posterId = post.postedBy.visible === 1 
    ? `/user/${post.postedBy._id}`: '/'
  const posterName = post.postedBy.visible === 1 ? post.postedBy.name : 'Unknown' 
  
  return (
    <div className="post_item mb-5">
      <div className="post_item-photo">
        <img 
          src={`https://mw-books.herokuapp.com/api/post/photo/${post._id}`} 
          alt={post.title}
          onError={i => i.target.src = `${DefaultPhoto}`}
          className="img-thumbnail mb-3 mt-3 post-img" />
          <h5 className="card-title">{post.author}</h5>
          <h4 className="card-title">
            <i>{post.title}</i>
          </h4>
      </div>
      <div className="post_item-descr">
          <p className="card-text comment_text">
            {post.body.substring(0, 200)}
          </p>
          <div className="post_items-info">
          {
            check === '1' && (
              <p className="font-italic">Posted by {" "}
                <Link to={`${posterId}`}>{posterName}{" "}</Link>
                on {new Date(post.created).toDateString()}
              </p>)
          }
          <p className="text-primary">{post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}</p>
            <Link to={`/post/${post._id}`} className="btn btn-raised btn-sm btn-primary">Read more</Link>
          </div>
      </div>
    </div>
  )
}

export default Post
