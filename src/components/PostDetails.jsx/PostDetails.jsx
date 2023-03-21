import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails } from '../../redux/details/detailSlice';
import { fetchComments } from '../../redux/comments/commentSlice';
// Components
import Comment from '../Comment/Comment';
import Spinner from '../Shared/Spinner';

const PostDetails = () => {
    const details = useSelector((state) => state.details);
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();
    const { postId } = useParams();
    useEffect(() => {
      dispatch(fetchDetails(postId));
      dispatch(fetchComments(postId));
      window.scroll(0, 0);
    }, []);
  return (
    <div className="details bg-gray-200 min-h-screen py-10">
        <div className="container mx-auto">
          {
            details.loading ? (
              <Spinner />
            ) : details.error ? (
              console.log("Error in fetching details")
            ) : (
              <div>
                <h2 className="text-3xl mb-4 font-bold">Post Number {postId}</h2>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <h4 className="text-2xl mb-2 font-bold">Full Title:</h4>
                  <p className="text-gray-600">{details.data.title}</p>
                </div>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <h4 className="text-2xl mb-2 font-bold">Full Body:</h4>
                  <p className="text-gray-600">{details.data.body}</p>
                </div>
                <div className="bg-white rounded-xl p-6 mb-4 text-center">
                  <p className="text-2xl font-bold">Comments Section Below</p>
                </div>
                <div className="comments grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {
                    comments.data?.map((elem) => {
                      return <Comment elem={elem} key={elem.id}/>
                    })
                  }
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default PostDetails;