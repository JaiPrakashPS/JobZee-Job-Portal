export const sendToken = (user, statusCode, res, message) => {

  const token = user.getJWTToken();

  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), 
    httpOnly: true, // Make sure the cookie is accessible only via HTTP requests for security
  };
  console.log(options);
  

  res.status(statusCode)
    .cookie("token", token, options) 
    .json({
      success: true,
      user,
      message,
      token,
    });
};
