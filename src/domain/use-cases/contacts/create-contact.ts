import { ContactDto } from '../../dtos/contact.dto';
import { ContactEntity } from '../../entities/contact.entity';
import { ContactsRepository } from '../../repositories/contact.repository';

interface CreateContactUseCase {
  execute: ( contactDto: ContactDto ) => Promise<ContactEntity|undefined>
}


export class CreateContact implements CreateContactUseCase{

  constructor(
    private readonly contactRepository: ContactsRepository,
  ){}

  async execute( contactDto: ContactDto ): Promise<ContactEntity|undefined>{
    
    const contactExists = await this.contactRepository.getUserByEmail( contactDto.email );
    if ( contactExists ) {
      throw new Error('Contact already exists');
    }
    
    const contact = await this.contactRepository.createContact( contactDto );
    return contact;
  }

}