export const popular = async () => {
    const client_id = 'HrUdY-6cEl1IKCKNKMclXA'
    const client_pw = 'KoOTI0aRxn7UZoOqKGDog_XwqtCVFg'
    const basic = btoa(`${client_id}:${client_pw}`);
    var loginHeaders = new Headers();
    loginHeaders.append("Authorization", `basic ${basic}`);
    var loginFormData = new FormData();
    loginFormData.append('grant_type', 'client_credentials');
    var loginOptions = {
        method: 'POST',
        headers: loginHeaders,
        body: loginFormData,
        redirect: 'follow'
    };
    try {
        const login = await fetch("https://www.reddit.com/api/v1/access_token", loginOptions);
        if (login.ok) {
            const jsonResponse = await login.json()
            let token = await jsonResponse.access_token
            var myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);
            myHeaders.append("Cookie", "csv=2; edgebucket=0o6R2BILYSco0yWoOx; loid=000000000tizafax15.2.1707090620289.Z0FBQUFBQmx3Q09sSURIUU85RGpxOVMwbnQ0Wm1fTGlOMEFvNjhGLUJzdUY2NmVkQnB2QXpIWFNWbV9oWFo5Q3g4MjdkcnlnZDZmUldoNlRRdDFJZXhraGVxVm1OZm40RmN2MWdhUzFzQllhWTljbUJOb050aWVOekZ2ZDMzcnhxbW5CRWcteHpEQnc; session_tracker=cmccpeklieqmbdaghn.0.1707345244164.Z0FBQUFBQmx4QVZjcUZqekVkOFphVVpzYTdxX0tIaU96elhqRVN5ZlNDVE50bDhwSGN1ZWF6OU5faUFVUUVKZjlONkZsbEVuUlNxNDJUY1VzR0piMENyX0lmVUpmbWpOLXV5OGVnQ3hPemJNaWhkcFJSdWViWTRGd01SRjRaM2tfaGJNT3d2OVlfRU8");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            return fetch('https://oauth.reddit.com/r/popular?raw_json=1', requestOptions
            ).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.data) {
                    return [];
                }
                return jsonResponse.data.children.map(x => ({
                   title: x.data.title,
                   subreddit: x.data.subreddit_name_prefixed,
                   thumbnail: x.data.thumbnail,
                   commentsLink: x.data.permalink,
                   media: x.data.media,
                   ups: x.data.ups,
                   numberComments: x.data.num_comments,
                   after: x.data.after
                }));
            });
        }
    }catch(error) {
        console.log(error)
    }
}


export const search = async (search) => {
    const client_id = 'HrUdY-6cEl1IKCKNKMclXA'
    const client_pw = 'KoOTI0aRxn7UZoOqKGDog_XwqtCVFg'
    const basic = btoa(`${client_id}:${client_pw}`);
    var loginHeaders = new Headers();
    loginHeaders.append("Authorization", `basic ${basic}`);
    var loginFormData = new FormData();
    loginFormData.append('grant_type', 'client_credentials');
    var loginOptions = {
        method: 'POST',
        headers: loginHeaders,
        body: loginFormData,
        redirect: 'follow'
    };
    try {
        const login = await fetch("https://www.reddit.com/api/v1/access_token", loginOptions);
        if (login.ok) {
            const jsonResponse = await login.json()
            let token = await jsonResponse.access_token
            var myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            return fetch(`https://oauth.reddit.com/search?raw_json=1&q=${search}`, requestOptions
            ).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.data) {
                    return [];
                }
                return jsonResponse.data.children.map(x => ({
                    title: x.data.title,
                    subreddit: x.data.subreddit_name_prefixed,
                    thumbnail: x.data.thumbnail,
                    commentsLink: x.data.permalink,
                    media: x.data.media,
                    ups: x.data.ups,
                    numberComments: x.data.num_comments,
                    after: x.data.after,
                    author: x.data.author
                }));
            });
        }
    }catch(error) {
        console.log(error)
    }
}

export const subreddits = async (subreddits) => {
    const client_id = 'HrUdY-6cEl1IKCKNKMclXA'
    const client_pw = 'KoOTI0aRxn7UZoOqKGDog_XwqtCVFg'
    const basic = btoa(`${client_id}:${client_pw}`);
    var loginHeaders = new Headers();
    loginHeaders.append("Authorization", `basic ${basic}`);
    var loginFormData = new FormData();
    loginFormData.append('grant_type', 'client_credentials');
    var loginOptions = {
        method: 'POST',
        headers: loginHeaders,
        body: loginFormData,
        redirect: 'follow'
    };
    try {
        const login = await fetch("https://www.reddit.com/api/v1/access_token", loginOptions);
        if (login.ok) {
            const jsonResponse = await login.json()
            let token = await jsonResponse.access_token
            var myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            try {
                const response = await fetch(`https://oauth.reddit.com/r/${subreddits}?raw_json=1`, requestOptions);
                if (response.ok) {
                    const jsonResponse = await response.json()
                    console.log(jsonResponse.data.children)
                }
            }catch(error) {
                console.log(error)
            }
        }
    }catch(error) {
        console.log(error)
    }
}

export const subredditInfo = async (subreddits) => {
    const client_id = 'HrUdY-6cEl1IKCKNKMclXA'
    const client_pw = 'KoOTI0aRxn7UZoOqKGDog_XwqtCVFg'
    const basic = btoa(`${client_id}:${client_pw}`);
    var loginHeaders = new Headers();
    loginHeaders.append("Authorization", `basic ${basic}`);
    var loginFormData = new FormData();
    loginFormData.append('grant_type', 'client_credentials');
    var loginOptions = {
        method: 'POST',
        headers: loginHeaders,
        body: loginFormData,
        redirect: 'follow'
    };
    try {
        const login = await fetch("https://www.reddit.com/api/v1/access_token", loginOptions);
        if (login.ok) {
            const jsonResponse = await login.json()
            let token = await jsonResponse.access_token
            var myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            return fetch(`https://oauth.reddit.com/${subreddits}/about?raw_json=1`, requestOptions
            ).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse.data) {
                    return []
                }
                if (!jsonResponse.data.icon_img) {
                    return jsonResponse.data.community_icon
                }
                return jsonResponse.data.icon_img
            });
        }
    }catch(error) {
        console.log(error);
    }
}
