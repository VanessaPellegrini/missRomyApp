import { Router } from 'express';

const contactRoutes = require('./contact');
const router = Router();

router.use('/contacto', contactRoutes);

module.exports = router;


