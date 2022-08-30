import { ConfigService, ConfigModule } from '@nestjs/config';
import { ClientController } from './client.controller';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'SENSOR_SERVICE',
        useFactory: (configService: ConfigService) => {
          const mqttUrl = configService.get<string>('mqtt_url');
          return {
            transport: Transport.MQTT,
            options: {
              url: mqttUrl,
            },
          };
        },
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  controllers: [ClientController],
})
export class ClientModule {}
