class User {

    async getUsers(req, res) {
        const users = await req.context.models.User.find()
        return res.send(users)
         
    }

    async fetchUser(req, res) {
        const user = await req.context.models.User.findById(req.params.userId)

        return res.send(user)
    }

    async registerUser(req, res) {
        try {
            const { username, email, password } = await req.body

            if (!(username && email && password)) {
                res.status(400).send("All input is required")
              }
            

            const oldUser = req.context.models.User.findOne({ email })

            if (oldUser) {
                return res.status(409).send("User Already Exists. Please Login")
              }

            encryptedPassword = await bcrypt.hash(password, 10)

            const user = await User.create({
                username,
                email: email.toLowerCase(), // sanitize: convert email to lowercase
                password: encryptedPassword,
              })

            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.JWT_SECRET,
                {
                     expiresIn: '30d',
                }
              )
            
            // save user token
            user.token = token

            res.status(201).json(user)
        
        } catch (error) {
            console.log(error)
        }

    }

    async loginUser(req, res) {
        
    }

  
}


export default User