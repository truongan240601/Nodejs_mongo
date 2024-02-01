const Course = require('../models/Course')
const {muntipleMongooseToObject} = require('../../util/mongoose')

class SiteController {

    //[GET] /
    index(req, res, next) {
        //res.render('home')
        Course.find({})
            .then(courses => {
                res.render("home", {courses:muntipleMongooseToObject(courses) })
            })
            .catch(next)


    }

    //[GET] / search
    search(req, res) {
        res.send("search")
    }
}

module.exports = new SiteController;