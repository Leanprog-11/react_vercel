import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export function UseForm({ usuarios, setUsuarios }) {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const usuario = usuarios.find(user => user.id === parseInt(id));
            if (usuario) {
                reset(usuario);
            }
        }
    }, [id, reset, usuarios]);

    const onSubmit = (data) => {
        if (id) {
            // Actualizar usuario existente
            setUsuarios(prevUsuarios =>
                prevUsuarios.map(usuario =>
                    usuario.id === parseInt(id) ? { ...usuario, ...data } : usuario
                )
            );
        } else {
            // Generar nuevo ID
            const newId = usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
            setUsuarios(prevUsuarios => [...prevUsuarios, { id: newId, ...data }]);
        }
        navigate('/user-list'); // Regresar a la lista de usuarios
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
                <div class="contenedortexto">
                <h2>{id ? 'Actualizar' : 'Agregar'} usuario</h2>
                <div className="mb-3">
                <label for="exampleInputNombre1" class="form-label"><strong>Nombre y apellido:</strong></label>
                <input type="nombre" class="form-control" id="exampleInputNombre1" aria-describedby="nombreHelp" {...register('nombre', {required: true})} placeholder/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label"><strong>Correo electrónico:</strong></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"{...register('correo', {required: true})} placeholder/>
                </div>
                <div className="mb-3">
                <label for="exampleInputEdad1" class="form-label"><strong>Edad:</strong></label>
                <input class="form-control" id="exampleInputEdad1" aria-describedby="edadHelp" type='number' {...register('edad', {required: true})} placeholder/>
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Actualizar' : 'Agregar'} Usuario</button>
                </div>
            </div>
        </form>
    );
}
