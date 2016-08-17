import React, { Component }from 'react'
import style from '../style.less'
import { Link, Lifecycle } from 'react-router'

// export default class App extends Component{
// 	render(){
// 		return (
// 			<div className={style.aaa}>fsdfsfssdsds12313112sdfsdsssssdfaasss</div>
// 		)
// 	}
// }

fetch('/api/score').then(function(res){
  return res.json();
}).then((data) => {
  console.log(data)
}).catch(function(err){
  console.log('error', err);
})

var nameMixins = {
	getDefaultProps: function(){
		return {name: 'tom'};
	}
}
export class Dashboard extends Component{
	render(){
		return <div>Welcome to the App!</div>
	}
}

export const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/messages/111">message</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

export const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

export const Inbox = React.createClass({
  mixins: [ nameMixins ],
  render() {
    return (
      <div>
        <h2>Inbox</h2>
          NAME:{this.props.name}
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

export const Message = React.createClass({
  mixins: [ Lifecycle, nameMixins ],
  render() {
    return <h3>Message {this.props.params.id}   NAME: {this.props.name}</h3>
  },

  routerWillLeave(nextLocation){
  	if(this.props.params.id == 111){
  		return 'are you sure?'
  	}
  }
})