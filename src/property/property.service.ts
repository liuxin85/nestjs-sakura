import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatepropertyDto } from './dto/updatePropety.dto';
import { PaginationDTO } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/constants';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}

  async findAll(paginationDTO: PaginationDTO) {
    return await this.propertyRepo.find({
      skip: paginationDTO.skip,
      take: paginationDTO.limit ?? DEFAULT_PAGE_SIZE,
    });
  }
  async findOne(id: number) {
    const property = await this.propertyRepo.findOne({
      where: {
        id,
      },
    });

    if (!property) throw new NotFoundException();
    return property;
  }

  async create(dto: CreatePropertyDto) {
    return await this.propertyRepo.save(dto);
  }

  async update(id: number, dto: UpdatepropertyDto) {
    return await this.propertyRepo.update({ id }, dto);
  }

  async delete(id: number) {
    return this.propertyRepo.delete({ id });
  }
}
