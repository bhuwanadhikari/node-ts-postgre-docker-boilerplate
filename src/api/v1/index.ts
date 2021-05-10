import { Router } from 'express';
import auth from './routes/auth.router';
import user from './routes/user.router';

export default () => {
	const app = Router();
    auth(app);
    user(app);
	return app
}