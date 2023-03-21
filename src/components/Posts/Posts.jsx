import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchData, filterArray } from '../../redux/posts/postSlice';
// Components
import Post from '../Post/Post';
import Spinner from '../Shared/Spinner';
import FormComponent from '../Form/FormComponent';

const Posts = () => {
    // Search Term
    const [searchTerm, setSearchTerm] = useState(null);
    const state = useSelector((state) => state.posts);
    // Filtered Copy Data
    const filtered = useSelector((state) => state.posts.filteredData);
    const dispatch = useDispatch();
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(filterArray(state.data.filter((item) => item.title.includes(searchTerm))));
    }
    useEffect(() => {
        dispatch(fetchData());
    }, []);
  return (
    <div className="posts bg-gray-200 overflow-hidden min-h-screen">
        <div className="container mx-auto">
            <FormComponent submitForm={submitForm} setSearchTerm={setSearchTerm}/>
            <div>
                {
                    state.loading ? (
                        <Spinner />
                    ) : state.error ? (
                        console.log("Error in fetching")
                    ) : (
                        <div className="posts-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
                            {
                                filtered.map((elem) => {
                                    return (
                                        <Post elem={elem} key={elem.id}/>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Posts;