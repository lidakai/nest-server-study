import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/favicon.ico')
  getIco() {
    return 'http://oss.wanfengblog.com/FuUTgnwXeVkXKVmzRSSr6MM94kRz';
  }
}
