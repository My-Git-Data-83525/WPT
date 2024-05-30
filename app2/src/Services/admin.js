import axios from "axios";

export async function register(firstName, lastName, email, password) {
    const body = { firstName, lastName, email, password }
    try {
        const response = await axios.post(`http://localhost:4000/admin/register`, body)

        return response.data
    } catch (error) {
        console.log('Error :', error)
    }
    return null
}

export async function login(email, password) {
    const body = { email, password }
    const response = await axios.post(`http://localhost:4000/admin/login`, body)
    return response.data
}

export async function addproperty(
    categoryId,
    title,
    details,
    address,
    contactNo,
    ownerName,
    isLakeView,
    isTV,
    isAC,
    isWifi, 
    isMiniBar,
    isBreakfast,
    isParking,
    guests,
    bedrooms,
    beds,
    bathrooms,
    rent,
    profileImage) {
    const body1 = {
        categoryId,
      title,
      contactNo,
      ownerName,
      details,
      address,
      guests,
      bedrooms,
      bathrooms,
      beds,
      rent,
      isLakeView,
      isTV,
      isAC,
      isWifi,
      isMiniBar,
      isBreakfast,
      isParking,
    }
console.log(body1);
        const body = new FormData()
        body.append('title', title)
        body.append('contactNo', contactNo)
        body.append('ownerName', ownerName)
        body.append('details', details)
        body.append('address', address)
        body.append('guests', guests)
        body.append('bedrooms', bedrooms)
        body.append('bathrooms', bathrooms)
        body.append('beds', beds)
        body.append('rent', rent)
        body.append('isLakeView', isLakeView ? 1 : 0)
        body.append('isTV', isTV ? 1 : 0)
        body.append('isAC', isAC ? 1 : 0)
        body.append('isWifi', isWifi ? 1 : 0)
        body.append('isMiniBar', isMiniBar ? 1 : 0)
        body.append('isBreakfast', isBreakfast ? 1 : 0)
        body.append('isParking', isParking ? 1 : 0)
        body.append('image', profileImage)
        body.append('categoryId',categoryId)

        try{
            const token=sessionStorage['token'];
            const response = await axios.post(`http://localhost:4000/property`,body,{headers:{token}})
            return response.data
        }catch(ex){
            console.log(`exception`,ex);
        }
        return null;
    }