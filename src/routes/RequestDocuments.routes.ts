import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import RequestDocuments from '../models/RequestDocuments';

const requestProcessRoutes = Router();

requestProcessRoutes.get('/', async (request: Request, response: Response) => {
  const requestRepository = getRepository(RequestDocuments);
  const requests = await requestRepository.find();
  return response.json(requests);
});

export default requestProcessRoutes;