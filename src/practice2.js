const inject = (items, sections) =>{
  for(let i = 0 ; i < sections.length; i++){
    // TODO 这样做需要保证sections顺序按照index排序才不会有错
    items.splice(sections[i].index+i,0,sections[i].content)
  }
  return items;
}
export { inject };
