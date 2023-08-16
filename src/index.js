import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const the_animation = document.querySelectorAll('.animation')
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('scroll-animation')
//         }
//             else {
//                 entry.target.classList.remove('scroll-animation')
//             }
//     })
// },
//    { threshold: 0.3
//    });
// //
//   for (let i = 0; i < the_animation.length; i++) {
//    const elements = the_animation[i];

//     observer.observe(elements);
//   } 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
