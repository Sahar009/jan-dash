
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Sidebar from './component/sidebar/Sidebar';
import Layout from './component/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddStudent from './pages/dashboard/Addstudent/Addstudent';







function App() {

  
  return (<>
<ToastContainer/>
   <BrowserRouter>
   
   <Routes>
<Route path='/' element={<Home/>}/>
{/* <Route path='/login' element={<Login/>}/>
<Route path="/register" element={<Register/>} /> */}


<Route path='/dashboard' element={<Sidebar>
  <Layout>
    <Dashboard/>
  </Layout>
</Sidebar>}/>
<Route path='/add-student'  element={<Sidebar>
  <Layout>
    <AddStudent/>
  </Layout>
</Sidebar>}/>
   </Routes>
   
   <AddStudent/>
   
   </BrowserRouter>
   </>
  );
}

export default App;
