// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetailList: [], isLoading: true}

  componentDidMount() {
    this.getItemDetailsList()
  }

  getItemDetailsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formattedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogItemDetailList: formattedData, isLoading: false})
  }

  renderblogItemDetails = () => {
    const {blogItemDetailList} = this.state
    const {
      author,
      avatarUrl,
      content,
      imageUrl,
      title,
      topic,
    } = blogItemDetailList
    return (
      <div className="blog-item-detail-container">
        <h1>{title}</h1>
        <div className="row-container">
          <img src={avatarUrl} alt="avatar" className="avatar-img" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="item-image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {blogItemDetailList, isLoading} = this.state

    return (
      <div className="blog-item-detail-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderblogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
