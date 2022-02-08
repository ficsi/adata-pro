import React, {useEffect, useState} from "react";
import {getUser} from "./api/getRepo";


export default function Home() {
    let userInput = React.createRef();
    let repoInput = React.createRef();

    const [issue, setIssue] = useState(false);
    const [user, setUser] = useState({});
    let test = 'test:false';
    let handlerUserInput = async (event) => {
        event.preventDefault();
        setUser(async () => await getUser(userInput.current.value, repoInput.current.value));
        // setIssue( ()=> user.has_issues);
    }

    useEffect( () => {
        test = 'test:true';

    }, [user]);

        return (
        <>
            <h1>Adata Pro FE</h1>

            <label htmlFor="git-user">Github user:</label>
            <input ref={userInput} id="git-user" type="text"/>
            <br/>
            <label htmlFor="git-repo">Github user:</label>
            <input ref={repoInput} id="git-repo" type="text"/>
            <button type={"submit"} onClick={handlerUserInput}>submit</button>

            {issue ?? 'true'}
        </>
    )
}
export async function getServerSideProps(context) {
    console.log(context)
    return {
        props: {}, // will be passed to the page component as props
    }
}
