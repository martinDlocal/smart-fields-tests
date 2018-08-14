
module.exports = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, n);
    })
}