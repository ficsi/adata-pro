//TODO create and use .env for variables
export const getUser = async (user, repo) => {
    let baseUrl = `https://api.github.com/`;
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