import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.department.findMany();
  }

  async findOne(id: string) {
    const department = await this.prisma.department.findUnique({
      where: { id },
    });
    if (!department) {
      throw new NotFoundException(`Departamento com id ${id} não encontrado.`);
    }
    return department;
  }

  async create(data: CreateDepartmentDto) {
    return this.prisma.department.create({ data });
  }

  async update(id: string, data: UpdateDepartmentDto) {
    await this.findOne(id); // Garante que existe
    return this.prisma.department.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Garante que existe
    return this.prisma.department.delete({ where: { id } });
  }
}
