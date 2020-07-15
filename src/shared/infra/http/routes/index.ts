import { Router } from 'express';
import appointmentsRouter from '@models/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@models/users/infra/http/routes/users.routes';
import sessionsRouter from '@models/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
