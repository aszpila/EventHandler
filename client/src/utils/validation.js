const validation = {
    validateEmail(email) {
        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
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