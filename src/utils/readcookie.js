function readcookie(key) {
    const cookieRegEx = new RegExp(`(?<=${key}=)[^;]*`);
    try {
        let token = document.cookie.match(cookieRegEx)[0];
        console.log("readcookie>>",token);
        return token;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default readcookie;