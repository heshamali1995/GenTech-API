const NotFoundPage = () => {
    return (
        <div className="container text-center">
            <h2 className="text-4xl text-gray-800 font-bold mt-6 mb-3">
                OOPS !
            </h2>
            <p className="text-xl text-gray-500 mb-3">
                The page you are looking for does not exist !
            </p>
            <img
                src={require('../../assets/images/not-found.gif')}
                alt="notfound..."
                className="max-w-full max-h-fit mx-auto cursor-pointer"
            />
        </div>
    );
};

export default NotFoundPage;
