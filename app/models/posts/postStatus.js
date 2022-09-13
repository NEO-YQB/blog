const postStatus = {
    DRAFT: 0,
    REVIEW: 1,
    PUBLISHED: 2
};
exports.statuses = () => {
    return postStatus;
}
exports.readableStatuses = () => {
    return {
        [postStatus.DRAFT]: ' پیش نویس',
        [postStatus.REVIEW]: ' در حال بررسی',
        [postStatus.PUBLISHED]: ' منتشر شده'
    };
}