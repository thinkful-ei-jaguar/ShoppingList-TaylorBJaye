const knex = require('knex');
require('dotenv').config();
const ShoppingService = require('../src/shopping-list-service');

describe(`Shopping list service object`, function() {
    let db;

    let testItems = [
        {
            id: 1,
            name: 'Test Item 1',
            price: 13.10,
            category: 'Main',
            checked: false,
            date_added: new Date('2029-01-22T16:28:32.615Z')
        },
        {   
            id: 2,
            name: 'Test Item 2',
            price: 6.50,
            category: 'Lunch',
            checked: true,
            date_added: new Date('2029-01-20T16:28:32.615Z')
        },
        {
            id: 3,
            name: 'Test Item 3',
            price: 1.25,
            category: 'Snack',
            checked: false,
            date_added: new Date('2029-01-19T16:28:32.615Z')
        }
    ]    

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    before(() => {
        return db
            .into('shopping_list')
            .insert(testItems)
    })
   
   after(() => db.destroy())

 describe(`getAllListItems`, () => {
     it.skip('resovles all list items from shopping_list', () => {
         return ShoppingService.getAllListItems(db)
            .then(actualItems => {
                expect(actualItems).to.equal(testItems)
            })
     })
 })
})