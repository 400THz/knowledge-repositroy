import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home"
import Upload from './components/Upload';
import Edit from './components/Edit';
import Details from './components/Details';

function App() {
	return (
		<>
			<Header />
			<Routes>
					<Route path="/" element={<Home />} />
					<Route path="upload" element={<Upload />} />
					<Route path="edit/:id" element={<Edit/>} />
					<Route path="view/:id" element={<Details/>} />
			</Routes>	
		</>
	);
}
export default App;



