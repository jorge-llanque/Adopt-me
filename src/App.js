import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SearchParams from './SearchParams'
import Details from './Details'

// const App = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Adopt Me!'),
//     React.createElement(Pet, {
//       name: 'Canela',
//       animal: 'Dog',
//       breed: 'Havanese',
//     }),
//     React.createElement(Pet, {
//       name: 'Pepper',
//       animal: 'Bird',
//       breed: 'Cockatiel',
//     }),
//     React.createElement(Pet, {
//       name: 'Sudo',
//       animal: 'Dog',
//       breed: 'Wheaten Terrier',
//     })
//   )
// }

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to='/'>
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path='/details/:id'>
            <Details />
          </Route>
          <Route>
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
