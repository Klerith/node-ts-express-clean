import { ContactEntity } from '../../entities/contact.entity';
import { ContactsRepository } from '../../repositories/contact.repository';

interface GetContactsUseCase {
  execute: () => Promise<ContactEntity[]>
}


export class GetContacts implements GetContactsUseCase{

  constructor(
    private readonly contactRepository: ContactsRepository,
  ){}

  async execute(): Promise<ContactEntity[]>{
    const contacts = await this.contactRepository.getContacts();
    return contacts;
  }

}