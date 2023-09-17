export type CategoriesType = 'Гарячі чаї' | 'Гаряча кава' | 'Ледокава' | 'Гарячі напої' | 'Рефрешінг'

export interface ISizesType {
   id: number,
   title: string,
   size: string
}

export interface ICategory {
   id: number,
   title: CategoriesType,
   image: string
}

export interface IProduct {
   id: number,
   title: string,
   price: number,
   image: string,
   description: string,
   category: CategoriesType
}

export const ins: string[] = ['Вода', 'Без води', 'Світла вода', 'Додаткова вода']
export const espressoAndShotOptins: string[] = ['Фірмове смажене еспресо', 'Блондинка Еспресо Смажена', 'Смажене еспресо без кофеїну', '1/3 смаженого еспресо без кофеїну', '1/2 смаженого еспресо без кофеїну', '2/3 смаженого еспресо без кофеїну']

export const categories: ICategory[] = [
   {
      id: 1,
      title: 'Гарячі чаї',
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220411_ChaiLatte.jpg?impolicy=1by1_tight_288'
   },
   {
      id: 2,
      title: 'Гаряча кава',
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_tight_288'
   },
   {
      id: 3,
      title: 'Ледокава',
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220323_PumpkinCreamColdBrew-onGreen.jpg?impolicy=1by1_tight_288'
   },
   {
      id: 4,
      title: 'Гарячі напої',
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_SignatureHotChocolate.jpg?impolicy=1by1_tight_288'
   },
   {
      id: 5,
      title: 'Рефрешінг',
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20221216_FrozenPineapplePassionfruitRefresherLemonade.jpg?impolicy=1by1_tight_288'
   }
]

export const sizes: ISizesType[] = [
   {
      id: 1,
      title: 'Short',
      size: 's'
   },
   {
      id: 2,
      title: 'Tall',
      size: 'm'
   },
   {
      id: 3,
      title: 'Grande',
      size: 'l'
   },
   {
      id: 4,
      title: 'Venti',
      size: 'xl'
   }
]

export const products: IProduct[] = [
   {
      id: 1,
      title: 'Iced Black Tea Lemonade',
      price: 2.50,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedBlackTeaLemonade.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Premium black tea sweetened just right and shaken with ice to create an ideal iced tea—a rich and flavorful black tea journey awaits you.',
      category: 'Гарячі чаї'
   },
   {
      id: 2,
      title: 'Chai Tea Latte',
      price: 2.4,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220411_ChaiLatte.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Black tea infused with cinnamon, clove and other warming spices is combined with steamed milk and topped with foam for the perfect balance of sweet and spicy. An iconic chai cup.',
      category: 'Гарячі чаї'
   },
   {
      id: 3,
      title: 'Chai Tea',
      price: 2,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190628%20ChaiBrewedTea.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Black tea infused with warm clove, cardamom, cinnamon and ginger notes. A bold, distinctive chai tea.',
      category: 'Гарячі чаї'
   },
   {
      id: 4,
      title: 'Caffè Americano',
      price: 3.4,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.',
      category: 'Гаряча кава'
   },
   {
      id: 5,
      title: 'Caffè Misto',
      price: 3.2,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.',
      category: 'Гаряча кава'
   },
   {
      id: 6,
      title: 'Caffè Misto',
      price: 3.2,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.',
      category: 'Гаряча кава'
   },
   {
      id: 7,
      title: 'Cappuccino',
      price: 3.5,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_Cappuccino.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.',
      category: 'Гаряча кава'
   },
   {
      id: 8,
      title: 'Cinnamon Caramel Cream Cold Brew',
      price: 4.3,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20221014_CinnamonCaramelCreamColdBrew.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Starbucks® Cold Brew is sweetened with Cinnamon Caramel Syrup and topped with a cinnamon caramel cold foam and a dusting of cinnamon dolce topping for a special treat.',
      category: 'Ледокава'
   },
   {
      id: 9,
      title: 'Chocolate Cream Cold Brew',
      price: 4,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211217_ChocolateCreamColdBrew.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Starbucks® Cold Brew sweetened with vanilla syrup and topped with a silky, chocolaty cream cold foam.',
      category: 'Ледокава'
   },
   {
      id: 10,
      title: 'Salted Caramel Cream Cold Brew',
      price: 5.1,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211029_SaltedCaramelCreamColdBrew.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Here\'s a savory-meets-sweet refreshing beverage certain to delight: our signature, super-smooth cold brew, sweetened with a touch of caramel and topped with a salted, rich cold foam.',
      category: 'Ледокава'
   },
   {
      id: 11,
      title: 'Starbucks Reserve® Cold Brew',
      price: 4.4,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190607_ReserveColdBrew-onGreen.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Our Starbucks Reserve® Cold Brew—a nuanced, smooth cup of coffee, perfect over ice—is extraordinarily uplifting in a bold form.',
      category: 'Ледокава'
   },
   {
      id: 12,
      title: 'White Hot Chocolate',
      price: 3.4,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190624_WhiteHotChocolate.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'A traditional hot chocolate beverage made with white chocolate sauce and steamed milk, topped with whipped cream.',
      category: 'Гарячі напої'
   },
   {
      id: 13,
      title: 'Caramel Apple Spice',
      price: 3,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190624_CaramelAppleSpice.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Steamed apple juice complemented with cinnamon syrup, whipped cream and a caramel sauce drizzle.',
      category: 'Гарячі напої'
   },
   {
      id: 14,
      title: 'Steamed Apple Juice',
      price: 3.1,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190624%20SteamedAppleJuice.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Freshly steamed 100% apple juice (not from concentrate). Feel the apple goodness in this classic fruit drink that will soothe and embolden your day.',
      category: 'Гарячі напої'
   },
   {
      id: 15,
      title: 'Pumpkin Spice Crème',
      price: 3.2,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190716_PumpkinSpiceCreme.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'We combine steamed milk with flavors of pumpkin, cinnamon, nutmeg and clove, then top it all off with whipped cream to create this amazing, coffee-free fall favorite.',
      category: 'Гарячі напої'
   },
   {
      id: 16,
      title: 'Frozen Pineapple Passionfruit Lemonade',
      price: 4,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20221216_FrozenPineapplePassionfruitRefresherLemonade.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Tropical flavors of pineapple and passionfruit blended with real diced pineapple, strawberry puree and lemonade for a refreshingly frozen, vibrant escape in a cup.',
      category: 'Рефрешінг'
   },
   {
      id: 17,
      title: 'Frozen Strawberry Açaí Lemonade',
      price: 4.2,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20221216_FrozenStrawberryAcaiRefresherLemonade.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Sweet strawberry flavors and tropical açaí notes blended with real strawberry pieces, strawberry puree and lemonade for a refreshingly frozen, vibrant escape in a cup.',
      category: 'Рефрешінг'
   },
   {
      id: 18,
      title: 'Paradise Drink Beverage',
      price: 3.9,
      image: 'https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211217_ParadiseDrink.jpg?impolicy=1by1_wide_topcrop_630',
      description: 'Tropical flavors of pineapple and passionfruit combine with diced pineapple and creamy coconutmilk to create a delicious island escape.',
      category: 'Рефрешінг'
   }
]