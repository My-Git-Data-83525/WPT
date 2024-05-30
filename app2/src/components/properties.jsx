import { Link } from "react-router-dom"
import Navbar from "./navbar"
import { useEffect, useState } from "react"
import getProperties, { DeleteProperties, UpdateProperties, getSpecificProperties } from "../Services/property";



function Properties() {

    const [properties, setProperties] = useState([]);


    const loadProperties = async () => {
        const result = await getProperties();
        if (result['status'] == 'success') {
            setProperties(result['data'])
            console.log(properties);
        }
    }
    useEffect(() => { loadProperties() }, []);

        const onDelete=async(id)=>{
            debugger;
            const result= await DeleteProperties(id);
            if(result['status']=='success'){
                loadProperties();
            }
        }
        const onUpdate=async(id)=>{
            const result=await getSpecificProperties(id);
            {console.log(result['data'])}
            if(result['status']=='success'){
                
            }
            
        }

    return (
        <div className="page-header"> <Navbar />
            <Link to='/addproperties' className="btn-success">Add property</Link>

            <table className="table table-striped table-hover mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photos</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>Owner Name</th>
                        <th>Contact No</th>
                        <th>Rent</th>
                        <th>operations</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property, index) => {
                        return(
                        <tr>
                            <td>{property['id']}</td>
                            {console.log(`http://localhost:4000/property/image/${property['profileImage']}`)}
                            <td> <img
                            style={{ width: 100, height: 100 }}
                            src={`http://localhost:4000/image/${property['profileImage']}`} alt=""/> </td>
                            <td>{property['title']}</td>
                            <td>{property['address']}</td>
                            <td>{property['ownerName']}</td>
                            <td>{property['contactNo']}</td>
                            <td>{property['rent']}</td>
                            <td><button onClick={()=>onUpdate(property['id'])} className="btn btn-success me-2">Update</button>
                            <button onClick={() => {
                                onDelete(property['id'])
                            }} className="btn btn-danger">Delete</button></td>
                        </tr>
                   )
                    })}
                    
                </tbody>
            </table>
        </div>


    )
}

export default Properties