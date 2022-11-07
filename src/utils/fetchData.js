
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3649c637d8msh08ddf4c16495305p1972e4jsn57626436873d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4cd0ea56c8mshe91cd4caa596734p1fcb59jsnab8136bb616c',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}