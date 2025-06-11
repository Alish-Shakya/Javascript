// scope
//{} = block

// {
//   let a = 10;
//   console.log(a);
// }
// let a = 1;
// console.log(a);
// a variable will be known within its own block from the line where it is defined

{
  // parent block

  let a = 1;
  console.log(a);
  {
    // child block
    console.log(a);
  }
  console.log(a);
}
// when a variable is called, first
//  it search its own blockif variable is not find in that blockthen it will search it in parent block

{
  let a = 1;
  {
    let a = 10;
  }
}
// a variable can not be redefined in same block but you can redefine same variable in different block.
