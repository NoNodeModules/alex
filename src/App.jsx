import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Start from './pages/Start'
import Series from './pages/Series'
import Product from './pages/Product'
import Basket from './pages/Basket'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path='/products/:id' component={ Product } />
                    <Route path='/series/:id' component={ Series } />
                    <Route path='/basket' component={ Basket } /> 
                    <Route path='/' component={ Start } />
                </Switch>
        </BrowserRouter>
    )
}

export default App
