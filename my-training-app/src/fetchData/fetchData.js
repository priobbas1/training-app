export const exercisesOptions = {
    method:'Get',
    headers: {
        'localhost':'http://localhost:4000/api/',
         'key':'AUTH_JWT_SECRET = aRandomString'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};