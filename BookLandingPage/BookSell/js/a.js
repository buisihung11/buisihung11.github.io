var checkBox = document.querySelectorAll("label input");
var a,b;
var remove_btn ;
var bookListContainer = $(".checkout__summary tbody");
var contentView = $(".grid-container")

var nbItem = 0;
var totalPay = 0;
//get the search value
var search_holder = $("input.search_holder");
var search_trigger = $(".fi-search");

search_trigger.click(function(){
	contentView.children().remove();
	contentView.addClass('content--loading');
	let select = $("#search_choose").val();
	console.log(select)
	let name = search_holder.val();
	if(name.length >= 4){

		
		setTimeout(function(){
			contentView.removeClass('content--loading');
			
			searchBy(name,select)
		},500)
	}
})
$("#search_choose").change(function(){
	search_trigger.click();
})
function searchBy(name,select){
	name = name.replace(" ","+");
	var url;
	if(select == null || select == "All"){
		url = `https://www.googleapis.com/books/v1/volumes?q=${name}&key=AIzaSyDZYySHVY2bMT9EGcY2g-CYsBJQembjQ0k`;
	}
	if(select == "By Title"){
		url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${name}&key=AIzaSyDZYySHVY2bMT9EGcY2g-CYsBJQembjQ0k`;
	}
	if(select == "By Author"){
		url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${name}&key=AIzaSyDZYySHVY2bMT9EGcY2g-CYsBJQembjQ0k`;
	}
	
	$.ajax({
            
            type: 'GET',
            url: url,
            success: function (data1, status, XHR) {
                getData(data1.items)
            
            }
        });
	
}


function getData(items){
	
	items.forEach(item => {
		
		var book_Id = item.id;
		var book_Img = item.volumeInfo.hasOwnProperty("imageLinks")?item.volumeInfo.imageLinks.thumbnail : "images/1.png";
		var book_Title = item.volumeInfo.title;
		var book_author = item.volumeInfo.hasOwnProperty("authors") ? item.volumeInfo.authors[0] : "Unknown"
		var book_price = item.saleInfo.hasOwnProperty("listPrice") ?  item.saleInfo.listPrice.amount : "Out of sold" ;
	var book = `<div class="product ${item.saleInfo.hasOwnProperty("listPrice") ? "" : "product_sold_out"}" id="${book_Id}">
	<div class="product_info">
		<img src="${book_Img}" class="product_img">
		<h2 class="product_title">${book_Title}</h2>
		<h3 class="product_author">${book_author}</h3>
		<span class="product_price">${book_price} VND</span>
		<button class="cart_btn" data-id="${book_Id}">
		<i class="fi fi-shopping-basket-add"></i>
		<span class="cart_text">Add To Cart</span>
		</button>
		<label>
			<input class="add_btn" type="checkbox" data-onHand="${item.saleInfo.hasOwnProperty("listPrice") ? true : false}">
			<i class="fi fi-plus-a"></i>
			<i class="fi fi-check"></i>
			<span class="add_text" >Add to List</span>
		</label>
	</div>
</div>`
	contentView.append(book);
	
	})
	contentView.css("border", "1px solid #CCC")
	starAnimation();
	// function for + btn
	a = $("label input");
	b = $(".cart_btn");
	
	b.click(function(){
		let book_id = "#" + $(this).attr('data-id')
		let target_trigger = contentView.find(book_id).find('input');
		target_trigger.trigger("click");
	})
	a.click(function(event){
		let index = a.index(this);
		
		if(isOnHand(this)=="false"){//check xem sp nay con hay khong

			$(".product").eq(index).css('box-shadow', '0 0 0 4px #f65353')
			$(".product").eq(index).find('.product_price').css("color","#f65353");
			setTimeout(function(){
				$(".product").eq(index).find('.product_price').css("color","#797BED");
				$(".product").eq(index).css('box-shadow', '0 0 0 0px #f65353')},450)
		}
		else{
				let checked = this.checked;
				$(".fi-plus-a").eq(index).toggleClass("fi-plus-a-hidden")
				$(".fi-check").eq(index).toggleClass("fi-check-show")
				$(".product").eq(index).toggleClass("product_selecected")
				//kiem tra xem la add hay remove
				if(checked == true){
					addBookItem($(".product").eq(index))
				}
				else{
					removeBookItem($(".product").eq(index).attr('id'))
				}
		}
		
});
}
function updateData(){
	$(".checkout__text__price .price").html(totalPay + " VND")
	$(".checkout__count").html(nbItem)
}


function isOnHand(input){
	
	let result = $(input).attr('data-onHand');
	return result;
}
function addBookItem(book){
	nbItem++;
	let book_id = book.attr('id');
	let book_title = book.find(".product_title").html();
	let book_img = book.find(".product_img").attr('src');
	let book_author = book.find(".product_author").html();
	let book_price = book.find(".product_price").html();
	let book_describe = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
	var content = `<div class="cart-item" id="${book_id}">
				<img src="${book_img}">
				<p class="book-title">${book_title}</p>
				<p class="book-author">${book_author}</p>
				<p class="describe">${book_describe}</p>
				<p class="price">${book_price}</p>
				<button class="remove-cart-item">
					<i class="fi fi-close-a remove-btn" id="${book_id}"></i>
				</button>
			</div>`;
	var content1 = 
	`<tr id="${book_id}">
		<td>${book_title} <span class="book_author">${book_author}</span></td>
		<td>1</td>
		<td class="item_price">${book_price}</td>
		<td><button class="checkout__action"><i class="icon fa fa-trash" id="${book_id}" onclick="removeTrigger(this.id)"></i></button></td>
	</tr>`		
	totalPay += parseFloat(book_price.replace("VND",""))
	updateData();
	bookListContainer.append(content1);		


}//end function
//remove button

function removeTrigger(book_id){
	//add event listener
	
	if(contentView.find("#" + book_id).length>=1){
		console.log("Bam nut ao")
		let target_trigger = contentView.find("#" + book_id).find('input');
		target_trigger.trigger("click");//ckick the button virutally
	}else{
		console.log("Tu xoa")
		removeBookItem(book_id)
	}
}
function removeBookItem(book_id){
	nbItem--;
	
	let book_price = bookListContainer.find("#" + book_id).find(".item_price").html().replace("VND","")
	totalPay -= parseFloat(book_price);
	updateData();
	bookListContainer.find("#" + book_id).remove();
}



$("a.checkout__button").click(function(){
	$(".checkout_container").addClass("checkout-active");	
})


$(".checkout__close i").click(function(){
	$(".checkout_container").removeClass("checkout-active ");
})

$("i.watch_cart_btn").click(function(){
	bookListContainer.toggleClass('bookListCart_show');
	
})


$(".search_holder").keyup(function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    search_trigger.click();
  }
});

$("#search input").focus(function(){
	$(this).parent().parent().css("top","3em")
})




function starAnimation(){

	let products = $(".grid-container .product");
	
	$.each(products,function(index,product){
		$(product).css("animation-delay", `${(index+1)*100-50}ms`);
	})
	$.each(products,function(index,product){
		$(product).addClass("product_show");
	})
}

