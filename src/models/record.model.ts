import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Record extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  nivel: number;

  @property({
    type: 'string',
    required: true,
  })
  puntaje: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  usuarioId: number;

  @property({
    type: 'number',
    required: true,
  })
  segundos: number;

  @property({
    type: 'boolean',
  })
  finalizado?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Record>) {
    super(data);
  }
}

export interface RecordRelations {
  // describe navigational properties here
}

export type RecordWithRelations = Record & RecordRelations;
