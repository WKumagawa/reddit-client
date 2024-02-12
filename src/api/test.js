const clientId = 'HrUdY-6cEl1IKCKNKMclXA';
const clientPw = 'KoOTI0aRxn7UZoOqKGDog_XwqtCVFg';
const basic = btoa(`${clientId}:${clientPw}`);
const Login = {
    login() {
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
        return fetch('https:www.reddit.com/api/v1/access_token', loginOptions
        ).then(response => {response.json()});
    },
};
const token = Promise.resolve(Login.login())

const Reddit = {
    popular() {
        var myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        myHeaders.append("Cookie", "csv=2; edgebucket=0o6R2BILYSco0yWoOx; loid=000000000tqabpxwo3.2.1707346576990.Z0FBQUFBQmx4QXE0YjVNMnFRUU5qVVBIMFhacXhEWjlTdkx6UjdvdFcxQmJ0aWJqWkFBek0xdjN3UFduNmhobjBCOU1ZMEJlVUYtcW1nMzVhaFp6cUZvX3AwQ0JXeG5aTm9hcFdUMDdQaEg0V3pFelNNYndLYy1KT0p1b1plQmVneU9NUHRGYkJhS1c; session_tracker=cmccpeklieqmbdaghn.0.1707346616219.Z0FBQUFBQmx4QXE0blphVzBPN2NoUWpjSDhtbWlwUnA1bG8tNHdtMms0WDdDelROak5WM2NUSEdkWjNZck55RzBxbnNUNms2eUt6MHgyYnotUkdrSmlkSktJM0Voc0o2MmxlZklUR3pMenlmVDRVWlFobmlHQlF3T0lMYkczZnNYNzg0WDZYV2VaRVg");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch('https://oauth.reddit.com/r/popular?raw_json=1', requestOptions)
        .then(response => response.json())
        .then(jsonResponse => jsonResponse.data.children.map(data => ({
            title: data.title,
        }))) ;
    },
};

export default Reddit;