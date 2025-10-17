import { Controller, Get, Res } from '@nestjs/common';
import { register } from 'prom-client';
import express from 'express';

@Controller('metrics')
export class MetricsController {
  @Get()
  async getMetrics(@Res() res: express.Response): Promise<void> {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  }
}
