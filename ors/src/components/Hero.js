import React, { Component } from 'react'
import "../css/hero.css"

export default class Hero extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <section class="hero">
  <div class="hero__image-wrapper">
    <img id="hero__image" src="https://images.unsplash.com/photo-1522322659370-3c98da30c99c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Picsum placeholder image" />
  </div>
  <div class="hero__text">
    <h1>Your next book is a click away</h1>
    <p>Fear not! Darkening the image behind the text will make the text much easier to see!</p>
    <button id="hero__img-refresh">Explore</button>
  </div>
</section>
      </div>
    )
  }
}
