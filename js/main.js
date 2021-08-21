
// update memory cost 
function updateMemoryCost(product, price, isAdd) {
    const extraProduct = document.getElementById(product + '-cost');
    let extraProductCost = extraProduct.innerText;
    if (isAdd == true) {
        extraProductCost = price;
    } else {
        extraProductCost = price;
    }
    extraProduct.innerText = extraProductCost;
    // const totalAmount = document.getElementById('total-amount');
    // totalAmount.innerText = 
}
// memory extra cost section 
// 8gb cost 
document.getElementById('8gb-cost').addEventListener('click', function () {
    updateMemoryCost('extra-memory', 0, true);
})
// 16gb cost 
document.getElementById('16gb-cost').addEventListener('click', function () {
    updateMemoryCost('extra-memory', 80, false);
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
// quick delivery
document.getElementById('premium-delivery-cost').addEventListener('click', function () {
    updateMemoryCost('delivery', 20, false);
})