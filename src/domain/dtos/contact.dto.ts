
interface Props {
  id?: string;
  name: string;
  email: string;
  createdAt?: Date;
}


export class ContactDto {

  name: string;
  email: string;

  constructor( props: Props ) {
    const { name, email } = this.validate( props );
    this.name = name;
    this.email = email;
  }

  validate( options: Props ) {
    if ( !options.name ) {
      throw new Error( 'Name is required' );
    }
    if ( !options.email || RegExp( '/.+@.+/' ).test( options.email ) ) {
      throw new Error( 'Email is required and must be valid' );
    }

    if ( options.createdAt ) {
      options.createdAt = new Date( options.createdAt );
    }

    return options;
  }

}