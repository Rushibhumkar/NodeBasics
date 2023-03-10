module.exports = reqFilter = (req, res, next) => {
  // first way to use reqfilter
  // console.log('Permission granted')
  // next();
  // second way to use reqfilter
  if (!req.query.age) {
    res.send("Please Provide age");
    //write age in searchbar of browser age=39 then we will show this error
  } else if (req.query.age < 18) {
    res.send("You r under aged");
  } else {
    // the below next function is mandatory for call
    next();
  }
};
