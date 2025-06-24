import express from 'express'
import { ContactUs } from '../../services/auth/index.js';
 

const router=express.Router();
router.post("/contact_us",ContactUs)
export default router