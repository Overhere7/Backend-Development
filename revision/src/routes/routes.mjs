import express from 'express';
import { findStudent,createdStudent } from '../controllers/fstController.mjs';
const router = express.Router();
router.get('/findStudent',findStudent)
router.post('/addStudent',createdStudent)
export default router;
