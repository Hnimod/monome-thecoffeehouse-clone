import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SidebarContext } from './shared/contexts/sidebarContext';
import Home from './Home';
import Menu from './Menu';
import Product from './Product';
import About from './About';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen: isOpen,
        toggle: toggle,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu/:prodId" exact component={Product} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}

export default App;
