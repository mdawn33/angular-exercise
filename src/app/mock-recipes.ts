import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
    {
        id: '1',
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish.',
        ingredients: [
        { name: 'Spaghetti', quantity: 200, unit: 'g' },
        { name: 'Guanciale', quantity: 100, unit: 'g' },
        { name: 'Egg Yolks', quantity: 4, unit: 'each' },
        { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
        { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
        ],
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Spaghetti_alla_carbonara_classica.jpg',
        isFavorite: true
    },
    {
        id: '2',
        name: 'Caprese Salad',
        description: 'A simple and refreshing Italian salad.',
        ingredients: [
        { name: 'Tomatoes', quantity: 4, unit: 'each' },
        { name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
        { name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
        { name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp' },
        ],
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Insalata_Caprese_%28from_Poznan%29.JPG',
        isFavorite: false
    },
];