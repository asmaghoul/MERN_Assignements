import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [firstnameError, setfirstnameError] = useState("");
    const [lastname, setlastname] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordError, setpasswordError] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    
    /*const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); */

    const Handlefirstname = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 2) {
            setfirstnameError("Firstname must be at least two characters!");
    }
    }
    const Handlelastname = (e) => {
        setlastname(e.target.value);
        if(e.target.value.length < 2) {
            setlastnameError("Lastname must be at least two characters!");
    }
    }
    const Handleemail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setemailError("Email must be at least two characters!");
    }
    }
    const Handlepassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 2) {
            setpasswordError("Password must be at least two characters!");
    }
    }
    const Handleconfirmpassword = (e) => {
        setconfirmpassword(e.target.value);
        if(e.target.value.length < 2) {
            setconfirmpasswordError("Passwords must match");
    }
    }
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        setfirstname("");
        setlastname("");
        setEmail("");
        setPassword("");
        setconfirmpassword("");
        /*setHasBeenSubmitted( true ); */
    };
    
    return(
        <>
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname </label> 
                <input type="text" value={firstname} onChange={Handlefirstname} />
                {
                    firstnameError ?
                    <p>{firstnameError}</p>:
                    ""
                }
                
            </div>
            <div>
                <label>Lastname </label> 
                <input type="text" value={lastname} onChange={ Handlelastname } />
                {
                    lastnameError ?
                    <p>{lastnameError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Email </label> 
                <input type="text" value={email} onChange={ Handleemail } />
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Password </label>
                <input type="text" value={password} onChange={ Handlepassword } />
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Confirm Password </label>
                <input type="text" value={confirmpassword} onChange={ Handleconfirmpassword } />
                {
                    confirmpasswordError ?
                    <p>{confirmpasswordError}</p>:
                    ""
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
    </>
    );
};

export default UserForm
