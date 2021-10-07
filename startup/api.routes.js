import router from '../router';
import express from 'express';
import errors from '../middlewares/errors';
import morgan from 'morgan';

const { authRouter, autreRessource } = router;

export default (app, logger) => {
  app.use(morgan('combined', { stream: logger.stream })); //framawork pour des logs
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(errors(logger));
  app.use('/api/auth', authRouter); 
  app.use('/api/autre', autreRessource);
};
