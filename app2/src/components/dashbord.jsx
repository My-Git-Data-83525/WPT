import Properties from "./properties"

function Dashboard(){

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Profile Image</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>Contact No</th>
                        <th>Owner Name</th>
                        <th>Rent</th>
                    </tr>
                </thead>
                <tbody>
                    {Properties}
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard
id, title, address, contactNo, ownerName, rent, profileImage