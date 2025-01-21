import React from 'react';
import { NativeRouter, Route, Routes, Navigate } from 'react-router-native';
import HomeScreen from '../screen/HomeScreen.web';
import ProfileScreen from '../screen/ProfileScreen.web';
import TipsScreen from '../screen/TipsScreen.web';
import Login from '../component/LoginComponent/login';
import Register from '../component/RegisterComponent/register';
import Communaute from '../component/CommunauteComponent/index';

// Fonction pour vérifier si l'utilisateur est authentifié
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;  // Vérifie si un token est stocké
};

// Composant pour protéger les routes
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        {/* Register devient la page d'accueil (route par défaut) */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Routes protégées, accessibles seulement si l'utilisateur est authentifié */}
        <Route path="/home" element={<PrivateRoute element={<HomeScreen />} />} />
        <Route path="/profile" element={<PrivateRoute element={<ProfileScreen />} />} />
        <Route path="/tips" element={<PrivateRoute element={<TipsScreen />} />} />
        <Route path="/communaute" element={<PrivateRoute element={<Communaute />} />} />

        {/* Redirection vers / si la route est inconnue */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </NativeRouter>
  );
};

export default Router;
