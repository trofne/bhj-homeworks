$(".products").on("click", ".product__add", function (e) {
  e.preventDefault(); // отменяем стандартное поведение ссылки

  var $product = $(this).closest(".product"); // находим родительский элемент товара
  var productId = $product.data("id"); // получаем id товара
  var productTitle = $product.find(".product__title").text(); // получаем название товара
  var productImage = $product.find(".product__image").attr("src"); // получаем путь к изображению товара
  var productCount = $product.find(".product__quantity-value").text(); // получаем количество товара

  var cartProductTemplate =
    '<div class="cart__product" data-id="' +
    productId +
    '">' +
    '<img class="cart__product-image" src="' +
    productImage +
    '">' +
    '<div class="cart__product-count">' +
    productCount +
    "</div>" +
    "</div>"; // создаем шаблон товара в корзине

  var $cartProducts = $(".cart__products"); // находим контейнер для товаров в корзине

  var $existingCartItem = $cartProducts.find(
    '.cart__product[data-id="' + productId + '"]'
  ); // проверяем, есть ли уже такой товар в корзине
  if ($existingCartItem.length) {
    // если есть, то увеличиваем количество
    var existingProductCount = parseInt(
      $existingCartItem.find(".cart__product-count").text()
    );
    var newProductCount = existingProductCount + parseInt(productCount);
    $existingCartItem.find(".cart__product-count").text(newProductCount);
  } else {
    // если нет, то добавляем новый товар в корзину
    $cartProducts.append(cartProductTemplate);
  }
});
