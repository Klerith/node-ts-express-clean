interface Props {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}



export class ContactEntity {

  public id: string;
  public name: string;
  public email: string;
  public createdAt: Date;


  constructor( props: Props ) {
    this.validateProps( props );
    
    const { id, name, email, createdAt } = props;
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }


  validateProps( props: Props ) {
    const { id, name, email, createdAt } = props;
    if ( !id || !name || !email || !createdAt ) {
      throw new Error(`Invalid props`);
    }
  }
}
