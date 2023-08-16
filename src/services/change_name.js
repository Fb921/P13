async function changeName(token,fn,ln){
    let b = JSON.stringify({firstName:fn,lastName:ln});
    return fetch("http://localhost:3001/api/v1/user/profile",
                 {method:"PUT",body:b,headers:{"Content-Type":"application/json",Authorization:'Bearer '+token}})
           .then(e=>e.json());
}

export default changeName;