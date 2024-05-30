import axios from "axios";

async function getProperties() {
    try {
        const token = sessionStorage['token'];
        const response = await axios.get(`http://localhost:4000/property`, { headers: { token } })
        console.log(response)
        return response.data
    } catch (ex) {
        console.log(ex);
    }
    return null;
}
export async function getSpecificProperties(id) {
    try {
        const token = sessionStorage['token'];
        const response = await axios.get(`http://localhost:4000/property/${id}`, { headers: { token } })
        console.log(response['data[0    ]'])
        return response.data
    } catch (ex) {
        console.log(ex);
    }
    return null;
}
export async function DeleteProperties(id) {
    try {
        const token = sessionStorage['token'];
        const response = await axios.delete(`http://localhost:4000/property/${id}`, { headers: { token } })
        console.log(response)
        return response.data
    } catch (ex) {
        console.log(ex);
    }
    return null;
}
export async function UpdateProperties(id) {
    try {
        const token = sessionStorage['token'];
        const response = await axios.put(`http://localhost:4000/property/${id}`, { headers: { token } })
        console.log(response)
        return response.data
    } catch (ex) {
        console.log(ex);
    }
    return null;
}
export default getProperties;