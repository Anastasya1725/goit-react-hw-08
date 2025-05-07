import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { persistor } from './redux/store';
import { refreshUser } from './redux/auth/operations';
import { fetchContacts } from './redux/contacts/operations';
import { selectIsRefreshing, selectIsLoggedIn } from './redux/auth/selectors';
import { PersistGate } from "redux-persist/integration/react";
import Layout from './components/Layout';
import RestrictedRoute from './components/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn, isRefreshing]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      {isRefreshing ? (
        <div>Оновлюємо користувача...</div>
      ) : (
        <Suspense fallback={<div>Завантаження...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} /> 
              <Route
                path="/register"
                element={<RestrictedRoute redirectTo="/" component={<RegistrationPage />} />} 
              />
              <Route
                path="/login"
                element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
              />
             
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </PersistGate>
  );
}

export default App;