import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import OrphanagesControlllers from './controllers/OrphanagesControllers';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControlllers.index);
routes.get('/orphanages/:id', OrphanagesControlllers.show);
routes.post('/orphanages', upload.array('images'),OrphanagesControlllers.create);

export default routes;