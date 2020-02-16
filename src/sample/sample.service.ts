import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
    public getSample(): string {
        console.log('ser');
        return 'sample service!';
    }

    public postSample(param: any): any {
        return {message: 'OK', result: param};
    }
}
