import React, { useState } from 'react';

import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => (
	<div className="App">
		<Header />
		<Content />
		<Footer />
	</div>
);

export default App;
