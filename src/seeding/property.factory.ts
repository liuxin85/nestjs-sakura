import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';
import { Property } from '../../src/property/entities/property.entity';

export const PropertyFactory = setSeederFactory(Property, (faker: Faker) => {
  const property = new Property();

  property.name = faker.location.street();
  property.price = faker.number.int({ min: 10000, max: 10000000 });
  property.description = faker.lorem.sentence();

  return property;
});
