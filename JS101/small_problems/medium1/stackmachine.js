function minilang(program) {
  let stack = [];
  let register = 0;
  program.split(" ").forEach(token => {
    switch (token) {
      case "ADD":
        register += stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "REMAINDER":
        register = Math.floor(register % stack.pop());
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "PUSH":
        stack.push(register);
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  });
  return register;
}