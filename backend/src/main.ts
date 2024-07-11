import { AppFactory } from './modules/AppFactory';

(async () => {
  const app = await AppFactory.create();
  await app.listen(3000);
})();
