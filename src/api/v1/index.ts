import { Router } from 'express';
import user from './routes/user'

export default () => {
	const app = Router();
    user(app);
	return app
}