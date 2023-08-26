const show = (n) => {
    a=""
    for(let b=1;b<=n;b++){
        for(let i=1; i<=n; i++){
            a+=b.toString()
        }
        a+='\n'
    }
    console.log(a)
  };
  
  show(3);
  