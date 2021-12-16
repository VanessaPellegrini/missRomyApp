import { Router } from 'express';

const contactController = require('../controllers/contact')
const router = Router();

router.route('/')    
    .get()
    .post(contactController.post)
    .put()
    .delete()

module.exports = router;
