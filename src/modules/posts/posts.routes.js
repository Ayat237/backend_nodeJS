import { Router } from "express";
import * as PC from "./posts.controller.js";


const router = Router();

router.route("/").post(PC.addPost).get(PC.getPost).put(PC.updatePost).delete(PC.deletepost)
//router.route("/:id").delete(PC.deletepost)
//router.post("/",PC.addPost)


export default router;