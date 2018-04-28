import $ from 'jquery';

export const UPDATE_USER = 'users: updateUser';
export const SHOW_ERROR = 'users: showError';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: { user: 'Error' }
    }
}

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: 'http://google.com',
            success() {
                console.log('success');
            },
            error() {
                console.log('error');
                dispatch(showError());
            }
        })
    }
}