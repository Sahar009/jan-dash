
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Sidebar from './component/sidebar/Sidebar';
import Layout from './component/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Student from './pages/students/Student';
import Student_detail from './pages/students/Student_details/Student_detail';






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
<Route path='/Students'  element={<Sidebar>
  <Layout>
    <Student/>
  </Layout>
</Sidebar>}/>\
<Route path='/Student_details/:id'  element={<Sidebar>
  <Layout>
   <Student_detail/>
  </Layout>
</Sidebar>}/>

   </Routes>
   
   
   
   </BrowserRouter>
   </>
  );
}

export default App;
