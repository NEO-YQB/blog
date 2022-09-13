exports.create =(request)=>{

    const errors = []
    if (request.title === "") {
        errors.push('عنوان الزامی است');
    }
    if (request.slug === "") {
        errors.push('نامک الزامی است');
    }
    if (request.content === "") {
        errors.push('محتوا الزامی است');
    }
    return errors;
}