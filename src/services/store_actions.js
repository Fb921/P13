
export const loggedIn = {type:"loggedIn"};

export const loggedOut = {type:"loggedOut"};

export const setNames = (fn,ln)=>({type:"setNames",payload:{fname:fn,lname:ln}});

export const isLogged = (t,fn,ln)=>({type:"isLogged",payload:{token :t,fname:fn,lname:ln}});