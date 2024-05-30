import { useState } from "react";
import Navbar from "./navbar"
import { addproperty } from "../Services/admin";

function AddProperties() {
    // debugger;
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [details, setDetails] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [guests, setGuests] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [beds, setBeds] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [rent, setRent] = useState(0);
    const [profileImage, setProfileImage] = useState(undefined);
    const [isLakeView, setLakeView] = useState(false);
    const [isTV, setTv] = useState(false);
    const [isAC, setAc] = useState(false);
    const [isBreakfast, setBreakFast] = useState(false);
    const [isMiniBar, setMiniBar] = useState(false);
    const [isWifi, setWifi] = useState(false);
    const [isParking, setParking] = useState(false);
    const [categoryId, setCatId] = useState('');



    const onSave = async() => {
        // debugger
        console.log(`${title}`);
        console.log(`${address}`);
        console.log(`${details}`);
        console.log(`${contactNo}`);
        console.log(`${ownerName}`);
        console.log(`${guests}`);
        console.log(`${bedrooms}`);
        console.log(`${beds}`);
        console.log(`${bathrooms}`);
        console.log(`${rent}`);
        console.log(`${profileImage}`);
        console.log(`${isLakeView}`);
        console.log(`${isTV}`);
        console.log(`${isAC}`);
        console.log(`${isBreakfast}`);
        console.log(`${isMiniBar}`);
        console.log(`${isWifi}`);
        console.log(`${isParking}`);
        console.log(`${categoryId}`);
const result= await addproperty( 
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
    profileImage)
    if(result['status']=='success'){
        alert('property is added')  
    }
        
    }

    return (
        <div className="page-header">
            <Navbar />

            <div className="mt-3 mb-3 "><button className="btn btn-primary">Add Property</button></div>


            <div className="row">
                <div className="col-2"></div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="">title</label>
                        <input
                            onChange={(e) => { setTitle(e.target.value) }}
                            type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Address</label>
                        <textarea
                            onChange={(e) => { setAddress(e.target.value) }}
                            type="text" className="form-control " rows={2} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Details</label>
                        <input
                            onChange={(e) => { setDetails(e.target.value) }}
                            type="text" className="form-control" />
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">#Guests</label>
                                <input
                                    onChange={(e) => { setGuests(e.target.value) }}
                                    type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">#Bedrooms</label>
                                <input
                                    onChange={(e) => { setBedrooms(e.target.value) }}
                                    type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <select className="form-select mb-2"
                        onChange={(e) => { setCatId(e.target.value) }}
                        aria-label="Default select example">
                        <option selected>select type of house</option>
                        <option value="1">Mountain House</option>
                        <option value="2">Farm house</option>
                        <option value="3">Tree house</option>
                    </select>

                    <div className="mb-3">
                        <label htmlFor="">Add Photos</label>
                        <input
                            onChange={(e) => { setProfileImage(e.target.files[0]) }}
                            type="file" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="">Contact Number</label>
                        <input
                            onChange={(e) => { setContactNo(e.target.value) }}
                            type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Owner Name</label>
                        <input
                            onChange={(e) => { setOwnerName(e.target.value) }}
                            type="text" className="form-control" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="">Rent</label>
                        <input
                            onChange={(e) => { setRent(e.target.value) }}
                            type="text" className="form-control" />
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">#Beds</label>
                                <input
                                    onChange={(e) => { setBeds(e.target.value) }}
                                    type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="">#Bathroom</label>
                                <input
                                    onChange={(e) => { setBathrooms(e.target.value) }}
                                    type="text" className="form-control" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ textAlign: "left" }}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        onChange={(e) => { setLakeView(e.target.checked) }}
                                        type="checkbox" value="" id="flexCheckDefault" />
                                    <i class="bi bi-water">Lake View</i>
                                </div>
                            </div>
                            <div className="col" style={{ textAlign: "left" }}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        onChange={(e) => { setTv(e.target.checked) }}
                                        type="checkbox" value="" id="flexCheckDefault" />
                                    <i class="bi bi-tv">TV</i>
                                </div>
                            </div>
                            <div className="col" style={{ textAlign: "left" }}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        onChange={(e) => { setAc(e.target.checked) }}
                                        type="checkbox" value="" id="flexCheckDefault" />
                                    <i class="bi bi-fan">AC</i>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-1" >
                            <div className="col" style={{ textAlign: "left" }}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        onChange={(e) => { setBreakFast(e.target.checked) }}
                                        type="checkbox" value="" id="flexCheckDefault" />
                                    <i class="bi bi-egg-fried">Breakfast</i>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        onChange={(e) => { setParking(e.target.checked) }}
                                        type="checkbox" value="" id="flexCheckDefault" />
                                    <i class="bi bi-p-circle">Parking</i>
                                </div>
                            </div>
                            <div className="col" style={{ textAlign: "left" }}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        onChange={(e) => { setMiniBar(e.target.checked) }}
                                        type="checkbox" value="" id="flexCheckDefault" />
                                    <i class="bi bi-droplet">Minibar</i>
                                </div>
                            </div>
                            <div className="col" style={{ textAlign: "left" }}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        onChange={(e) => { setWifi(e.target.checked) }}
                                        type="checkbox" value="" id="flexCheckDefault" />
                                    <i class="bi bi-wifi">Wifi</i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className="col">

                            </div>
                        </div>
                    </div>

                    <div className="col-2"></div>
                </div>
                <button onClick={onSave} className="btn btn-success me-5">Save</button>
                <button className="btn btn-danger">Cancel</button>
            </div>

            )
}

            export default AddProperties