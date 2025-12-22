import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic'
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
