import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class User {


    async fetchUser(req,res) {
      const user = await req.context.models.User.findById(req.params.UserId)
      return res.send(user)
}

    async fetchUsers(req,res) {
    const users = await req.context.models.User.find()

    return res.send(users)
}


    async registerUser(req, res) {
        try {
            const { username, email, password } = await req.body

            if (!(username && email && password)) {
                res.status(400).send("All input is required")
              }
            

            const oldUser = await req.context.models.User.findOne({ email })

            if (oldUser) {
                return res.status(409).send("User Already Exists. Please Login")
              }

            const encryptedPassword = await bcrypt.hash(password, 10)

            const user = await req.context.models.User.create({
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
      try {
        const { email, password } = req.body

        if (!(email && password)) {
          res.status(400).send("All input is required")
        }

        const user = await req.context.models.User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {

          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_SECRET,
            {
              expiresIn: "20d",
            }
          )
          user.token = token

          res.status(200).json(user)
        } else {

        res.status(400).send("Invalid Credentials")
      }


      } catch (error) {
        console.log(error)
      }
       
  }


   
  
}

export default User