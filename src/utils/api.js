export const fetchPosts = (page, size, sort) => {
    const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${sort}`;
    return fetch(url, {
        headers: new Headers({
            'Accept' : 'application/json'
        })
    }).then(response => response.json());
};