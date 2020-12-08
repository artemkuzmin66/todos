import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import TodosPage from './pages/TodoPage'
import { AboutPage } from './pages/AboutPage'


export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}






