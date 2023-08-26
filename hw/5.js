const show = (n) => {
    a = "";

    for(let i = 1 ; i <= (n * n) ; i++){
        a += i.toString()
        if(i % n == 0){
            a += '\n'
        }
    }
    console.log(a)
  };

show(3);