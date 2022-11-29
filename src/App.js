import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state={
    Person :{ fullName: " LAEEB",
              bio : "I am a masot "  , 
              imgSrc: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-04/qatar-world-cup-mascot_0.jpg?itok=IzUPmHpD",
              profession :" good football player"
            },
    isVisible : false,
    counter:0 
  }
  
  // componentDidMount(){console.log('cc') }

inc= () => this.setState({counter: this.state.counter+1})     

componentDidMount(){ console.log('cc')
                     setInterval(this.inc, 1000)}

componentDidUpdate(){console.log("laeeb is here")}

handleShow = () => this.setState({isVisible: !this.state.isVisible})

  render() {
    return (
      <div className='App'>
      <br></br>
      <button onClick={this.handleShow} style={{"height":50, "width":100}}>  I am here   </button>
      <h2> {this.state.counter} </h2>
      { this.state.isVisible &&
      <div>
      <h1 style={{color :"red"}}>  {this.state.Person.fullName} </h1> 
      <img src={this.state.Person.imgSrc}  alt="laeeb"  width="753" height="380" ></img>
      <h1 style={{color :"yellow"}}>  {this.state.Person.bio} </h1>
      <h1 style={{color :"red"}}>  I'm a {this.state.Person.profession}</h1>
      </div>
      }
      </div>
    )
  }
}
