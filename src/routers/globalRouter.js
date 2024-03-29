import express from 'express';
import routes from '../routes';
import passport from 'passport';
import { home, search } from '../controllers/videoControllers';
import { 
    getJoin, 
    postJoin, 
    login, 
    logout, 
    getLogin,
    postLogin,
    githubLogin,
    githubLoginCallback,
    postGitHubLogin,
    getMe,
    facebookLogin, 
    postFacebookLogin,
} from '../controllers/userControllers';
import { onlyPublic, onlyPrivate } from '../middlewares';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
    routes.gitHubCallback, 
    passport.authenticate('github', { failureRedirect: '/login' }),
    postGitHubLogin,
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
    routes.facebookCallback, 
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    postFacebookLogin,
)

export default globalRouter;