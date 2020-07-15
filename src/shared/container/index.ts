import { container } from 'tsyringe';
import '@models/users/infra/providers';
import '@shared/providers';

import IAppointmentRepository from '@models/appointments/repositories/IAppointmentRepository';
import AppointmentRepository from '@models/appointments/infra/typeorm/repositories/AppointmentRepository';
import UserRepository from '@models/users/infra/typeorm/repository/UserRepository';
import IUserRepository from '@models/users/repositories/IUserRepository';

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  AppointmentRepository
);

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);
