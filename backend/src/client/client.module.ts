import { ClientController } from './client.controller';
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";



@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SENSOR_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://localhost:1883',
        }
      },
    ]),
  ],
  controllers: [ClientController]
})
export class ClientModule {}