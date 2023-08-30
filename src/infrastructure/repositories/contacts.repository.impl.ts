import { ContactDto, ContactEntity, ContactsDataSource, ContactsRepository } from '../../domain';



export class ContactRepositoryImpl implements ContactsRepository {
  
  constructor(
    private readonly contactDatasource: ContactsDataSource,
  ) {}
  getUserByEmail( email: string ): Promise<ContactEntity | undefined> {
    return this.contactDatasource.getUserByEmail( email );
  }


  async getContacts(): Promise<ContactEntity[]> {
    return this.contactDatasource.getContacts();
  }

  async createContact( contact: ContactDto ): Promise<ContactEntity|undefined> {
    return this.contactDatasource.createContact( contact );
  }

}