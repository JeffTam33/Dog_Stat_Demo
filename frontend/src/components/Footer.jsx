import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="Footer">
      <ul className="list">
        <li className="footer_text">Made by Jeffrey Tam <a className="footer_links" href="https://github.com/JeffTam33" target="_blank"><i className="fa-brands fa-github"></i></a></li>
        <li className="footer_text">Data used from <a className="footer_links" href="https://en.wikipedia.org/wiki/List_of_dog_breeds" target="_blank">wikipedia</a></li>
        <li className="footer_text">Images generated by <a className="footer_links" href="https://www.midjourney.com/home/" target="_blank">Midjournery</a></li> 
      </ul>
    </div>
  )
}

export default Footer