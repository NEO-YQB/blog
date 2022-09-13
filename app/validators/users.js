exports.create =(request)=>{

    const errors = []
    if (request.full_name === "") {
        errors.push('نام کاربری الزامی است');
    }
    if (request.email === "") {
        errors.push('ایمیل الزامی است');
    }
    if (request.password === "") {
        errors.push('پسورد الزامی است');
    }
    return errors;
}