import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/sidebarContext';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import FooterSection from '../components/Footer/Footer';

const Default = (props) => {
  const sidebar = useContext(SidebarContext);
  return (
    <>
      <Sidebar isOpen={sidebar.isOpen} toggle={sidebar.toggle} />
      <Navbar toggle={sidebar.toggle} />
      <main style={props.style}>{props.children}</main>
      <FooterSection />
    </>
  );
};

export default Default;
