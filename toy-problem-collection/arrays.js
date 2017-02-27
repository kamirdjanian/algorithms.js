/**
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/** using extra memory */
function singleNumberV1(nums) {
  let storage = {};
  nums.forEach(num => {
    storage[num] ? storage[num] = 'duplicate' : storage[num] = 'unique';
  });
  for (let value in storage) {
    if (storage[value] === 'unique') return +value; 
  }
};

/** not using extra memory */
function singleNumberV2(nums) {
  
};

/** O(n) - traverses array twice */
function getMaxProfitV1(stockPricesYesterday) {
  let maxNumAtIndex = 0;
  let minNumAtIndex = 0;
  for (let i = 1; i < stockPricesYesterday.length; i++) {
    if (stockPricesYesterday[i] > stockPricesYesterday[maxNumAtIndex]) maxNumAtIndex = i;
  }
  for (let i = 1; i < maxNumAtIndex; i++) {
    if (stockPricesYesterday[i] < stockPricesYesterday[minNumAtIndex]) minNumAtIndex = i;
  }
  return stockPricesYesterday[maxNumAtIndex] - stockPricesYesterday[minNumAtIndex];
};

/** greedy - O(n) time - traverses array once */
function getMaxProfitV2(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) throw new Error('Getting a profit requires at least 2 prices');
  
  let minPrice = stockPricesYesterday[0];
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  for (let i = 1; i < stockPricesYesterday.length; i++) {
    let currentPrice = stockPricesYesterday[i];

    /** potential profit if we bought at min and sold at current price */
    let potentialProfit = currentPrice - minPrice;

    /** update max profit if we can do better */
    maxProfit = Math.max(maxProfit, potentialProfit);

    /** update min price to be lowest we've seen so far AFTER updating max profit */
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
};

/** greedy - O(n) time & O(n) space */
function getProductsOfAllIntsExceptAtIndex(array) {
  if (array.length === 1) throw new Error('Getting products requires at least 2 integers');

  let productsOfAllIntsExceptAtIndex = [];
  let productSoFar = 1;

  for (let i = 0; i < array.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= array[i];
  }

  productSoFar = 1;

  for (let j = array.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= array[j];
  }

  return productsOfAllIntsExceptAtIndex;
};