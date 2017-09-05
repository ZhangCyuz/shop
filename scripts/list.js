var cat_id = $.getQueryString('cat_id');
	 shop.api.fetchGoodsListByCatId(cat_id, function(response) {
					if (response.data.length === 0) {
			      var oH1 = document.createElement('h1');
			      oH1.innerText = "当前分类下面没有商品";
			      Att.appendChild(oH1);
			      return;
			    }
          //处理返回的数据
					for (var i = 0; i < response.data.length; i++) {
						var obj = response.data[i];
						var oLs = document.createElement('li');
						var oA = document.createElement('a');
						oA.className = 'oA';
						oA.href = "ShopingDetail.html?goods_id=" + obj.goods_id;
						var text = document.createElement("p");
						var price = document.createElement("a");
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
