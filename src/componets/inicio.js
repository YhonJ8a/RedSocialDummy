import React, { useState } from "react";  //useEffect,
//import { Outlet } from "react-router-dom";
import like from "./like.png";
import "./inicio.css";
import ModalUser from "./ModalUser";

import {useFetchPosts, useFetchPostTags } from "./ApiComponent";

var estado;

function Tags({text}){
    return(
    <div className="tags">
        <h7>{text}</h7>
    </div>
)};


function Card({
        idUser,
        nameUser,
        imageUser,
        textPost,
        imagenPost,
        testTags,
        likes,
        date,
    }){
        const [isModalOpen, setIsModalOpen] = useState(false);

        const OpenModal = () => {
        setIsModalOpen(true);
        };

        const closeModal = () => {
        setIsModalOpen(false);
        };

    return (
        <div className="cardPrinc">
            <div className="card">
                <div className="bodyPost">
                    <div className="headPost">
                    <img
                        className="fotoUser"
                        src={imageUser}
                        alt={nameUser}
                        onClick={OpenModal}
                    />
                    <div className="headPost2">
                        <h2 onClick={OpenModal}>{nameUser}</h2>
                        <p className="date">{date}</p>
                    </div>
                    </div>
                    <div className="bodyPostC">
                    <img src={imagenPost} alt={nameUser} />
                    <div className="bodyPosB">
                        <p>{textPost}</p>
                        <div className="tagsContainer">                           
                            {testTags?.map((item) => (
                                <Tags text={item}/>
                            ))}
                        </div>
                        <div className="piePost">
                        <div>
                            <img className="likeL" src={like} alt="like " />
                            <p>{likes}</p>
                            <button>comentarios</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <ModalUser
            isOpen={isModalOpen}
            onClose={closeModal}
            idUserData={idUser}
            />
        </div>
    );
};

function FiltrarTags(text){
    const { PostTag, errorPostTag, loadingPostTag } = useFetchPostTags(text);

    if (loadingPostTag) {
        return <p>Cargando...</p>;
    }
    if (errorPostTag) {
        return <p>Error: {errorPostTag.message}</p>;
    }
    
    console.log("DATA FILTER"+JSON.stringify(PostTag, null, 2));
    return (
        <div class="contenedor-tarjetas">
                {PostTag?.data.map((item, index) => (
                <Card
                    key={index.id}
                    idUser={item.owner.id}
                    nameUser={item.owner.firstName}
                    imageUser={item.owner.picture}
                    textPost={item.text}
                    imagenPost={item.image}
                    testTags={item.tags}
                    likes={item.likes}
                    date={item.publishDate}
                />
                ))}
            </div>
    );
}

function PostAll(){
    const { posts, errorPosts, loadingPosts } = useFetchPosts();

    if (loadingPosts) {
        return <p>Cargando...</p>;
    }
    if (errorPosts) {
        return <p>Error: {errorPosts.message}</p>;
    }

    console.log("DATA ALL"+JSON.stringify(posts, null, 2));

    return (
        <div class="contenedor-tarjetas">
            {posts?.data.map((item, index) => (
            <Card
                key={index.id}
                idUser={item.owner.id}
                nameUser={item.owner.firstName}
                imageUser={item.owner.picture}
                textPost={item.text}
                imagenPost={item.image}
                testTags={item.tags}
                likes={item.likes}
                date={item.publishDate}
            />
            ))}
        </div>
    );
}

/* 
const { usuarios, errorUsers, loadingUsers } = useFetchUsers();
const { usuario, errorUser, loadingUser } = useFetchUser("60d21af267d0d8992e610b8d");
const { post, errorPost, loadingPost } = useFetchPost("60d21af267d0d8992e610b8d");
const { posts, errorPosts, loadingPosts } = useFetchPosts();
const { UserPost, errorUserPost, loadingUserPost } = useFetchUserPost("60d0fe4f5311236168a109ca");
const { PostTag, errorPostTag, loadingPostTag } = useFetchPostTags("canino");

import {useFetchUsers, useFetchUser, useFetchPost, useFetchPosts, useFetchUserPost, useFetchPostComment} from "./componets/ApiComponent";
const { UserPost, errorUserPost, loadingUserPost } = useFetchUserPost("60d21af267d0d8992e610b8d");
*/
function Inicio() {
    const [inputValue, setInputValue] = useState('');
    const [selecto, setSelecto] = useState(false);


    const Busqueda =(e) =>{
        setSelecto(true);
        e.preventDefault();
        setInputValue(e.target.buscar.value);
        estado= true;
        console.log("boolean: "+estado+" "+inputValue);
    };

    const Cuerpo =() =>{
        console.log(selecto);
        if(selecto){
            console.log("FILTROOOO");
            return FiltrarTags(inputValue);
        }else{
            console.log("POSTT ALL");
            return PostAll();
        }
    };

    return (
        <div className="App">
            <body>
                <div class="barra-superior">
                    <header class="main-header">
                        <form class="search-bar" onSubmit={Busqueda}>
                            <input type="text" placeholder="Buscar Tags" name="buscar"/>
                            <button type="submit">Buscar</button>
                        </form>             
                    </header>
                </div>
                <Cuerpo inputValue={inputValue} selecto={estado}/>
            </body>
        </div>
    );
}

export default Inicio;

/*
<div class="contenedor-tarjetas">
                {posts?.data.map((item, index) => (
                <Card
                    key={index.id}
                    idUser={item.owner.id}
                    nameUser={item.owner.firstName}
                    imageUser={item.owner.picture}
                    textPost={item.text}
                    imagenPost={item.image}
                    testTags={item.tags}
                    likes={item.likes}
                    date={item.publishDate}
                />
                ))}
            </div>dog
*/