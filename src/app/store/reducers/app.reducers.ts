import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { userReducers } from './user.reducers';
import { configReducer } from './config.reducers';

import { IAppState } from '../state/app.state';

export const appReducer: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducer
};
