function kitchen(ing1, ing2, chefcb){
    return chefcb(ing1, ing2);
  }
  
  function pastaChef(ing1, ing2){
    return `I took ${ing1} and ${ing2} and I made you a 🍝`;
  }
  
  function pizzaChef(ing1, ing2){
     return `I took ${ing1} and ${ing2} and I made you a 🍕`;
  }

 console.log(kitchen('dough', 'sauce', pizzaChef));
 console.log(kitchen('dough', 'sauce', pastaChef));