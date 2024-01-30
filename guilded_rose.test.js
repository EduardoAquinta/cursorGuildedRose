const { Item, Shop } = require('./guilded_rose');

describe('Gilded Rose', () => {
  it('should correctly update the quality of items', () => {
    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Conjured Mana Cake', 3, 6),
    ];
    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();

    expect(updatedItems[0].quality).toBe(19);
    expect(updatedItems[1].quality).toBe(1);
    expect(updatedItems[2].quality).toBe(6);
    expect(updatedItems[3].quality).toBe(80);
    expect(updatedItems[4].quality).toBe(21);
    expect(updatedItems[5].quality).toBe(4);
  });
});
