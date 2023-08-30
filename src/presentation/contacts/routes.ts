import { Router } from 'express';
import { ContactController } from './controller';
import { ContactRepositoryImpl } from '../../infrastructure/repositories/contacts.repository.impl';
import { MongoContactsDatasource } from '../../infrastructure';
import { ContactsRepository } from '../../domain';




export class ContactRoutes {


  static get routes(): Router {

    const router = Router();
    const datasource = new MongoContactsDatasource();
    const repository = new ContactRepositoryImpl( datasource );
    const controller = new ContactController( repository );


    router.get( '/', controller.getContacts );
    router.post( '/', controller.createContact );

    // router.route( '/' )
    //   .get( controller.getContacts )
    //   .post( controller.createContact );

    return router;
  }


}