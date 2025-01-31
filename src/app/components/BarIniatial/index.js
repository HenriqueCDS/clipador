'use client'

import { useState } from 'react'

import styles from "./Navbar.module.css";
import { FaUserCircle,FaEquals,FaEllipsisV } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
export default function Sidebar() {

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

 
  return (
    <div className={styles.main}>
      {/* <button className={styles.toggle_button} onClick={toggleSidebar}>
        {showSidebar ?    <FaEquals size={16}  />: <FaEllipsisV size={16}  />}
      </button>  */}
      {showSidebar && (

        <div className={styles.sidebar}>
          <img src='https://media.discordapp.net/attachments/1143986307253682328/1144089006171246632/LogoBRANCO.png?width=1025&height=284' />
          <div className={styles.Menu}>
            <ul className={styles.sidebar_list}>
              <NavLink  exact to="/" className = {styles.link} > <h2>Dashboard</h2></NavLink>
              <NavLink  to="/workspace"  className = {styles.link}> <h2>Monitoramento</h2></NavLink>
            
            </ul>
          </div>

          <div className={styles.MenuFooter}>
            <ul className={styles.sidebar_list}>
              <NavLink  to="/workspace"  className ={styles.link}> <h2>Configuração</h2></NavLink>
              <NavLink  to="/workspace"  className ={styles.link}> <h2>Ajuda</h2></NavLink>
            </ul>
          </div>
        <div className={styles.border}></div>
        <div className={styles.MenuUser}>
          
              <FaUserCircle size={32}  />
              <p>Nome do Usuario</p>
           
          </div>
        </div>
      )}
    </div>
  );
};







