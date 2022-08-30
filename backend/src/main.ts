import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  const host = configService.get<string>('host');
  const mqttUrl = configService.get<string>('mqtt_url');

  const microserviceMqtt = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: mqttUrl,
    },
  });

  await app.startAllMicroservices();
  await app.listen(port, host);

  app.getUrl().then((url: string) => {
    console.log(`Application is running on ${url}`);
  });
}
bootstrap();
