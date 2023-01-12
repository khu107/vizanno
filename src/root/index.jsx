import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { RequireAuth } from 'react-auth-kit';
import Login from '../components/Login';
import Navbar from '../components/Navbar';

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
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
