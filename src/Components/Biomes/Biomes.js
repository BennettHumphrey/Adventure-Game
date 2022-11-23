import { enemies } from '../EnemiesAndAnimals/Enemies'
import { animals } from '../EnemiesAndAnimals/Animals'

export const biomes = [
    {
        name: 'Forest',
        biomeID: 0,
        waterAvailability: 5,
        foodAvailability: 8,
        mobility: 6,
        enemies: [enemies.bear, enemies.wolf],
        animals: [animals.deer, animals.elk, animals.moose, animals.rabbit],
    }, {
        name: 'Desert',
        biomeID: 1,
        waterAvailability: 1,
        foodAvailability: 2,
        mobility: 9,
        enemies: [],
        animals: [animals.rabbit],
    }, {
        name: 'Jungle',
        biomeID: 2,
        waterAvailability: 8,
        foodAvailability: 10,
        mobility: 2,
        enemies: [enemies.bear, enemies.wolf, enemies.cougar],
        animals: [animals.deer, animals.rabbit],
    }, {
        name: 'Hills',
        biomeID: 3,
        waterAvailability: 7,
        foodAvailability: 3,
        mobility: 4,
        enemies: [enemies.cougar],
        animals: [animals.elk],
    }
]

