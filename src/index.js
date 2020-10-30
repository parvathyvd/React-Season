import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat : position.coords.latitude}),
      err => this.setState({errorMessage : err.message})
    )
  }

   seasonRender = () => {
    if(this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
     if(!this.state.lat && this.state.errorMessage) {
      return   <h1>Error: {this.state.errorMessage}</h1>
     }
     return <Spinner msg="Please click allow to fetch your location"/>
  }

  render(){
    return(
      <div>
        {this.seasonRender()}
      </div>
    )
  }
}



ReactDOM.render(
  <App/>,
document.getElementById('root')
);

