const inject = (items, sections) =>{
  for(let i = 0 ; i < sections.length; i++){
    items.splice(sections[i].index+i,0,sections[i].content)
  }
  return items;
}
export { inject };
