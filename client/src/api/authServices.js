import api from "./axiosConfig";

const login = async (values) => {
    const response = await api.post("/auth/login", values);
    return response.data;
}

const logout = async () => {
    const response = await api.get("/auth/logout");
    return response.data;
}

const registrarUsuario = async (usuario) => {
    const response = await api.post("/auth/registro", usuario);
    return response.data;
}

export { login, logout, registrarUsuario};
