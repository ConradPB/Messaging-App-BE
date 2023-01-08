class User {

    getUsers(req,res) {
        return res.send(Object.values(req.context.models.users))
    }

    fetchUser(req,res) {
        return res.send(req.context.models.users[req.params.userId])
    }

    createUser(req,res) {
        return res.send('POST HTTP method on user resource')
    }
}


export default User