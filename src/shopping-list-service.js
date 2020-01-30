const ShoppingService = {
    getAllListItems (knex) {
        return knex.select('*').from('shopping_list')
    }




}

module.exports = ShoppingService;