import { Controller, Get } from "@nestjs/common";
@Controller('/app')
export class AppController{
@Get('/hi')
    getRootRoute(){
        return "hi there!"
    }
@Get('bye')
    byeRoute(){
        return "bye there!"
    }
}