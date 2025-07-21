fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    data.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>${product.price} грн</p>
      `;
      list.appendChild(div);
    });
  });