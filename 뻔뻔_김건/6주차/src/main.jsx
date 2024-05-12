import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/Movies.style';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//근데 이러면 files changes 가 없어서 리뷰를 못달지않나여