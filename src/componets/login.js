import React from "react";
import GoogleLogin from "react-google-login";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import "./login.css";
import { redirect } from "react-router-dom";

function Login() {
    const clienteId =
        "1002911785696-u5g9l987jls0notggjenci47pi3v1n8n.apps.googleusercontent.com";

    const validacion =(respuesta) => {
        console.log(respuesta);
            if(respuesta){
                return redirect("inicio");
            }
        return null;
    };

    const fallido = (repuesta) => {
        alert("NOOOOOO NO pasooooooooo");
        return (
            <div/>
        );
    };

    useEffect(() => {
        const start = () => {
        gapi.auth2.init({
            clientId: clienteId,
        });
        };
        gapi.load("client:auth2", start);
    }, []);
    

    return (
        <div className="app">
            <div className="login-container">
                <div className="logo">
                <img src="..\imgGoogle.jpg" alt="Iniciar Sesion con Google" />
                </div>
                <GoogleLogin
                clientId="{clienteId}"
                buttonText="Inicia Con Google"
                onSuccess={validacion}
                onFailure={fallido}
                cookiePolicy={"single_host_policy"}
                />
            </div>
        </div>
    );
}

export default Login;
