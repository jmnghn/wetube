import express from 'express';
import routes from '../routes';
import { users, 
    userDetail, 
    getEditProfile, 
    getChangePassword, 
    postChangePassword, 
    postEditProfile,
} from '../controllers/userControllers';
import { onlyPrivate, uploadAvatar } from '../middlewares';

const userRouter = express.Router();

userRouter.get("/", users);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;