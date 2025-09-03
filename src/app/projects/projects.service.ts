import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepo: Repository<Project>
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }

  async findAll() {
    return this.projectRepo.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
