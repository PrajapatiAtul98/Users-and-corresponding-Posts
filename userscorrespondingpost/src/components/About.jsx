import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Home from "./Home"

const About = () => {

    const getUsers = () => {

        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "appication/json")

        const requestoptionsObj = {
            method: "GET",
            headers: myHeaders,
        }
        fetch("https://content.newtonschool.co/v1/pr/main/users", requestoptionsObj)
            .then((res) => res.json())
            .then((data) => setUsersdata(data))  //stores the getting data from api
            .catch((err) => console.log("this the Error:", err));
    }

    const [usersdata, setUsersdata] = useState([])

    useEffect(() => {
        console.log("About mounted")    // when page loads

        getUsers();

        return (
            console.log(" About Unmounted")  // when i will return it or hide it
        )
    }, [])

    return (
        <ol>
            {usersdata.map((usersItems) =><li key={usersItems.id}>
                {usersItems.username}
                {<ul><li>{usersItems.name}</li></ul>}
                {<ul><li>{usersItems.phone}</li></ul>}
               
            </li>)}
        </ol>
    )

}

export default About;