const show = (n) => {
    a=''
    for(let b =  1; b<=n ; b++){
    for(let i = 1 ; i<=n ; i++){
        if(b==i){
            a+='_'
        }
        else{
        a+='*'}
        
    }
    a+='\n'
    }
    console.log(a)
}
show(4)