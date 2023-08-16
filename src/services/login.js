async function login(userEmail,userPass){
    let creds = {email:userEmail,password:userPass};
    return fetch('http://localhost:3001/api/v1/user/login',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(creds)}).then(e=>e.json()).then(response=>{
            if(response.status == 200){
                window.localStorage.setItem("token",response.body.token);
            }else{
                window.localStorage.removeItem('token');
            }
            return response.status;
        });
}

export default login;