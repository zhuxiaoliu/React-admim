import React from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom'
import Login from '../views/login'
export default class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </HashRouter> 
        )
    }
}
