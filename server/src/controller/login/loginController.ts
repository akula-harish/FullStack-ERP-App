export const signin = (req:any, res:any) => {
    console.log(req.body);
    const {username, password} = req.body;
    res.send({username: username, password:password});
}

export const signup = (req:any, res:any) => {
    
}

export const forgetPassword = (req:any, res:any) => {

}

export const isUserAvailable = (req: any, res:any) => {

}

export const getLogo = (req: any, res:any) => {
    console.log(req.params);
    res.send(req.params);
}