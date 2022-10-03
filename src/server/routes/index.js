import express from 'express';
import BlogPageController from '../controllers/blogPagesController';
import ListViewController from '../controllers/listViewController';

const router = express.Router();
router.get('/blogPages', BlogPageController);
router.get('/listView', ListViewController);
router.get('/', (req, res) => {
    res.send({});
});
export default router;
