import { envs } from './config/envs';
import { MongoDatabase } from './data/mongo';
import { MongoContactsDatasource } from './infrastructure';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';



(async()=> {
  main();
})();


async function main() {

  await MongoDatabase.connect({
    mongoURL: envs.MONGO_URL,
    mongoDBName: envs.MONGO_DB_NAME,
  });


  const server = new Server();
  const routes = AppRoutes.routes;
  
  server.start({
    port: envs.PORT,
    routes: routes,
  });
}