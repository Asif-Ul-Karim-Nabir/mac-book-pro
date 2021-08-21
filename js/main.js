
// update extra product cost 
function updateMemoryCost(product, price, isAdd) {
    const extraProduct = document.getElementById(product + '-cost');
    let extraProductCost = extraProduct.innerText;
    if (isAdd == true) {
        extraProductCost = price;
    } else {
        extraProductCost = price;
    }
    extraProduct.innerText = extraProductCost;
    // update total 
    updateTotal()
}
// total amount section 
// get total 
function getTotal(price) {
    const total = document.getElementById(price + '-cost');
    const allTotal = parseInt(total.innerText);
    return allTotal;
}
// update total amount
function updateTotal() {
    const unchangedBestPrice = getTotal('unchanged')
    const extraMemory = getTotal('extra-memory');
    const extraStorage = getTotal('extra-storage');
    const extraDelivery = getTotal('delivery');
    const total = unchangedBestPrice + extraMemory + extraStorage + extraDelivery;
    document.getElementById('total-amount').innerText = total
    const disountTotal = unchangedBestPrice + extraMemory + extraStorage + extraDelivery;
    document.getElementById('discount-amount').innerText = disountTotal
}
// memory extra cost section 
// 8gb cost 
document.getElementById('8gb-cost').addEventListener('click', function () {
    updateMemoryCost('extra-memory', 0, true);
})
// 16gb cost 
document.getElementById('16gb-cost').addEventListener('click', function () {
    updateMemoryCost('extra-memory', 180, false);
})
// storage extra cost section 
// 256gb storage cost 
document.getElementById('256gb-ssd-cost').addEventListener('click', function () {
    updateMemoryCost('extra-storage', 0, true);
})
// 512gb storage cost 
document.getElementById('512gb-ssd-cost').addEventListener('click', function () {
    updateMemoryCost('extra-storage', 100, false);
})
// 1tb storage cost
document.getElementById('1tb-ssd-cost').addEventListener('click', function () {
    updateMemoryCost('extra-storage', 180, false);
})
// delivery extra cost 
// free delivery
document.getElementById('free-delivery-cost').addEventListener('click', function () {
    updateMemoryCost('delivery', 0, true);
})
// premium quick delivery
document.getElementById('premium-delivery-cost').addEventListener('click', function () {
    updateMemoryCost('delivery', 20, false);
})
// apply promo code for discount total 
// get discount
function getDiscount() {
    const promoInput = document.getElementById('promo-code-input');
    const promoCode = promoInput.value;
    promoInput.value = ''
    return promoCode;
}
// get promo discount
function getPromoDiscount() {
    const promoCode = getDiscount()
    const total = document.getElementById('discount-amount');
    const totalValue = total.innerText;
    if (promoCode == 'stevekaku') {
        const discount = totalValue * 0.2;
        const newDiscount = totalValue - discount;
        total.innerText = newDiscount;
        document.getElementById('promo-code-button').disabled = true;
    }
}