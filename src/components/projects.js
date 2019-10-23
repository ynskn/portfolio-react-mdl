import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton  } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:
          'url(https://ko.reactjs.org/logo-og.png) center / cover'}} >React Project #1 - Portfolio
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text.
          </CardText>
          <CardActions border>
            <a href="https://github.com/ynskn" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:
          'url(https://ko.reactjs.org/logo-og.png) center / cover'}} >React Project #2 - Portfolio
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text.
          </CardText>
          <CardActions border>
            <a href="https://github.com/ynskn" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:
          'url(https://ko.reactjs.org/logo-og.png) center / cover'}} >React Project #3 - Portfolio
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text.
          </CardText>
          <CardActions border>
            <a href="https://github.com/ynskn" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


      {/* Project 4
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:
          'url(https://ko.reactjs.org/logo-og.png) center / cover'}} >React Project #4 - Portfolio
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text.
          </CardText>
          <CardActions border>
            <a href="https://github.com/ynskn" rel="noopener noreferrer" target="_blank">
            <Button colored>Github</Button>
            </a>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card> */}
        </div>



      )
    } else if(this.state.activeTab === 1) {
      return (
          <div><h1>This is SoK</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
          <div><h1>This is MongoDB</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
          <div><h1>These are my Pictures</h1></div>
      )
    }
  }


  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>SoK</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Photography</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}
export default Projects;
