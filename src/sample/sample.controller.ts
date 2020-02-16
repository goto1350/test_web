import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req} from '@nestjs/common';
import {SampleService} from './sample.service';

@Controller('sample')
export class SampleController {
    constructor(private readonly sampleService: SampleService) {}

    @Get()
    public getSample(): string {

        console.log('get');
        return this.sampleService.getSample();
    }

    @Post()
    @HttpCode(201)
    public postSample(@Req() req): any {
        console.log('post');
        return this.sampleService.postSample(req.body);
    }
}