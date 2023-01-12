import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { redirectPaths } from '../utils/ridirectPaths';

export default function Root() {
  const isAuthed = localStorage.getItem('isAuthed');
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <Routes>
      {/* <Login /> */}
      {/* <Navbar /> */}
      {!!isAuthed ? (
        <Route path="/" element={<Navbar />} />
      ) : (
        <>
          {redirectPaths.includes(currentPath) ? (
            <Route path={currentPath} element={<Navigate to="/login" />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </>
      )}
    </Routes>
  );
}
