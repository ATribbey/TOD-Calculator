const calculateTod = (alt, desiredAlt, rateOfDescent, groundSpeedKn) => {
  const altToLose = alt - desiredAlt;

  let TOD = (altToLose / rateOfDescent) * (groundSpeedKn / 60);

  console.log(TOD);

  return TOD;
};
