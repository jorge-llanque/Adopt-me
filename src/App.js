import React, { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SearchParams from './SearchParams'
import Details from './Details'
import ThemeContext from './ThemeContext'

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
  const theme = useState('darkblue')
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>
          <Switch>
            <Route path='/details/:id'>
              <Details />
            </Route>
            <Route path='/'>
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
