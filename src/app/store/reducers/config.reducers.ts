import { IConfigState, initialConfigState } from '../state/config.state';
import { EConfigActions, ConfigActions} from '../actions/config.actions';

export const configReducer = (state = initialConfigState, action: ConfigActions): IConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            };
        }

        default:
            return state;
    }
};

