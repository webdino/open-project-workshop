function spaces(n){
  let result = "";
  while(n > 0){
    result += "  ";
    n--;
  }
  return result;
}

function traverse(node, level){
  for(let child of node.children){
    console.log(spaces(level) + child.tagName);
    if(child.children.length > 0){
      traverse(child, level + 1);
    }
  }
}

function main(){
  traverse(document, 0);
}

main();
