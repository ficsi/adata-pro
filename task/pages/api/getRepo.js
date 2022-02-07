//TODO create and use .env for variables
export const getUser = async (user, repo) => {
    let baseUrl = `https://api.github.com/users/`;
    const url = baseUrl + user;
    console.log(user)
    console.log(url)
    let request = await fetch(url);

    return await request.json();
}