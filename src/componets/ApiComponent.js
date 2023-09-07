import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://dummyapi.io/data/v1/";
const authToken = "64dc4f6b40e4202fade619af";
const headers = {
    "app-id": `${authToken}`,
};

// metodos get para USUARIOS

export function useFetchUsers() {
    const [usuarios, setData] = useState([]);
    const [errorUsers, setError] = useState(null);
    const [loadingUsers, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url + "user", { headers })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, []);

    return { usuarios, errorUsers, loadingUsers };
}

export function useFetchUser(id) {
    const [usuario, setData] = useState([]);
    const [errorUser, setError] = useState(null);
    const [loadingUser, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url + "user/" + id, { headers })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { usuario, errorUser, loadingUser };
}

// metodos get para POST

export function useFetchPost(id) {
    const [post, setData] = useState([]);
    const [errorPost, setError] = useState(null);
    const [loadingPost, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url + "post/" + id, { headers })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { post, errorPost, loadingPost };
}

export function useFetchPosts() {
    const [posts, setData] = useState([]);
    const [errorPosts, setError] = useState(null);
    const [loadingPosts, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url + "post", { headers })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, []);

    return { posts, errorPosts, loadingPosts };
}

// metodos get para USER-POST

export function useFetchUserPost(id) {
    const [UserPost, setData] = useState([]);
    const [errorUserPost, setError] = useState(null);
    const [loadingUserPost, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url + "user/" + id + "/post", { headers })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { UserPost, errorUserPost, loadingUserPost };
}

//metodo get para USER-POST-COMMENTS
export function useFetchPostComment(id) {
    const [PostComment, setData] = useState([]);
    const [errorPostComment, setError] = useState(null);
    const [loadingPostComment, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url + "post/" + id + "/comment", { headers })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { PostComment, errorPostComment, loadingPostComment };
}

//metodo get para USER-POST-por-TAG
export function useFetchPostTags(id) {
    const [PostTag, setData] = useState([]);
    const [errorPostTag, setError] = useState(null);
    const [loadingPostTag, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(url + "tag/" + id + "/post", { headers })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { PostTag, errorPostTag, loadingPostTag };
}
