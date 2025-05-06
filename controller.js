class Controller {
    static async login(req, res) {
        try {
            res.send("ini login")
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports  = Controller