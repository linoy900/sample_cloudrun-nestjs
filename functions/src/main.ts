import { NestFactory } from '@nestjs/core';
import { AssessmentModule } from './assessment/assessment.module';
import { LeadGenerationModule } from './lead-generation/lead-generation.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as functions from 'firebase-functions/v2';
import { Logger } from '@nestjs/common';

async function createNestApp(module: any, name: string) {
  const app = await NestFactory.create(module);
  app.enableVersioning(); // Enable API versioning
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use((req, res, next) => {
    Logger.log(
      `Incoming Request: ${req.method} ${req.url}`,
      'RequestLogger123',
    );
    Logger.log(`Headers: ${JSON.stringify(req.headers)}`, 'RequestLogger456');
    next();
  });
  const basePath = `http://localhost:5000/xxxx/us-central1/${name}`;
  const options = new DocumentBuilder()
    .setTitle('apis')
    .setDescription('The backend description')
    .setVersion('1.0')
    .addServer(basePath) // Explicitly set the server base URL
    .addApiKey({ type: 'apiKey', name: 'api-key', in: 'header' }, 'api-key')

    .build();
  if (process.env.ENVIRONMENT !== 'prod') {
    const document = SwaggerModule.createDocument(app, options);
    console.log('document', document);
    SwaggerModule.setup(
      name === 'redFunction' ? 'api/redFunction' : 'api/blueFunction',
      app,
      document,
    );
  }
  await app.init();
  return app.getHttpAdapter().getInstance();
}

export const redFunction = functions.https.onRequest(async (req, res) => {
  const app = await createNestApp(AssessmentModule, 'redFunction');
  app(req, res);
});

export const blueFunction = functions.https.onRequest(async (req, res) => {
  const app = await createNestApp(LeadGenerationModule, 'blueFunction');
  app(req, res);
});
