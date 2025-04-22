function showDetails(a, b, c) {
    let name = "";
    let age = 0;
    let available = false;
  
    const arr = [a, b, c];
  
    for (let item of arr) {
      if (typeof item === "string") {
        name = item;
      } else if (typeof item === "number") {
        age = item;
      } else if (typeof item === "boolean") {
        available = item;
      }
    }
  
    const status = available ? "available" : "not available";
    console.log(`Hello ${name}, your age is ${age} and you are ${status}`);
  }
  
  
  showDetails("Mohamed", 20, true);
  showDetails(20, "Mohamed", true);
  showDetails(false, 20, "Mohamed");
  

  