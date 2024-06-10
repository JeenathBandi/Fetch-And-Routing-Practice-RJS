// Write your JS code here
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoading: false}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const formattedData = data.map(each => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogList: formattedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(each => <BlogItem blogList={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
