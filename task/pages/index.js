import React, {useEffect, useState} from "react";
import {getData, getIssues} from "./api/getRepo";


export default function Home() {
    let userInput = React.createRef();
    let repoInput = React.createRef();

    const [issue, setIssue] = useState(false);
    const [user, setUser] = useState({});

    let test;
    let handlerUserInput = async (event) => {
        event.preventDefault();
        setUser(await getData(userInput.current.value, repoInput.current.value));
        setIssue(true);
    }
    console.log(user.open_issues_count)
    return (
        <>
            <h1>Adata Pro FE</h1>

            <label htmlFor="git-user">Github user:</label>
            <input ref={userInput} id="git-user" type="text"/>
            <br/>
            <label htmlFor="git-repo">Github user:</label>
            <input ref={repoInput} id="git-repo" type="text"/>
            <button type={"submit"} onClick={handlerUserInput}>submit</button>

            {
                issue ?

                    <h1>{user.name} has {user.open_issues_count} open issue/s</h1>
                    :
                    <p>NO!</p>


            }
        </>
    )
}

export async function getServerSideProps(context) {
    console.log(context)
    return {
        props: {}, // will be passed to the page component as props
    }
}
