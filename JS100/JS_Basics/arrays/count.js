let scores = [96, 47, 113, 89, 100, 102];

let bighund = 0
scores.forEach(function(num) {
  if (num >= 100) {
    bighund += 1
  }
})

console.log(bighund);