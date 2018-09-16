const validation = {
    validateEmail(email) {
        const reg = /\S+@\S+\.\S+/;
        const validatedEmail = reg.test(email);
        if (!validatedEmail) { return ''; }
        return email;
    },
    validateName(name) {
        const reg = /^[a-z ,.'-]+$/i;
        const validatedName = reg.test(name);
        if (!validatedName) { return ''; }
        return name;
    },
    isFutureDate(date) {
        const today = new Date();
        return new Date(date) >= today;
    }
}

export default validation;