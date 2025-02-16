const sampleRecipe = [
  {
    id: "49f66812-4a45-45cf-96a1-c301974d2e7a",
    imgSrc:
      "https://www.seriouseats.com/thmb/KOV3OvnLeh6RW64lEnRixbRxOq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-QiAi-stir-fried-lo-mein-noodles-pork-vegetables-recipe-hero-a55a4baa9f22449fbe036142f1047430.jpg",
    title: "Stir Fried Noodles",
    description:
      "A quick and tasty stir-fried noodle recipe packed with veggies and savory sauce.",
    ingredients: [
      "Egg noodles",
      "Soy sauce",
      "Garlic cloves",
      "Carrots",
      "Bell peppers",
      "Sesame oil",
      "Green onions",
    ],
    steps: [
      "Cook the egg noodles according to package instructions.",
      "Stir-fry garlic, carrots, and bell peppers in sesame oil.",
      "Add cooked noodles and soy sauce, tossing until combined.",
      "Garnish with green onions and serve.",
    ],
  },
  {
    id: "6ccaf2f3-df23-4d12-b8eb-568a33bea758",
    imgSrc:
      "https://www.sweetashoney.co/wp-content/uploads/Sauteed-Eggplant-2.jpg",
    title: "Seared Eggplant",
    description:
      "This seared eggplant dish is perfect for a light and flavorful vegetarian meal.",
    ingredients: [
      "Eggplant",
      "Olive oil",
      "Garlic cloves",
      "Lemon juice",
      "Salt",
      "Pepper",
      "Parsley",
    ],
    steps: [
      "Slice eggplant and season with salt and pepper.",
      "Sear in olive oil until golden and soft.",
      "Drizzle with lemon juice and garnish with parsley before serving.",
    ],
  },
  {
    id: "581d469b-8ce1-401a-9dce-d8f18f02513a",
    imgSrc:
      "https://images.contentstack.io/v3/assets/blt8a393bb3b76c0ede/blt653e46ad897ffac9/65482c54d2a103040ad8d9ef/savoury-breakfast-muffins-recipe-header.jpg?height=675.0&width=1200.0&crop=1200.0%2C675.0%2Cx0.0%2Cy45.0&format=pjpg&auto=webp",
    title: "Savory Carrot Muffins",
    description:
      "Delicious savory muffins made with carrots and a blend of spices.",
    ingredients: [
      "Grated carrots",
      "Whole wheat flour",
      "Eggs",
      "Milk",
      "Baking powder",
      "Cheddar cheese",
      "Paprika",
    ],
    steps: [
      "Preheat oven to 180°C and line a muffin tray.",
      "Mix grated carrots, flour, eggs, milk, baking powder, and paprika.",
      "Fold in cheddar cheese and pour the mixture into the muffin tray.",
      "Bake for 20 minutes until golden.",
    ],
  },
  {
    id: "581d469b-8ce1-401a-9dce-d8f18f02513a",
    imgSrc:
      "https://getfish.com.au/cdn/shop/articles/Step_4_-_crispy_salmon.png?v=1715832861",
    title: "Dijon Mustard Salmon",
    description:
      "A simple yet flavorful Dijon mustard salmon baked to perfection.",
    ingredients: [
      "Salmon fillets",
      "Dijon mustard",
      "Honey",
      "Garlic cloves",
      "Lemon juice",
      "Salt",
      "Pepper",
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Whisk Dijon mustard, honey, garlic, and lemon juice together.",
      "Brush the salmon fillets with the mustard mixture and season with salt and pepper.",
      "Bake for 12-15 minutes until salmon is cooked through.",
    ],
  },
  {
    id: "a8d11e6f-655a-4b3f-9651-8f9aee971788",
    imgSrc:
      "https://static01.nyt.com/images/2014/06/02/dining/Rice-Noodles/Rice-Noodles-superJumbo-v2.jpg",
    title: "Rice Noodles with Vegetables",
    description:
      "A light and refreshing rice noodle dish with sautéed vegetables.",
    ingredients: [
      "Rice noodles",
      "Soy sauce",
      "Carrots",
      "Zucchini",
      "Garlic cloves",
      "Sesame oil",
    ],
    steps: [
      "Cook rice noodles according to package instructions.",
      "Stir-fry garlic, carrots, and zucchini in sesame oil.",
      "Add the cooked noodles and soy sauce, toss well, and serve.",
    ],
  },
  {
    id: "46ea35e9-1008-47b2-9dbc-18a507007bbe",
    imgSrc:
      "https://www.allrecipes.com/thmb/ogHu01q-lng_VdeEP6Pd-SPsNMk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7937621-e1fb4dfc9dbd46bf979dafa94b83f35e.jpg",
    title: "Garlic Roasted Potatoes",
    description:
      "Crispy roasted potatoes with a delicious garlic and herb seasoning.",
    ingredients: [
      "Potatoes",
      "Garlic cloves",
      "Olive oil",
      "Rosemary",
      "Salt",
      "Pepper",
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Toss potato wedges with olive oil, garlic, rosemary, salt, and pepper.",
      "Roast for 30-35 minutes until crispy and golden.",
    ],
  },
  {
    id: "a194952a-d4d3-485d-8332-3f3b7d4c74f9",
    imgSrc:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2022-10-meatloaf-burgers%2Fmeatloaf-burgers-1158",
    title: "Meatloaf Burger",
    description:
      "A hearty meatloaf patty served in a burger bun with your favorite toppings.",
    ingredients: [
      "Ground beef",
      "Onion",
      "Breadcrumbs",
      "Ketchup",
      "Egg",
      "Burger buns",
      "Lettuce",
      "Cheese",
    ],
    steps: [
      "Mix ground beef, chopped onion, breadcrumbs, ketchup, and egg.",
      "Form into patties and cook on a skillet until browned.",
      "Serve in a bun with lettuce, cheese, and additional toppings of choice.",
    ],
  },
  {
    id: "9a4ff865-ec3d-4aaa-af55-d7b8aaaa4934",
    imgSrc:
      "https://www.allrecipes.com/thmb/wgfzwyWYvsiiZNkrkb2ei2oz52s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24264-sloppy-joes-dianne-2x1-1-8f9d52b9b47446eb96700b404096b8f9.jpg",
    title: "Sloppy Joes",
    description:
      "A tangy and delicious sloppy joes sandwich made with seasoned ground beef.",
    ingredients: [
      "Ground beef",
      "Onion",
      "Tomato sauce",
      "Worcestershire sauce",
      "Brown sugar",
      "Burger buns",
    ],
    steps: [
      "Cook ground beef and onions in a skillet until browned.",
      "Stir in tomato sauce, Worcestershire sauce, and brown sugar, simmer until thickened.",
      "Serve in a burger bun and enjoy.",
    ],
  },
  {
    id: "9b947094-7d28-4270-82d0-c639f6f73c78",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/56cb2b157da24faa1f771305/1490740012235-M3STBVK7CA7GEIS0R603/breakfast+bowl-1512.jpg?format=1500w",
    title: "Smoked Salmon Bowl",
    description:
      "A fresh and healthy smoked salmon bowl with rice, avocado, and pickled veggies.",
    ingredients: [
      "Smoked salmon",
      "Rice",
      "Avocado",
      "Pickled cucumber",
      "Soy sauce",
      "Sesame seeds",
    ],
    steps: [
      "Cook rice and divide into bowls.",
      "Top with smoked salmon, avocado, and pickled cucumber.",
      "Drizzle with soy sauce and sprinkle sesame seeds on top.",
    ],
  },
  {
    id: "a584a888-05c5-4ed0-9499-31a0dfc0d400",
    imgSrc:
      "https://thesaltycooker.com/wp-content/uploads/2023/01/Chili-BLOG.jpg",
    title: "Beef Chili",
    description:
      "A hearty beef chili made with beans, tomatoes, and a blend of spices.",
    ingredients: [
      "Ground beef",
      "Kidney beans",
      "Tomato sauce",
      "Chili powder",
      "Onions",
      "Garlic cloves",
    ],
    steps: [
      "Cook ground beef, onions, and garlic in a pot until browned.",
      "Add kidney beans, tomato sauce, and chili powder.",
      "Simmer for 30 minutes and serve hot.",
    ],
  },
  {
    id: "e73e4f78-ec5f-4050-a8d8-f79932a4007b",
    imgSrc:
      "https://i0.wp.com/www.cearaskitchen.com/wp-content/uploads/2015/07/IMG_26131.jpg",
    title: "Avocado and Chickpea Salad",
    description:
      "A refreshing salad combining creamy avocado and protein-packed chickpeas.",
    ingredients: [
      "Avocado",
      "Chickpeas",
      "Red onion",
      "Cilantro",
      "Lime juice",
      "Olive oil",
      "Salt",
    ],
    steps: [
      "In a bowl, mash the avocado and mix in chickpeas.",
      "Add chopped red onion and cilantro.",
      "Drizzle with lime juice and olive oil, and season with salt.",
    ],
  },
  {
    id: "52d58c14-c0d5-4231-ae24-3d1737700683",
    imgSrc:
      "https://www.allrecipes.com/thmb/_g_SFdKUwSniBWbzaQWEiGQw6SY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/51535-fresh-southern-peach-cobbler-ddmfs-0652-3x4-cb8d3d5a1e8548728fa1fc3d21fec1f0.jpg",
    title: "Classic Peach Cobbler",
    description: "A warm dessert featuring juicy peaches and a buttery crust.",
    ingredients: [
      "Fresh peaches",
      "Sugar",
      "Flour",
      "Butter",
      "Baking powder",
      "Milk",
      "Cinnamon",
    ],
    steps: [
      "Preheat oven to 180°C.",
      "Mix sliced peaches with sugar and place in a baking dish.",
      "Combine flour, baking powder, sugar, and milk for the batter.",
      "Pour batter over peaches and bake until golden.",
    ],
  },
  {
    id: "80bb4e68-bb97-42d5-be5b-c77df6895292",
    imgSrc:
      "https://nz.simplynootropics.com/cdn/shop/articles/Copy_of_Copy_of_Untitled_1200_x_800_px_16.png?v=1714490425&width=1100",
    title: "Spinach and Feta Quiche",
    description: "A savory quiche loaded with spinach and feta cheese.",
    ingredients: [
      "Spinach",
      "Feta cheese",
      "Eggs",
      "Milk",
      "Pie crust",
      "Onion",
      "Nutmeg",
    ],
    steps: [
      "Preheat oven to 190°C.",
      "Sauté onions and spinach until wilted.",
      "In a bowl, whisk eggs and milk, then stir in spinach, feta, and nutmeg.",
      "Pour mixture into pie crust and bake until set.",
    ],
  },
  {
    id: "f5c26e11-5ac4-4b30-acfd-3e1ebc1bbce1",
    imgSrc:
      "https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2020/03/sk-ultimate-banana-bread.jpg?fit=1200%2C800&ssl=1",
    title: "Moist Banana Bread",
    description:
      "A deliciously moist banana bread perfect for breakfast or a snack.",
    ingredients: [
      "Ripe bananas",
      "Flour",
      "Sugar",
      "Eggs",
      "Butter",
      "Baking soda",
      "Vanilla extract",
    ],
    steps: [
      "Preheat oven to 175°C.",
      "Mash bananas and mix with melted butter.",
      "Add sugar, egg, and vanilla, mixing well.",
      "Stir in flour and baking soda, then pour into a loaf pan and bake until golden.",
    ],
  },
  {
    id: "8b23dfba-0bff-4184-8886-3bfa02163822",
    imgSrc:
      "https://www.simplyrecipes.com/thmb/iRTpAzEQ7TP8_prwXjuf_tyxtPA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Zucchini-Bread-LEAD-1v2-10c6fca11bab4da8b5b388436a919328.jpg",
    title: "Zucchini Bread",
    description: "A flavorful bread made with fresh zucchini and warm spices.",
    ingredients: [
      "Zucchini",
      "Flour",
      "Sugar",
      "Eggs",
      "Cinnamon",
      "Nutmeg",
      "Walnuts",
    ],
    steps: [
      "Preheat oven to 175°C.",
      "Grate zucchini and squeeze out excess moisture.",
      "Mix zucchini with eggs, sugar, and spices.",
      "Fold in flour and walnuts, then pour into a loaf pan and bake until cooked through.",
    ],
  },
  {
    id: "6d5ffb1e-09cf-404c-b3c9-11eeb355acb9",
    imgSrc:
      "https://www.sidechef.com/recipe/e2488170-7e2d-45de-a5fd-b6a4ec24df9a.jpg?d=1408x1120",
    title: "Chickpea Coconut Curry",
    description: "A creamy and aromatic chickpea curry with coconut milk.",
    ingredients: [
      "Chickpeas",
      "Coconut milk",
      "Curry powder",
      "Onion",
      "Garlic",
      "Ginger",
      "Spinach",
    ],
    steps: [
      "Sauté onion, garlic, and ginger until fragrant.",
      "Add chickpeas and curry powder, stirring to coat.",
      "Pour in coconut milk and simmer until thickened.",
      "Stir in spinach until wilted and serve hot.",
    ],
  },
  {
    id: "46b6e924-044f-406c-b998-c296936a85d7",
    imgSrc:
      "https://jimcooksfoodgood.com/wp-content/uploads/2022/12/NEw-ENgland-Greek-pizza-scaled.jpg",
    title: "Greek Flatbread Pizza",
    description:
      "A Mediterranean-inspired pizza topped with fresh ingredients.",
    ingredients: [
      "Flatbread",
      "Olive oil",
      "Feta cheese",
      "Tomatoes",
      "Olives",
      "Red onion",
      "Spinach",
    ],
    steps: [
      "Preheat oven to 220°C.",
      "Brush flatbread with olive oil.",
      "Top with feta, sliced tomatoes, olives, red onion, and spinach.",
      "Bake until the edges are crispy.",
    ],
  },
  {
    id: "26f441c7-b877-42d4-b2b9-87c6400455ab",
    imgSrc:
      "https://www.foodandwine.com/thmb/4_UScMzHQCxZzACBITHHmT_EM3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chocolate-Chunk-Halwah-Cookies-FT-RECIPE0923-1f8df755df6d468da98887aa846a2fe3.jpg",
    title: "Classic Chocolate Chip Cookies",
    description:
      "Soft and chewy chocolate chip cookies perfect for any occasion.",
    ingredients: [
      "Butter",
      "Brown sugar",
      "Sugar",
      "Eggs",
      "Vanilla extract",
      "Flour",
      "Chocolate chips",
    ],
    steps: [
      "Preheat oven to 190°C.",
      "Cream butter and sugars together, then add eggs and vanilla.",
      "Mix in flour and chocolate chips, then drop spoonfuls onto a baking sheet.",
      "Bake until edges are golden.",
    ],
  },
  {
    id: "4f3b14e8-8c0c-44d8-8cb8-087b8a62e91a",
    imgSrc:
      "https://www.eatwell101.com/wp-content/uploads/2020/10/Garlic-Herb-Roasted-Potatoes-Carrots-and-Zucchini-recipe.jpg",
    title: "Herb-Roasted Vegetables",
    description:
      "A mix of seasonal vegetables roasted to perfection with herbs.",
    ingredients: [
      "Carrots",
      "Bell peppers",
      "Zucchini",
      "Olive oil",
      "Rosemary",
      "Thyme",
      "Salt",
    ],
    steps: [
      "Preheat oven to 200°C.",
      "Chop vegetables and toss with olive oil, herbs, and salt.",
      "Spread on a baking sheet and roast until tender and caramelized.",
    ],
  },
];

export default sampleRecipe;
