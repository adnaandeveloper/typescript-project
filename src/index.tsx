import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './componenets/HomeScreen'
import UserDetailsScreen from './componenets/UserDetailsScreen'
import UsersListScreen from './componenets/UsersListScreen'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './store/CounterReducer'

const store = createStore(counterReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='users' element={<UserDetailsScreen />} />
        <Route path='usersList' element={<UsersListScreen />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
