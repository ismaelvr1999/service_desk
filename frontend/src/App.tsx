import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AuthLayout } from '@layouts/auth-layout';
import { LoginPage, SignUpPage } from '@features/auth';
import ProtectedRouters from '@shared/components/protected-routers';
import VerifyAuth from '@features/auth/verify-auth';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<VerifyAuth />}>
          
          <Route path='/' element={<h1 className="text-black">Welcome</h1>} />
          
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
          </Route>

          <Route element={<ProtectedRouters />}>
            <Route path='/home' element={<h1 className="text-2xl text-primary">Welcome Home</h1>}></Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
