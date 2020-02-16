import { SampleService } from './sample.service';
export declare class SampleController {
    private readonly sampleService;
    constructor(sampleService: SampleService);
    getSample(): string;
    postSample(req: any): any;
}
