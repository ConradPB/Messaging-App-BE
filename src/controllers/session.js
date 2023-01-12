class Session {

    getUser(req,res) {
        return res.send(req.context.models.User[req.context.me.id])  

    }
    
}


export default Session
