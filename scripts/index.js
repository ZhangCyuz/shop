var goods_id = $.getQueryString('goods_id');
shop.api.fetchHotGoods(function(response){
	for (var i = 0; i < response.data.length; i++) {
    var obj = response.data[i]
	  var oLs = document.createElement('li');
	  var oA = document.createElement('a');
	  oA.className = 'oA';
	  oA.href = "ShopingDetail.html?goods_id=" + obj.goods_id;
	  var text = document.createElement("p");
	  var price = document.createElement("a")
	  text.innerText = obj.goods_name;
	  price.innerText = obj.price;
	  var oImgs = document.createElement("img");
	  oImgs.src = obj.goods_thumb;
    Att.appendChild(oA);
	  oA.appendChild(oLs);
	  oLs.appendChild(oImgs);
	  oLs.appendChild(text);
	  oLs.appendChild(price);
  }
});

if (localStorage.getItem('token')) {
  $('#login1').html(localStorage.getItem('username'));
}
var logOut = document.getElementById("logout");
logOut.onclick = function(token) {
  if (localStorage.token) {
    localStorage.clear(token);
    console.log(1);
    location.href = "login.html";
  }
}
