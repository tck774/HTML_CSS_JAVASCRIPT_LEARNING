const show = (n) => {
    let text = "";
    let left = n;
    
    let number = 1;
    for (let rows = 1; rows <= n * 2 - 1; rows++) {
      for (let cols = 1; cols <= n; cols++) {
        if (cols >= left) {
          // range print number
          text += number.toString();
          number++;
        } else {
          text += "-";
        }
      } // end loop cols
      if (rows < n) {
        left--;
        
      } else {
        left++;
        
      }
      text += "\n";
    }
    console.log(text);
  };
  
  show(2);
  show(3);
  show(4);