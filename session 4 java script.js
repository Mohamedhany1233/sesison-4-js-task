var arrobject = [
  {
      title : 'product mohamed',
      description : "product one description",
      price : '30'
  },
  {
      title : 'product',
      description : "product two description",
      price : '76'
  },
  {
      title : 'product three',//length 12
      description : "product three description",//length 24
      price : '90'
  },
  {
      title : 'product four',
      description : "product four description",
      price : '90'
  }
]
var text = prompt('enter the text')
var data = arrobject.filter(function(item){
 
  if (item.title.includes(text))
   {
      document.write('this is includes');
      return data
   }
   if (item.description.includes(text))
      {
         document.write('this is includes');
         return data
      }
      else
      {
          document.write('undefind')
      }
})
console.log(data);
