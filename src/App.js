import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SidebarContext } from "./components/abstract/SidebarContext";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Wallet from "./components/Wallet";
import Activity from "./components/ActivityLog";
import Home from "./components/Home";
import Expenses from "./components/Expenses";
import Transactions from "./components/Transactions";
import Users from "./components/tables/usersTable";
import User from "./components/User";

import "./scss/styles.scss";



function App() {
  const [theme, setTheme] = useState(true);
   const [sidemenu, setSidemenu] = useState(true);

  console.log("app rendered");
  return (
    <div className={theme ? "lightTheme" : "darkTheme"}>
      <div className="App">
        <SidebarContext.Provider value={{sidemenu, setSidemenu}}>    
        <Sidebar color={setTheme} icon={theme}/>
        <Navbar color={setTheme} icon={theme}/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="/users/:userId" element={<User />} />
        <Route path="wallet" element={<Wallet />}></Route>
        <Route path="activity" element={<Activity />}></Route>
        <Route path="expenses" element={<Expenses />}></Route>
        <Route path="transactions" element={<Transactions />}></Route>
      </Routes>
      </SidebarContext.Provider>
    </div>
    </div>
  );
}

export default App;
