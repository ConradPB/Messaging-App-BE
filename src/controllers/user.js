class User {

    async getUsers(req,res) {
        const users = await req.context.models.User.find()
        return res.send(users)
         
    }

    async fetchUser(req,res) {
        const user = await req.context.models.User.findById(req.params.userId)

        return res.send(user)
    }

  
}


export default User