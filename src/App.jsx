import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user,setUser] = useState(null);
  const [loggedInUserData,setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  console.log("authData is ",authData);
   useEffect(() =>{
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser)
    {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
    console.log(loggedInUser);
   },[])
  const handleLogin = (email,password) =>{
    console.log(email,password);

    if(email == 'admin@example.com' && password == "123")
    {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    }
    else if(authData)
    {
      const employee = authData.employeesData.find((e) => email == e.email && password == e.password);
      if(employee)
      {
        setUser('employee');
        setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}));
      } 
      
    }
    else
    {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : "")}
      {/* <Login handleLogin={handleLogin}/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
