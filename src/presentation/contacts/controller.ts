import type { Request, Response } from 'express';
import { ContactDto, ContactsRepository, CreateContact, GetContacts } from '../../domain';



export class ContactController {

  // DI
  constructor(
    private readonly contactRepository: ContactsRepository,
  ) {}

  public getContacts = async( req: Request, res: Response ) => {


    new GetContacts( this.contactRepository )
      .execute()
      .then( contacts => res.json( contacts ) )
      .catch( error => res.status(500).json({ error: error.message }) );
    // return res.json( contacts );

    // const contacts = await this.contactRepository.getContacts();
    // return res.json( contacts );
    // return res.json([
    //   { id: 1, name: 'John Doe' },
    //   { id: 2, name: 'Jane Doe' },
    // ])
  }

  public createContact = ( req: Request, res: Response ) => {
    try {

      const contactDto = new ContactDto( req.body );
      
      
      // new CreateContact( this.contactRepository )
      //   .execute( contactDto )
      //   .then( contact => res.json( contact ) )
      //   .catch( error => res.status(500).json({ error: error.message }) );
      

    } catch (error) {
      return res.status(400)
        .json({ error: `${error}` });
    }

    // const contact = this.contactRepository.createContact( contactDto );
    // return res.json( contact );
    // return res.json({
    //   message: 'Contact created',
    //   data: { id: 3, name: 'JoJo' }
    // });
  }

}