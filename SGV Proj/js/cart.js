window.onload = function(){
    // cartbox
    const iconShopping = document.querySelector('.iconShopping');
    const cartBox = document.querySelector('.cartBox');
    const cartCloseBtn = document.querySelector('.fa-close')
    iconShopping.addEventListener("click",function(){
        cartBox.classList.add('active')
    });
    cartCloseBtn.addEventListener("click",function(){
        cartBox.classList.remove('active')
    });

    // localstorage
    const addCartBtn = document.getElementsByClassName('addCart');
    let items = [];
    console.log(addCartBtn);
    for(let i=0; i<addCartBtn.length; i++){
        addCartBtn[i].addEventListener("click",function(e){
            if(typeof(Storage) !== 'undefined'){
                let item = {
                    id:i+1,
                    name:e.target.parentElement.children[0].textContent,
                    price:e.target.parentElement.children[1].children[0].textContent,
                    no:1

                };
                if(JSON.parse(localStorage.getItem('items')) === null){
                    items.push(item);
                    localStorage.setItem("items",JSON.stringify(item));
                    window.location.reload();
                }else{
                    const localItems =  JSON.parse(localStorage.getItem("items"));
                    localItems.map(data=>{
                        if(item.id == data.id){
                            item.no = item.no+1;
                            
                        }else{
                            items.push(data);
                        }
                    });

                    items.push(item);
                    localStorage.setItem('items',JSON.stringify(items));
                }

            }else{
                alert('storage working');
            }

        });

    }
    // adding data to shopping cart
    const iconShoppingS = document.querySelector('.iconShopping span');
    JSON.parse(localStorage.getItem('items')).map(data)
    
}
