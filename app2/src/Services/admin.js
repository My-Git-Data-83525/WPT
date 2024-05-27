import axios from "axios";

export async function register(firstName, lastName, email, password) {
    const body = { firstName, lastName, email, password }
    try {
        const response = await axios.post(`http://localhost:3000/admin/register`, body)
        return response.data
    } catch (error) {
console.log('Error :',error)
    }
return null
}