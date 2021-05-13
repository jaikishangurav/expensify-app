import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'demo_uid';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'dummy_uid' }, action);
    expect(state).toEqual({});
});