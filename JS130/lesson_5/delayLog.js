function delayLog() {
  let time = 1000;
  for (let start = 1; start <= 10; start++) {
    setTimeout(() => {console.log(start)}, time);
    time += 1000;
  }
}

delayLog();