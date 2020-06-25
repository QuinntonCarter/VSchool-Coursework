/*
// for(int 1 = 0; x < 100; x++) {
//     prinIn(x);
// }
*/
for (var x = 0; x <= 100; x++)
{
  if (x%2 === 0) 
  {
    console.log(x+ " even");
  }
  else if (x%1 === 0) 
  {
    console.log(x+ " odd");
  }
  else
  {
    console.log(x);
  }
}