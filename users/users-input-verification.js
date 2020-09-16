module.exports = {
    isValid,
};
  
function isValid(user) {
    return user.username && user.password && user.department && typeof user.password === "string" ? true : false
}
  