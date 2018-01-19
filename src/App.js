import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import Series from './Series'
import NewSeries from './NewSeries'
import EditSeries from './EditSeries'
import About from './About'
// functional stateless component

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <Link className="navbar-brand page-scroll" to="/">
                  <img src="/images/logo.png" height="30" />
                </Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/series">Minhas Séries</Link>
                  </li>
                  <li>
                    <Link to="/new">Nova Série</Link>
                  </li>
                  <li>
                    <Link to="/about">Sobre</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route exact path='/series' component={Series} />
          <Route exact path='/series/:genre' component={Series} />
          <Route exact path='/series/edit/:id' component={EditSeries} />
          <Route exact path='/about' component={About} />
          <Route exact path='/new' component={NewSeries} />
        </div>
      </Router>
    )
  }
}

export default App
