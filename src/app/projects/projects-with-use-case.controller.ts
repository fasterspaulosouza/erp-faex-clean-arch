import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FindAllProjectsUseCase } from './use-cases/find-all-projects.use-case';

@Controller('projects')
export class ProjectsWithUseCaseController {
  
  @Inject(FindAllProjectsUseCase)
  private readonly findAllProjectsUseCase: FindAllProjectsUseCase;

  // @Post()
  // create(@Body() createProjectDto: CreateProjectDto) {
  //   return this.projectsService.create(createProjectDto);
  // }

  @Get()
  findAll() {
    return this.findAllProjectsUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.projectsService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
  //   return this.projectsService.update(id, updateProjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.projectsService.remove(id);
  // }
}
