import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import express, { Request, Response } from 'express'
// import path from 'path';
// const app = express()

// app.use(express.static(__dirname));

// app.get("/*", function(req: Request, res: Response) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
