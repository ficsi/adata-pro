//TODO create and use .env for variables
export const getUser = async (user, repo) => {
    let baseUrl = `https://api.github.com/`;
    // https://api.github.com/repos/octocat/Hello-World
    const url = baseUrl + 'repos/' + user + '/' + repo;
    console.log(user)
    console.log(url)
    let request = await fetch(url);

    return await request.json();
}