import express, { type Router } from 'express';

interface StartOptions {
  port: number;
  routes: Router;
}



export class Server {

  private app = express();

  public async start(options: StartOptions) {

    this.setupMiddlewares();
    
    // console.log( 'Server started' );

    // this.app.get('/', (req, res) => {
    //   res.status(300).json({
    //     message: 'Hello world',
    //   })
    // });

    
    this.app.use(options.routes);


    this.app.listen( options.port, () => {
      console.log(`Server listening on port ${options.port}`);
    });

  }

  private setupMiddlewares() {
    this.app.use(express.json());
  }


}