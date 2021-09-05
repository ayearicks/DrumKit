export const IMAGE_URL = 'assets/images/blackandwhitedrumset.jpg';


export const AREA_MAP = {
    name: 'drummap',
    areas: [
        {
            id:0,
            name: 'high-hat',
            class: 0,
            shape: 'circle',
            coords: [905,1069,255],
            sound: 'assets/sounds/highhat.wav',
            letter: 'h',
            key: 72
        },
        {
            id:1,
            name: 'open-high-hat',
            class: 0,
            shape: 'poly',
            coords: [971,1585,1055,1615,1160,1720,1319,1913,1241,1979,1025,1750],
            sound: 'assets/sounds/openhat.wav',
            letter: 'g',
            key: 71
        },
        {
            id:2,
            name: 'snare',
            class: 0,
            shape: 'circle',
            coords: [1355,1168,256],
            sound: 'assets/sounds/snare.wav',
            letter: 'a',
            key: 65
        },
        {
            id:3,
            name: 'tom1',
            class: 0,
            shape: 'circle',
            coords: [1475,627,175],
            sound: 'assets/sounds/tom1.wav',
            letter: 'q',
            key: 81
        },
        {
            id:4,
            name: 'tom2',
            class: 0,
            shape: 'circle',
            coords: [1940,622,226],
            sound: 'assets/sounds/tom2.wav',
            letter: 'w', 
            key: 87
        },
        {
            id:5,
            name: 'floor-tom',
            class: 0,
            shape: 'circle',
            coords: [2198,1195,272],
            sound: 'assets/sounds/floortom.wav',
            letter: 'e',
            key: 69
        },
        {
            id:6,
            name: 'kick',
            class: 0,
            shape: 'poly',
            coords: [1571,958,1637,1078,1655,1180,1655,1303,1661,1435,1700,1666,1790,1663,1808,1465,1835,1327,1865,1228,1883,1147,1916,1030,1973,949,1754,928],
            sound: 'assets/sounds/kick.wav',
            letter: 'x',
            key: 88
        },
        {
            id:7,
            name: 'crash16',
            class: 0,
            shape: 'circle',
            coords: [1022,390,329],
            sound: 'assets/sounds/crash16.wav',
            letter: 't',
            key: 84
        },
        {
            id:8,
            name: 'ride',
            class: 0,
            shape: 'circle',
            coords: [2417,633,345],
            sound: 'assets/sounds/ride.wav',
            letter: 'k',
            key: 75
        },
        {
            id:9,
            name: 'ride-bell',
            class: 0,
            shape: 'circle',
            coords: [2432,622,102],
            sound: 'assets/sounds/ridebell.wav',
            letter: 'l',
            key: 76
        },
        {
            id:10,
            name: 'crash14',
            class: 0,
            shape: 'circle',
            coords: [2681,775,304],
            sound: 'assets/sounds/crash14.wav',
            letter: 'y',
            key: 89
        }
    ]
}