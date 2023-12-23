import React, { useState } from 'react'


function Registrationform() {

    const [fname, setFname] = useState("");
    // console.log(fname);
    const [lname, setLname] = useState("");
    // console.log(lname);
    const [bday, setBday] = useState("");
    // console.log(bday);
    const [email, setEmail] = useState("");
    // console.log(email);
    const [phone, setPhone] = useState("");
    // console.log(phone);
    const [gender, setGender] = useState("");
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    // console.log(gender);

    // Check box
    const [check, setCheck] = useState("");
    const selectbox = (e) => setCheck(e.target.value);
    // console.log(check);

    // FORM Submitted
    const Submitted = (e)=>{
        e.preventDefault();
        const payload = {fname, lname,bday,email,phone,gender,check};
        // console.log(payload);
    }

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div
                                className="card shadow-2-strong card-registration"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form onSubmit={Submitted}>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        className="form-control form-control-lg"
                                                        value={fname} onChange={(e) => setFname(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="firstName" >
                                                        First Name
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        className="form-control form-control-lg"
                                                        value={lname} onChange={(e) => setLname(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="lastName">
                                                        Last Name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-lg"
                                                        id="birthdayDate"
                                                        value={bday} onChange={(e) => setBday(e.target.value)}
                                                    />
                                                    <label htmlFor="birthdayDate" className="form-label">
                                                        Birthday
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <h6 className="mb-2 pb-1">Gender: </h6>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="femaleGender"
                                                        defaultValue="option1"
                                                        defaultChecked=""
                                                        value="Female"
                                                        checked={gender === 'female'}
                                                        onChange={handleGenderChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="femaleGender">
                                                        Female
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="maleGender"
                                                        defaultValue="option2"
                                                        value="Male"
                                                        checked={gender === 'male'}
                                                        onChange={handleGenderChange}
                                                    // onChange={(e)=> setGender(e,target.value)}                                              
                                                    />
                                                    <label className="form-check-label" htmlFor="maleGender">
                                                        Male
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="email"
                                                        id="emailAddress"
                                                        className="form-control form-control-lg"
                                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="emailAddress">
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="tel"
                                                        id="phoneNumber"
                                                        className="form-control form-control-lg"
                                                        value={phone} onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                    <label className="form-label" htmlFor="phoneNumber">
                                                        Phone Number
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">

                                                <select className="select form-control-lg"

                                                    value={check}
                                                    onChange={selectbox}
                                                >

                                                    <option value={1} disabled="">
                                                        Choose option
                                                    </option>
                                                    <option value={'REACT'}>REACT</option>
                                                    <option value={"EXPRESS"}>EXPRESS</option>
                                                    <option value={"MONGO"}>MONGO</option>
                                                </select>
                                                <label className="form-label select-label">
                                                    Choose option
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <input
                                                className="btn btn-primary btn-lg"
                                                type="submit"
                                                defaultValue="Submit"

                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Registrationform;
