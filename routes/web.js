import express from 'express'
const router = express.Router()
import {indexController} from '../controllers/indexController.js'
import {categoryController} from '../controllers/categoryController.js'
import {postController} from '../controllers/postController.js'
import {searchController} from '../controllers/searchController.js'
import {newsletterController} from '../controllers/newsletterController.js'
import {weeklyController} from '../controllers/weeklyController.js'
import { pagenotfoundController } from '../controllers/pagenotfoundController.js'
import { aboutController } from '../controllers/aboutController.js'
import { sitemapController } from '../controllers/sitemapController.js'
import { robotController } from '../controllers/robotController.js'
import { jobaajtimesController } from '../controllers/jobaajtimesController.js'
import { jobaajtimesMagController } from '../controllers/jobaajtimesMagController.js'
import { jobaajtimesMag2Controller } from '../controllers/jobaajtimesMag2Controller.js'//this is only for nov 23 edition
// import { unsubLetterController } from '../controllers/unsubLetterController.js'
// import { feedbackController } from '../controllers/feedbackController.js'



router.get('/', indexController)
router.get('/about', aboutController)

router.get('/category/:id', categoryController)
router.get('/category/:id/:page', categoryController)

router.get('/post/:postname', postController)
router.get('/post/:cat_slug/:postname', postController)

router.get('/search/:searchtext', searchController)
router.get('/search/:searchtext/:page', searchController)

router.get('/newsletter/:newsletter', newsletterController)

router.get('/weekly-digest', weeklyController)
router.get('/weekly-digest/:page', weeklyController)

router.get('/sitemap.xml', sitemapController)
router.get('/jobaajtimes', jobaajtimesController)
router.get('/jobaajtimes/magazine/:edition', jobaajtimesMagController)

router.get('/jobaajtimes/magazine2/:edition', jobaajtimesMag2Controller)//this is only for nov 23 edition

router.get('/robots.txt', robotController)

// router.get('/unsubscribe/:unsubscribe_email', unsubController) jobaajtimes
// router.get('/unsubscribe_letter/:u', unsubLetterController)
// router.get('/feedback', feedbackController)


// ye last mai renhenge ! Kripya dhayn rakhe🙏
router.get('/:postname', postController)
router.get('/:cat_slug/:postname', postController)

router.get('*', pagenotfoundController)




export default router
