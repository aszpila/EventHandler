import {
    TOGGLE_POPUP,
} from '../actions/ui';

const initialState = {
    isPopupOpen: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_POPUP: {
            return Object.assign({}, state, {
                isPopupOpen: !state.isPopupOpen,
            });
        }
        default: return state;
    }
};
