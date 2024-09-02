import { forgetPassword, getLogo, isUserAvailable, signin, signup } from "../../controller/login/loginController";
import express from "express";

const router = express.Router();

router.post("/signin", signin);
router.post('/signup', signup);
router.post('/forgetPassword', forgetPassword);
router.post('/isUserAvailable', isUserAvailable)
router.get('/getLogo/:cn', getLogo)

export default router;