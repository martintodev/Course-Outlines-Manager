import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import DisplayPdf from './DisplayPdf';
import EditPDF from './EditPDF';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import InstructorHome from './components/Instructor/instructorHome';
import AssignInstructor from './components/AssignInstructor/AssignInstructor';
import AdminReview from './components/AdminReview/AdminReview';
import OutlineHistory from './components/OutlineHistory/OutlineHistory';
import AdminHome from './components/AdminHome/AdminHome';
import RejectedOutlines from './components/RejectedOutlines/RejectedOutlines';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path = '/' element = {<PrivateRoute>base</PrivateRoute>}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/register" element = {<Register />}/>
        <Route path = "/pdf" exact element = {<PrivateRoute><App />instructor</PrivateRoute>}></Route> 
        <Route path = "/history" exact element = {<PrivateRoute><OutlineHistory />instructor</PrivateRoute>}></Route> 
        <Route path = "/instructor" element = {<PrivateRoute><InstructorHome />instructor</PrivateRoute>} />
        <Route path = "/assign-instructor" element = {<PrivateRoute><AssignInstructor />admin</PrivateRoute>}/>
        <Route path = "/DisplayPdf" exact element = {<DisplayPdf />}></Route>
        <Route path = "/EditPDF" exact element = {<PrivateRoute><EditPDF />instructor</PrivateRoute>}></Route>
        <Route path = "/ReviewPDF" element = {<PrivateRoute><AdminReview />admin</PrivateRoute>}/>
        <Route path = "/admin-home" element = {<PrivateRoute><AdminHome />admin</PrivateRoute>}/>
        <Route path = "/RejectedOutlines" element = {<PrivateRoute><RejectedOutlines />instructor</PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);

