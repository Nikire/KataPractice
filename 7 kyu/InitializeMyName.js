/* 
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name){
  let destructured = name.split(" ");
  if (destructured.length >= 3){
    let newName = "";
    destructured.forEach((word,pos) => {
      if (pos == 0){
        newName += word;
      }else if(pos ==  destructured.length - 1){
        newName += " " + word;
      }else{
        word = word.substring(0,1) + ".";
        newName += " " + word;
      }
    })
    return newName;
  }
  return name;
}