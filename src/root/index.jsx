import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

export default function Root() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
