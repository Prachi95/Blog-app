import AppConstants from "../AppConstants";

export function isLoggedIn() {
    return localStorage.getItem(AppConstants.JWT_KEY) != undefined
}

