export const createPost = (userId, token, post) => {
    return fetch(`https://mw-books.herokuapp.com/api/post/new/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//////////////////////////////////////////////////

export const postList = () => {
    return fetch(`https://mw-books.herokuapp.com/api/posts`, {
        method: 'GET'
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

/////////////////////////////////////////////

export const listByUser = (userId, token) => {
    return fetch(`https://mw-books.herokuapp.com/api/posts/by/${userId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}


///////////////////////////////////////////////

export const singlePost = postId => {
    return fetch(`https://mw-books.herokuapp.com/api/post/${postId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

/////////////////////////////////////////////////

export const updatePost = (postId, token, post) => {
    return fetch(`https://mw-books.herokuapp.com/api/post/${postId}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

/////////////////////////////////////////////////

export const remove = (postId, token) => {
    return fetch(`https://mw-books.herokuapp.com/api/post/${postId}`, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

/////////////////////////////////////////////////

export const like = (userId, token, postId) => {
    return fetch(`https://mw-books.herokuapp.com/api/post/like`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, postId})

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

/////////////////////////////////////////////////

export const unlike = (userId, token, postId) => {
    return fetch(`https://mw-books.herokuapp.com/api/post/unlike`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, postId})

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

/////////////////////////////////////////////////

export const comment = (userId, token, postId, comment) => {
    return fetch(`https://mw-books.herokuapp.com/api/post/comment`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, postId, comment})

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

/////////////////////////////////////////////////

export const uncomment = (userId, token, postId, comment) => {
    return fetch(`https://mw-books.herokuapp.com/api/post/uncomment`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, postId, comment})

    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}