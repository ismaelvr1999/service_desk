import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AuthLayout } from '@layouts/auth-layout';
import { LoginPage, SignUpPage } from '@features/auth';
import ProtectedRouters from '@shared/components/protected-routers';
import VerifyAuth from '@features/auth/verify-auth';
import LandingPage from '@features/landing/landing-page';
import UserLayout from '@layouts/user-layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<VerifyAuth />}>

          <Route path='/' element={<LandingPage />} />

          <Route element={<AuthLayout />}>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
          </Route>

          <Route element={<ProtectedRouters />}>
            <Route element={<UserLayout />}>
              <Route path='/home' element={<h1 className="text-2xl text-body">Welcome Home</h1>}></Route>
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
