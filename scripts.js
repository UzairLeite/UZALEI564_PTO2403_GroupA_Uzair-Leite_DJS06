// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Exercise Solutions:

// 1. ForEach Basics
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

// 6. Finding 'S'
const hasSInName = names.map(name => name.includes('S'));
console.log(hasSInName);

// 7. Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercises:

// 1. Log Products
console.log(products.map(product => product.product).join(', '));

// 2. Filter by Name Length
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

// 3. Price Manipulation
const totalPrice = products
  .filter(product => product.price.trim() !== '')
  .reduce((sum, product) => sum + Number(product.price), 0);
console.log(totalPrice);

// 4. Concatenate Product Names
const concatenatedNames = products.reduce((acc, product) => `${acc}${product.product}, `, '').slice(0, -2);
console.log(concatenatedNames);

// 5. Find Extremes in Prices
const pricedProducts = products.filter(product => product.price.trim() !== '').map(product => ({
  ...product,
  price: Number(product.price)
}));
const highestPrice = Math.max(...pricedProducts.map(product => product.price));
const lowestPrice = Math.min(...pricedProducts.map(product => product.price));
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

// 6. Object Transformation
const transformedProducts = pricedProducts.reduce((acc, product) => {
  acc[product.product] = product.price;
  return acc;
}, {});
console.log(transformedProducts);
