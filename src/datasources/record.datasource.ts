import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'record',
  connector: 'mongodb',
  url: 'mongodb+srv://erickAyestas:mascotas98@cluster0.8pp8k.mongodb.net/Prueba',
  host: '27017',
  port: NaN,
  user: 'erickAyestas',
  password: 'mascotas98',
  database: 'record',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RecordDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'record';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.record', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
