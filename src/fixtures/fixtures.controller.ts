import { Controller, Get } from '@nestjs/common';
import { FixturesService } from './fixtures.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Fixtures')
@Controller('fixtures')
export class FixturesController {
  constructor(private readonly fixturesService: FixturesService) {}
  @Get()
  excuteFixture() {
    return this.fixturesService.runFixture();
  }
}
