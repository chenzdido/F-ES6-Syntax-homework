// TODO 使用解构的方式取出data与column
const parseData=(input) => {
  // TODO 没有必要声明keys
  var keys =[];
  // TODO 使用map做数组与数组的转化，不用声明output
  var output=[];
  // TODO 没有必要声明keys及以下内容
  for(let key of input.column){
    keys.push(key.name);
  }
  for(let value of input.data){
    let ob={};
    // TODO 可以使用其他非for循环形式
    for(let i = 0 ; i < value.length; i++){
      ob[keys[i]]=value[i]
    }
    output.push(ob);
  }
  return output;
}
export { parseData };
