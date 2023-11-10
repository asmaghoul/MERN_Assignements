import React, {useState} from "react";

const Personcard= (props) =>{
    const [birthDay, setBirthday]=useState(props.age)
    console.log(birthDay);
    
    const handleClick = () => {
        setBirthday((birthDay) => birthDay + 1);
    }
    
    
    return(
        <div>
            <h1>{props.firstName} , {props.lastName}</h1>
            <p>Age:{birthDay}</p>
            <p>Hair Color:{props.hairColor}</p>
            
            <button onClick={ handleClick }>Birthday Button for  {props.firstName} {props.lastName}</button>
        </div>
        
    )
}
export default Personcard