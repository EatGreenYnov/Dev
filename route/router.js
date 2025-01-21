import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import HomeScreen from '../screen/HomeScreen.web';
import ProfileScreen from '../screen/ProfileScreen.web';
import TipsScreen from '../screen/TipsScreen.web';

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/tips" element={<TipsScreen />} />
      </Routes>
    </NativeRouter>
  );
};

export default Router;