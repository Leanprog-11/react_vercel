import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>

export function UserList({ usuarios, setUsuarios }) {
    const [totalUsuarios, setTotalUsuarios] = useState(0);

    useEffect(() => {
        setTotalUsuarios(usuarios.length);
    }, [usuarios]);

    const handleDelete = (id) => {
        setUsuarios(prevUsuarios => prevUsuarios.filter(usuario => usuario.id !== id));
    };

    return (
        <div>
            <header className="contenedor1">
            <img src="registros.webp" class="logo" alt="Logo"></img>
                <h1 className="titulo-centrado">Lista de usuarios</h1>
            </header>
            <nav className="nav">
            <a class="nav-link active" aria-current="page" href="#"><Link to="/add" className="nav-link active">Agregar usuario</Link></a>
            </nav>
            <br />
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        {usuario.nombre} - {usuario.correo} - {usuario.edad} 
                        <Link href="#" class="link" to={`/edit/${usuario.id}`}><i class="bi bi-arrow-clockwise"></i>Editar</Link>
                        <button href="#" class="button" onClick={() => handleDelete(usuario.id)}><i class="bi bi-trash-fill"></i>Eliminar</button>
                    </li>
                ))}
            </ul>
            <br />
            <h3>Total de usuarios registrados: {totalUsuarios}</h3>
        </div>
    );
}
