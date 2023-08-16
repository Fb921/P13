async function authentify(){
    return fetch("http://localhost:3001/api/v1/user/profile",
                 {method:"POST", headers:{"Content-Type":"application/json",Authorization:'Bearer '+window.localStorage.getItem('token')}})
           .then(e=>e.json());
}

export default authentify;