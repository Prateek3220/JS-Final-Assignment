$(function() {

    $.ajax({
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product',
        type: 'GET',
        contentType: 'application/json',
        success: function(res){
            console.log(res);
            if(res){
                let clothsHTML = '';
                let accessoriesHTML = '';
                for(var i=0; i<res.length; i++){
                    if(res[i].isAccessory){
                        accessoriesHTML += `<div class="card">
                            <a href="/product/detailView.html?id=${res[i].id}">
                            <img src="${res[i].preview}" alt="${res[i].name}">
                            </a>
                            <div id="productDetails">
                                <h4>${res[i].name}</h3>
                                <h5>${res[i].brand}</h5>
                                <p>${res[i].price}</p>
                            </div>
                        </div>`;
                    }else{
                        clothsHTML += `<div class="card">
                            <a href="/product/detailView.html?id=${res[i].id}">
                            <img src="${res[i].preview}" alt="${res[i].name}">
                            </a>
                            <div id="productDetails">
                                <h4>${res[i].name}</h3>
                                <h5>${res[i].brand}</h5>
                                <p>Rs ${res[i].price}</p>
                            </div>
                        </div>`;
                    }
                }

                $("#ClothingCards").append(clothsHTML);
                $("#AccessoriesCards").append(accessoriesHTML);
            }
            
        },
        error: function(err){
            console.log("Error", err);
        }
    });

    // Add to cart count
    function addToCardCount(){
        let total = 0;
        let addToCartItemCount = localStorage.getItem('addToCart')?JSON.parse(localStorage.getItem('addToCart')):[];
        for (let i = 0; i < addToCartItemCount.length;i++){
            total += addToCartItemCount[i].total;
        }
        $("#addCartCount").text(total);
    }
    addToCardCount();
});