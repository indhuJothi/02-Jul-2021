import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
function FancyBorder(props){
  return(
    <div className={'FancyBorder FancyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}
function WelocomeDialog(){
 return(
   <FancyBorder color='blue'>
     <h1 className='Dialod-title'>Welcome!</h1>
     <p className='Dialog-message'>Thanks for visiting this page</p>
   </FancyBorder>
 );

}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <WelocomeDialog/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
