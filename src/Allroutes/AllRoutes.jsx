//libraries
import { Routes, Route } from "react-router-dom";

//components
import {AuthContextProvider} from "../AuthContext/AuthContext";
import Login from "../components/Navbarcomponents/Login";
import Cart from "../components/Navbarcomponents/Cart";
import NotFound from "../components/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../components/Navbarcomponents/Signup";
import LabTest from "../components/Navbarcomponents/LabTest";
import CarePlan from "../components/Navbarcomponents/CarePlan";
import CancerCare from "../components/Navbarcomponents/CancerCare";
import ConsultDoctor from "../components/Navbarcomponents/ConsultDoctor";
import Auerveda from "../components/Navbarcomponents/Auerveda"
import Medicine from "../components/Medicine";
import PrivateRoute from "../PrivateRoute/PrivateRote";


const AllRoutes = () => {
    return (
        <AuthContextProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Medicine />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/cart" element={
                    <PrivateRoute><Cart /></PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
                <Route path="/labtest" element={<PrivateRoute><LabTest/></PrivateRoute>} />
                <Route path="/careplan" element={<CarePlan/>} />
                <Route path="/cancercare" element={<CancerCare/>} />
                <Route path="/consultdoctor" element={<ConsultDoctor/>} />
                <Route path="/auerveda" element={<Auerveda/>} />
            </Routes>
            <Footer />
        </AuthContextProvider>
    );
};

export default AllRoutes;