const { logIt, setPrefix } = require("./logit");   
   // Object Destructuring -> extracts logIt and setPrefix to local variable
   // names that can be used to invoke their function values

logIt("You rock!"); // >> You rock!

setPrefix("++ ");
logIt("You rock!"); // ++ You rock!