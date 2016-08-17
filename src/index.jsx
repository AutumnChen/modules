import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Link, IndexRoute, Redirect } from 'react-router'
import { App, About, Inbox, Message, Dashboard } from './components/app'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Dashboard} />
			<Route path="about" component={About} />
			<Route path="inbox" component={Inbox} >
				<Route path="/messages/:id" component={Message} />
				<Redirect from="messages/:id" to="/messages/:id" />
			</Route>
		</Route>
	</Router>,
	document.getElementById('root')
)

