import React from 'react'
import errorImg from './errorImage.jpg'
import './index.css'

function PageNotFound() {
  return (<>
  <img src={errorImg} alt="404 page not found"/>
  </>
  );
};

export default PageNotFound