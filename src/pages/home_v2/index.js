import React, { Component } from "react";

function home_v2() {
  return (
    <React.Fragment>
      <nav data-toggled="false" data-transitionable="false">
        <div id="nav-logo-section" class="nav-section">
          <a href="#">
            <i class="fa-solid fa-dumpster-fire"></i>
          </a>
        </div>
        <div id="nav-mobile-section">
          <div id="nav-link-section" class="nav-section">
            <a href="#">ABOUT</a>
            <a href="#">WORK</a>
          </div>
          <div id="nav-social-section" class="nav-section">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/c/Hyperplexed" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-codepen"></i>
            </a>
          </div>
          <div id="nav-contact-section" class="nav-section">
            <a href="#">GET IN TOUCH</a>
          </div>
        </div>
        <button id="nav-toggle-button" type="button" onclick="handleNavToggle()">
          <span>Menu</span>
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>
    </React.Fragment>
  );
}

export default home_v2;