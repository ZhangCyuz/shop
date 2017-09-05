var secLeft = document.getElementById("sec-left");
var goods_id = $.getQueryString('goods_id');
shop.api.fetchGoodsDetail(goods_id, function(response) {
    // 处理返回的数据
  console.log(response);
  for (var i = 0; i < response.data.length; i++) {
		var obj = response.data[i];
    var oDiv = document.createElement("div");
		var oImgs = document.createElement("img");
    var price = document.createElement("em");
    price.innerText = obj.goods_name;
    oImgs.src = obj.goods_thumb;
    oDiv.appendChild(oImgs);
    var oP = document.createElement("p");
    oP.innerText = obj.goods_desc;
    oDiv.appendChild(oP);
    var oBtn = document.createElement("button");
    oDiv.appendChild(oBtn);
    oP.appendChild(price);
		secLeft.appendChild(oDiv);
		oBtn.innerText = '加入购物车';
    oBtn.onclick = function() {
      if (!localStorage.token) {
        location.href = 'login.html#callbackurl=' + location.href;
        return;
      }
      var goods_number = localStorage.getItem('cart' + goods_id);
      goods_number = goods_number ? parseInt(goods_number) + 1 : 1;
      $.ajax({
        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
        "type": "POST",
        "data": {
          "goods_id": goods_id,
          "number": goods_number
        },
        "dataType": "json",
        "success": function(response) {
          console.log(response);
          if (response.code == 0) {
            alert("添加购物车成功")
            location.href = 'cart.html';
          }else {
            alert("添加购物车失败");
          }
        }
      });
    }
	}
});
if (localStorage.getItem('token')) {
  $('#login1').html(localStorage.getItem('username'));
  // $('.head-nav-right').html('注销');
}
var logOut = document.getElementById("logout");
logOut.onclick = function(token) {
  if (localStorage.token) {
    localStorage.clear(token);
    console.log(1);
    location.href = "login.html";
  }
}
