import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AuthLayout } from '@layouts/auth-layout';
import { LoginPage, SignUpPage } from '@features/auth';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1 className="text-black">Welcome</h1>} />
        <Route element={<AuthLayout/>}>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
