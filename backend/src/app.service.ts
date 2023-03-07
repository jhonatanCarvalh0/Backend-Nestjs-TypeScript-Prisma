import { Injectable } from '@nestjs/common';

//Return the text 'Hello world!' at http://localhost:3000
@Injectable()
export class AppService {
  getHello(): string {
    const text = 'Hello World!';
    return `<h1 style='color: red'>${text}</h1>`;
  }
}
