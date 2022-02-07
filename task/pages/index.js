import React from "react";
import {getUser} from "./api/getRepo";


export default function Home() {
    let textInput = React.createRef();
    let handler = async () => {
        let user = await getUser(textInput.current.value, '')

        textInput.current.value = '';
    }
    return (
        <>
            <h1>Adata Pro FE</h1>

            <label htmlFor="git-user">Github user:</label>
            <input ref={textInput} id="git-user" type="text"/>
            <button type={"submit"} onClick={handler}>submit</button>

        </>
    )
}
