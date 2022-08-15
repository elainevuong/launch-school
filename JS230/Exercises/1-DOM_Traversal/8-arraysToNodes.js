/*
Implement a function that converts a nested array of nodeNames 
(see Nodes to Array exercise for examples) to nodes. Go over the 
sample code and the corresponing return values below as a guide 
for what you will implement.

const nodes =
["BODY", [
  ["HEADER", []],
  ["MAIN", []],
  ["FOOTER", []]]]


arrayToNodes(nodes)

<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>

The solution uses a recursive approach since there is a good fit 
going with the nested structure of the nodes. The challenge with any 
recursive approach is thinking about the base/stopping condition and 
the process towards getting to the base case. 

For this problem, the "base case" is when a parent has no children 
and the "working towards the base case" is the process of successively 
— via recursive calls to arrayToNodes — converting an array to nodes 
by creating an element from the parent node.
*/

function arrayToNodes(nodes) {
  const parent = document.createElement(nodes[0]); 
  const children = nodes[1];

  if (children.length === 0) {
    return parent;
  } else {
    for (let index = 0; index < children.length; index++) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }

  return parent;
}