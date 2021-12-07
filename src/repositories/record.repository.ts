import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RecordDataSource} from '../datasources';
import {Record, RecordRelations} from '../models';

export class RecordRepository extends DefaultCrudRepository<
  Record,
  typeof Record.prototype.id,
  RecordRelations
> {
  constructor(
    @inject('datasources.record') dataSource: RecordDataSource,
  ) {
    super(Record, dataSource);
  }
}
