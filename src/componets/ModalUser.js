import React from 'react';   //useState
import { useFetchUser } from "./ApiComponent";
import './ModalUser.css';

//const ModalUser = ({ isOpen, onClose, idUser }) => {  
function ModalUser ({ isOpen, onClose, idUserData }) {
    const { usuario, errorUser, loadingUser } = useFetchUser(idUserData);
    if (!isOpen) return null;

    if (loadingUser) {
        console.log("CARGANDO ");
        return <p>Cargando...</p>;
    }
    if (errorUser) {
        console.log("ERROR: "+errorUser.message);
        return <p>Error: {errorUser.message}</p>;
    }

    console.log(usuario);
    return (
        <div className="modalBack">
            <div className="modal-overlay">
                <img src={usuario.picture} alt={usuario.firstName}></img>
                <div className='headModal'>
                    <div className='headCenter'>
                        <div>
                            <h1> {usuario.firstName} {usuario.lastName}</h1>
                            <p className='id'>(ID.{usuario.id})</p>
                        </div>
                        <h3>{usuario.email}</h3>
                    </div>
                    <div className="modal">
                        <button className="modal-close-button" onClick={onClose}>
                            X
                        </button>
                    </div>
                    <div className='infoUser'>
                        <h4>Telefono: {usuario.phone}</h4>
                        <h4>Location: {usuario.location.city}/{usuario.location.country}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUser;