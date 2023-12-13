import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact.jsx";
import Home from "./pages/home/home.jsx";
import SingeBlog from "./pages/singeblog/SingeBlog.jsx";
import UserDashboard from "./pages/userDashboard/UserDashboard.jsx";
import Services from "./components/userDashboard/Services.jsx";
import Papers from "./components/userDashboard/Papers.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/singleblog" element={<SingeBlog />} />
				<Route path="/userdashboard" element={<UserDashboard/>}>
					<Route index element={<Services />}/>
					<Route path="papers" element={<Papers />}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
