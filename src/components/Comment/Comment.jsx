const Comment = ({ elem }) => {
  return (
    <div className="comment bg-white rounded-xl p-6">
        <div className="mb-4">
            <h2 className="text-xl mb-2 font-bold">Name:</h2>
            <p className="text-gray-600 text-sm">{elem.name}</p>
        </div>
        <div className="mb-4">
            <h2 className="text-xl mb-2 font-bold">Email:</h2>
            <p className="text-gray-600 text-sm">{elem.email}</p>
        </div>
        <div>
            <h2 className="text-xl mb-2 font-bold">Comment:</h2>
            <p className="text-gray-600 text-sm">{elem.body}</p>
        </div>
    </div>
  )
}

export default Comment;