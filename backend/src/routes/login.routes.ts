import { Router } from "express";


const loginRouter = Router();


loginRouter.get("/", (request, response) => {

    const user = request.body;


})


export default loginRouter;