import { Router } from 'express'
import { ContactRoutes } from './contacts';


export class AppRoutes {
  

  static get routes(): Router {
    
    const router = Router();

    router.use('/contacts', ContactRoutes.routes );
    
    // router.use('/students', studentRoutes);
    // router.use('/classes', classRoutes);

    return router;
  }
}
  