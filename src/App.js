import "../src/css/bootstrap.css"; 
import Nav from "./componand/Nav";
import Text from "./componand/Text";
import Login from "./componand/Login"
import End from "./componand/End";
import RegistrationForm from "./componand/RegistrationForm";
import ProtectedRoutes from "./componand/ProtectedRoutes";
import { Route, Routes } from "react-router-dom";




const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
      <Route path="/Registr" element={<RegistrationForm></RegistrationForm>}/>
      <Route path="/confirm" element={<End></End>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/About" element={<h1>Place holder about ppage </h1>}/>
        <Route path="/" element={<Text></Text>} />
        <Route element = {<ProtectedRoutes/>}>
        <Route path="/profile" element={<h1>put profile componand here</h1>} />  
        <Route path="/bookings" element={<h1>put bookings componand here</h1>} />  
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>}/> 
      </Routes>
     
    </div>
  );
};

export default App;
