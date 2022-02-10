//TODO create and use .env for variables
let baseUrl = `https://api.github.com/`;

export const getData = async (user, repo) => {
    // https://api.github.com/repos/octocat/Hello-World
    const url = baseUrl + 'repos/' + user + '/' + repo;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}
export const getIssues = async (issueUrl)=>{
    try {
        const response = await fetch(issueUrl);

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}