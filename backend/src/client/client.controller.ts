import { Controller } from "@nestjs/common";
import { Ctx, MessagePattern, MqttContext, Payload } from "@nestjs/microservices";


@Controller()
export class ClientController {

    constructor() {};

    @MessagePattern('test')
    test(@Payload() data: boolean, @Ctx() context: MqttContext) {
    console.log(`data ${data}`);
}

}