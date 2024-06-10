// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, author, imageUrl, avatarUrl, topic, title} = blogList

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} className="images" alt="img" />
        <div className="column-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="row-container">
            <img src={avatarUrl} alt="avatar" className="avatar-image" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
