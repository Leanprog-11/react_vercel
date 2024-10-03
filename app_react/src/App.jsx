import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserList } from './components/UserList';
import { UseForm } from './components/UseForm';

function App() {
    const [usuarios, setUsuarios] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/user-list" element={<UserList usuarios={usuarios} setUsuarios={setUsuarios} />} />
                <Route path="/add" element={<UseForm usuarios={usuarios} setUsuarios={setUsuarios} />} />
                <Route path="/edit/:id" element={<UseForm usuarios={usuarios} setUsuarios={setUsuarios} />} />
            </Routes>
        </Router>
    );
}

export default App;
