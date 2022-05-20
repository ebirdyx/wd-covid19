import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Outlet } from 'react-router-dom';
import ChakraNavbar from './components/ChakraNavbar';
import ChakraFooter from './components/ChakraFooter';

function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <ChakraNavbar />
      <Outlet />
      <ChakraFooter />
    </>
  );
}

export default ProtectedRoute;
