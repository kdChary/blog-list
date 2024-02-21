import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="blog-list">
      {blogList.map(blog => (
        <BlogItem key={blog.id} blogDetails={blog} />
      ))}
    </ul>
  )
}
export default BlogList
