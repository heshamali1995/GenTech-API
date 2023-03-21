import { Link } from 'react-router-dom';

const Post = ({ elem }) => {
  return (
    <div className="post bg-white p-4 rounded-xl">
        <div className="title mb-2 p-3 rounded-xl">
            <h2 className="text-xl mb-3 font-bold">Post Title:</h2>
            <p className="text-xs">{elem.title.slice(0, 30)}...</p>
        </div>
        <div className="descr p-3 rounded-xl mb-2">
            <h2 className="text-xl mb-3 font-bold">Post Description:</h2>
            <p className="text-xs">{elem.body.slice(0, 40)}...</p>
        </div>
        <div className="text-center">
            <button className="py-2 px-4 bg-gray-200 rounded-xl mx-auto">
                <Link to={`/postDetails/${elem.id}`}>Go To Post Details</Link>
            </button>
        </div>
    </div>
  )
}

export default Post;