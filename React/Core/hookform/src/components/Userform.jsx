import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
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
    };
    
    return(
        <>
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname </label> 
                <input type="text" value={firstname} onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname </label> 
                <input type="text" value={lastname} onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div>
                <label>Email </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        </div>
        <div>
            <h4>Your Form Data</h4>
            <h5>First Name {firstname}</h5>
            <h5>Last Name {lastname}</h5>
            <h5>Email {email}</h5>
            <h5>Password {password}</h5>
            <h5>Confirm Password {password}</h5>
        </div>
    </>
    );
};
    
export default UserForm;