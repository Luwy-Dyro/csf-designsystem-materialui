import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { ButtonPage } from './pages/component/ButtonPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ProtectedRoute } from './auth/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" 
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
        <Route index element={<HomePage />} />
        <Route path="componente/botones" element={<ButtonPage />} />
      </Route>
    </Routes>
  );
}

export default App;