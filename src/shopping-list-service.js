const ShoppingService = {
  getAllListItems (knex) {
    return knex.select('*').from('shopping_list');
  },

  insertShoppingItem(knex, newShoppingItem) {
    return knex
      .insert(newShoppingItem)
      .into('shopping_list')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  }


};

module.exports = ShoppingService;