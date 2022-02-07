import React from "react";
import {getUser} from "./api/getRepo";


export default function Home() {
    let userInput = React.createRef();
    let repoInput = React.createRef();

    let handlerUserInput = async () => {
        let user = await getUser(userInput.current.value, repoInput.current.value)

        userInput.current.value = '';
        repoInput.current.value = '';
        console.log(user)
    }
    return (
        <>
            <h1>Adata Pro FE</h1>

            <label htmlFor="git-user">Github user:</label>
            <input ref={userInput} id="git-user" type="text"/>
            <br/>
            <label htmlFor="git-repo">Github user:</label>
            <input ref={repoInput} id="git-repo" type="text"/>
            <button type={"submit"} onClick={handlerUserInput}>submit</button>

        </>
    )
}
