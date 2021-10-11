import React from 'react';
import './App.css';
import Header from './Header.js';
import Timer from './Timer.js';
import FacePhotos from './FacePhotos.js';
import ShortInfoPanel from './ShortInfoPanel.js';
import AboutUs from './AboutUs.js';
import OurPhotos from './OurPhotos.js';
import MainInfoPanel from './MainInfoPanel.js';
import WeddingForm from './WeddingForm.js';
import './styles.css';

class App extends React.Component {
	
	render() {
		return (
			<div className="App">
				<Header />
				<Timer />
				<FacePhotos />
				<ShortInfoPanel />
				<AboutUs />
				<OurPhotos />
				<MainInfoPanel />
				<WeddingForm />
			</div>
		);
	}
}

export default App;
