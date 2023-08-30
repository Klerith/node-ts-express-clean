import { ContactDto } from '../dtos/contact.dto';
import { ContactEntity } from '../entities/contact.entity';



export abstract class ContactsRepository {

  abstract getContacts(): Promise<ContactEntity[]>;
  abstract getUserByEmail( email: string ): Promise<ContactEntity | undefined>;
  abstract createContact( contact: ContactDto ): Promise<ContactEntity | undefined>;

}