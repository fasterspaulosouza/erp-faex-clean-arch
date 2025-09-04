import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectsWithUseCaseController } from './projects-with-use-case.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [
    // ProjectsController,
    ProjectsWithUseCaseController
  ],
  providers: [ProjectsService],
})
export class ProjectsModule {}
