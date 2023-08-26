const show = (n) => {
    a = "";

    for(let i = n * n ; i >= 1 ; i--){
        a += i.toString()
        if(i % n == 1){
            a += '\n'        
        }
    }
    console.log(a)
  };

show(3);