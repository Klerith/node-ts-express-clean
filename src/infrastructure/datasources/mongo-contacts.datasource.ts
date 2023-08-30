import { ContactModel } from '../../data/mongo';
import { ContactDto, ContactEntity, ContactsDataSource } from '../../domain';



export class MongoContactsDatasource implements ContactsDataSource {
  
  async getUserByEmail( email: string ) {
    
    const contact = await ContactModel.findOne({ email });
    if ( !contact ) {
      return undefined;
    }

    return new ContactEntity({ ...contact.toJSON(), id: contact.id });
  }


  async getContacts(): Promise<ContactEntity[]> {
    const contactsMongo = await ContactModel.find();

    const contacts = contactsMongo.map( contactMongo => new ContactEntity({
      id: contactMongo.id,
      name: contactMongo.name,
      email: contactMongo.email,
      createdAt: contactMongo.createdAt
    }));

    return contacts;
  }


  async createContact( contactDto: ContactDto ): Promise<ContactEntity> {
    const contactMongo = await ContactModel.create(contactDto);
    
    const newContact = new ContactEntity({
      ...contactMongo,
      id: contactMongo.id,
      createdAt: contactMongo.createdAt,
    });

    return newContact;
  }

}