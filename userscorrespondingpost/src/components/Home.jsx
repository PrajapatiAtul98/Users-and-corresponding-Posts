import React  from "react"
import { useEffect } from "react"
import { useState } from "react"


function Home (){

    const getPost = () => {

        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "appication/json")

        const requestoptionsObj = {
            method: "GET",
            headers: myHeaders,
        }
        fetch("https://content.newtonschool.co/v1/pr/main/posts", requestoptionsObj)
            .then((res) => res.json())
            .then((data) => setPostData(data))  //stores the getting data from api
            .catch((err) => console.log("this the Error:", err));
    }

    const [postData, setPostData] = useState([])

    useEffect(() => {
        getPost();
    }, [])

    return (
        <ol>
            {postData.map((postItems) =><li key={postItems.id}>
                {postItems.title}
                {/* {<ul><li>id:{postItems.id}</li></ul>}
                {<ul><li>{postItems.body}</li></ul>} */}
                
            </li>)}
        </ol>
    )

}
   
export default Home;