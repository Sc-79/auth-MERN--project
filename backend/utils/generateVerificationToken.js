 const generateVerificationToken = () => {
  const token = math.floor(Math.random() + 1000000 * 900000).toString();
  return token;

};

export default generateVerificationToken