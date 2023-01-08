class Session {

    getUser(req,res) {
        return res.send(req.context.models.users[req.context.me.id])  

    }
    
}


export default Session
