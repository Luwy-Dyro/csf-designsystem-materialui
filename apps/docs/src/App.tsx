import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { ButtonPage } from './pages/component/ButtonPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { ComponentLayout } from './layouts/ComponentLayout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<DashboardLayout />}>

        <Route index element={<HomePage />} />

      </Route>
      
      <Route path="/component" element={<ComponentLayout />}>
        <Route path="buttons" element={<ButtonPage />} />
      
      </Route>

    </Routes>
  );
}

export default App;