class Session {

   async getUser(req,res) {
    const user = await req.context.models.User.findById(
        req.context.me.id,
      );
      return res.send(user)
    }
    
}


export default Session
