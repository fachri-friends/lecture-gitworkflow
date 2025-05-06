const router = require("express").Router()
const Controller = require('../controller')

router.get("/", (req, res) => {
  res.send("nicee")
})
router.get("/login", Controller.login)

module.exports = router
