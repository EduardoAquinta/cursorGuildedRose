class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items=[]){
      this.items = items;
    }
    updateQuality() {
      this.items.forEach(item => {
        if (item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.sellIn < 11) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
               }
            }
          }
          if (item.sellIn < 0) {
            item.quality = 0;
          }
        } else if (item.name == 'Conjured Mana Cake') {
          if (item.quality > 0) {
            item.quality = item.quality - 2;
          }
        } else if (item.name != 'Sulfuras, Hand of Ragnaros') {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        }
  
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.sellIn = item.sellIn - 1;
        }
      });
  
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    Shop
  }