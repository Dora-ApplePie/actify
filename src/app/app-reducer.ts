export type RequestStatusType = 'loading' | 'succeeded' | 'idle' | 'failed'

export type InitialStateType = {
    initialized: boolean;
    status: RequestStatusType;
    error: string | null;
};

const initialState: InitialStateType = {
    initialized: false,
    status: 'loading' as RequestStatusType,
    error: null,
};

export const appReducer = (state: InitialStateType = initialState, action: AppActionType,
): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED':
            return {...state, initialized: true};
        case 'APP/SET-ERROR':
            return {...state, error: action.error};
        default: {
            return state;
        }
    }
};

//types
export type AppActionType =
    | ReturnType<typeof initializedAC>
    | ReturnType<typeof setAppErrorAC>

//actions
export const initializedAC = () =>
    ({type: 'APP/INITIALIZED'} as const);
export const setAppErrorAC = (error: string | null) =>
    ({type: 'APP/SET-ERROR', error} as const);
