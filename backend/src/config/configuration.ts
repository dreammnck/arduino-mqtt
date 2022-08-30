export default () => ({
  port: Number(process.env.PORT) || 8080,
  host: process.env.HOST || '127.0.0.1',
  mqtt_url: process.env.MQTT_URL,
});
