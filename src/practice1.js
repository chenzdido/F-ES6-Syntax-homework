const parseData=(input) => {
  var keys =[];
  var output=[];
  for(let key of input.column){
    keys.push(key.name);
  }
  for(let value of input.data){
    let ob={};
    for(let i = 0 ; i < value.length; i++){
      ob[keys[i]]=value[i]
    }
    output.push(ob);
  }
  return output;
}
export { parseData };
