import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div
      style={{width: '100', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/faces-solid-1/48/17-512.png"
              alt="avatar"
              className="avatar-img"
              />


              <div className="banner-text">
                <h1>Artist/Engineer </h1>


              <hr/>
              <p>HTML/CSS | Bootstrap | React | Cyber Security | Urban Mobile Photography</p>

            <div className="social-links">

              {/*LinkedIn*/}
                <a href="https://kr.linkedin.com/in/seokin-yoon-37b306147" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

              {/*Github*/}
                <a href="https://github.com/ynskn" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              {/*Instagram*/}
                <a href="https://www.instagram.com/dorrini" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

              {/*Freecodecamp*/}
                <a href="https://www.freecodecamp.org/learn/?messages=success%5B0%5D%3DSuccess%2521%2520You%2520have%2520signed%2520in%2520to%2520your%2520account.%2520Happy%2520Coding%2521" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>


            </div>

              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
