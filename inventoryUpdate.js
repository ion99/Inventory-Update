function updateInventory(arr1, arr2) {
  if (arr2.length === 0){
    return arr1;
  }  
  let obj1 = arr1.reduce(function(acc, curr){
    acc[curr[1]] = curr[0];
    return acc;
  }, {});
  
  let obj2 = arr2.reduce(function(acc, curr){
    acc[curr[1]] = curr[0];
    return acc;
  }, {});
  
  for (let k in obj2){
    if (obj1.hasOwnProperty(k)){
      obj1[k] += obj2[k]; 
    } else {
      obj1[k] = obj2[k];
    }
  }
  
  let arr = [];
 
  for (let k in obj1){
    arr.push([k.slice(0,1), obj1[k], k]);
  
  }
  
  arr.sort();
  
  arr.forEach(function(val){
    val.shift();
  });
  
  return arr;
  
}