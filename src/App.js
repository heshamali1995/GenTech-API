import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// Components
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails.jsx/PostDetails';
import NotFoundPage from './components/Shared/NotFoundPage';

const App = () => {
  return (
    <>
    <BrowserRouter basename="/GenTech-API">
      <Link to="/">
        <h1 className="text-3xl py-4 px-12 inline-block font-bold">Home Page</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/postDetails/:postId" element={<PostDetails />}/>
        {/* Not Found When Deploying The Project */}
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate replace to='/404'/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;