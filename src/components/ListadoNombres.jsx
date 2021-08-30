import React, { useState } from "react";
import uniqid from 'uniqid';

const ListadoNombres = () => {

  const [nombre, setNombre] = useState('');
  const [listaNombres, setListaNombres] = useState([]);

  const addNombre = (e)=> {
    e.preventDefault();
    const nuevoNombre = {
      id:uniqid(),
      tituloNombre:nombre
    }
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre('');
  }

  const deleteNombre = (id) => {
    const nuevaArray = listaNombres.filter(item => item.id !== id);
    setListaNombres(nuevaArray);
  }

  return(
    <div>
      <h2>Aplicación CRUD</h2>
      <div className="row">
        <div className="col">
          <h2>Listado de nombres</h2>
          <ul className="list-group">
            {
              listaNombres.map( item =>
                <li key={item.id} className="list-group-item">{item.tituloNombre}
                  <button 
                    onClick={() => {deleteNombre(item.id)}}
                    className="btn btn-danger float-end">Borrar
                  </button>
                </li>
              )
            }
          </ul>
        </div>
        <div className="col">
          <h2>Formulario para añadir nombres</h2>
          <form onSubmit={(e)=>addNombre(e)} className="form-group">
            <input 
              onChange={(e)=>{setNombre(e.target.value)}} 
              className="form-control mb-3" type="text" 
              placeholder="introduce el nombre"
              value={nombre}
            />
            <input className="btn btn-info btn-block" type="submit" value="Registrar Nombre"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ListadoNombres;