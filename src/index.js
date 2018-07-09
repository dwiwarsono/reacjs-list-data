import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = [
  {
    title: 'Video 1',
    url: 'https://c1.staticflickr.com/1/684/21763401225_f96b648c66_b.jpg'
  },
  {
    title: 'Video 2',
    url: 'https://c1.staticflickr.com/1/736/21748578862_970227caa4_b.jpg'
  },
  {
    title: 'Video 3',
    url: 'https://c2.staticflickr.com/6/5662/21567273108_de292e97bf_b.jpg'
  }
]

ReactDOM.render(<App data={data} />, document.getElementById('root'));

