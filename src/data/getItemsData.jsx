//  {name: "",
//      id: Date.now(),
//      discount_price: ,
//      actual_price: ,
//      image: "",
//      rating: ,
//      reviews: ,
//      short_description: "",
//      delivery_approx: "", 
//      store: "", 
//      addedItem: false,
//      wishedItem: false

//     }, 
import image1 from "./images/item_01/1.webp"
import image2 from "./images/item_02/1.webp"
import image3 from "./images/item_03/1.webp"
import image4 from "./images/item_04/1.webp"
import image5 from "./images/item_05/1.webp"
import image6 from "./images/item_06/1.webp"
import image7 from "./images/item_07/1.webp"
import image8 from "./images/item_08/1.webp"
import image9 from "./images/item_09/1.webp"
import image10 from "./images/item_10/1.webp"
import image11 from "./images/item_11/1.webp"
import image12 from "./images/item_12/1.webp"
import image13 from "./images/item_13/1.webp"
import image14 from "./images/item_14/1.webp"
import image15 from "./images/item_15/1.webp"
import image16 from "./images/item_16/1.webp"
import image17 from "./images/item_17/1.webp"
import image18 from "./images/item_18/1.webp"
import image19 from "./images/item_19/1.webp"
import image20 from "./images/item_20/1.webp"


export default function getItemsData() {
    const items = [
        {
            name: "Батарейка литиевая CR2032 круглая таблетка 3v, 5шт",
            id: 1,
            discount_price: 820,
            actual_price: 9320,
            image: image1,
            rating: 4.8,
            reviews: 2774,
            short_description: "Батарейки литиевые Duracell, 2032 3V 5шт",
            delivery_approx: "24 сентября",
            store: "DURACELL",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Батарейки алкалиновые AA 1.5V, 4 шт",
            id: 2,
            discount_price: 1450,
            actual_price: 2890,
            image: image2,
            rating: 4.9,
            reviews: 1843,
            short_description: "Алкалиновые батарейки AA для бытовой техники",
            delivery_approx: "24 сентября",
            store: "Energizer",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Батарейки алкалиновые AAA 1.5V, 4 шт",
            id: 3,
            discount_price: 1390,
            actual_price: 2790,
            image: image3,
            rating: 4.8,
            reviews: 1267,
            short_description: "Щелочные батарейки AAA длительного срока службы",
            delivery_approx: "25 сентября",
            store: "Duracell",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Аккумулятор 18650 Li-Ion 3.7V 3000mAh",
            id: 4,
            discount_price: 4200,
            actual_price: 6500,
            image: image4,
            rating: 4.7,
            reviews: 892,
            short_description: "Литий-ионный аккумулятор 18650 высокой емкости",
            delivery_approx: "25 сентября",
            store: "LiitoKala",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Зарядное устройство USB-C 20W",
            id: 5,
            discount_price: 4900,
            actual_price: 7900,
            image: image5,
            rating: 4.9,
            reviews: 3211,
            short_description: "Компактное быстрое зарядное устройство USB Type-C",
            delivery_approx: "24 сентября",
            store: "Baseus",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Кабель USB Type-C 1м, быстрая зарядка",
            id: 6,
            discount_price: 2100,
            actual_price: 3900,
            image: image6,
            rating: 4.8,
            reviews: 4582,
            short_description: "Прочный кабель Type-C для зарядки и передачи данных",
            delivery_approx: "24 сентября",
            store: "UGREEN",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Беспроводное зарядное устройство 15W",
            id: 7,
            discount_price: 5900,
            actual_price: 9900,
            image: image7,
            rating: 4.6,
            reviews: 734,
            short_description: "Беспроводная зарядка Qi 15W для смартфонов",
            delivery_approx: "26 сентября",
            store: "Hoco",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Power Bank 10000 mAh USB-C",
            id: 8,
            discount_price: 8900,
            actual_price: 14900,
            image: image8,
            rating: 4.8,
            reviews: 2165,
            short_description: "Портативный аккумулятор 10000 mAh с быстрой зарядкой",
            delivery_approx: "25 сентября",
            store: "Xiaomi",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Наушники беспроводные Bluetooth TWS",
            id: 9,
            discount_price: 11900,
            actual_price: 18900,
            image: image9,
            rating: 4.7,
            reviews: 3847,
            short_description: "Беспроводные TWS наушники с зарядным кейсом",
            delivery_approx: "24 сентября",
            store: "Soundcore",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Мышь беспроводная компьютерная",
            id: 10,
            discount_price: 5200,
            actual_price: 8900,
            image: image10,
            rating: 4.8,
            reviews: 1932,
            short_description: "Беспроводная мышь для компьютера и ноутбука",
            delivery_approx: "25 сентября",
            store: "Logitech",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Клавиатура беспроводная Bluetooth",
            id: 11,
            discount_price: 8500,
            actual_price: 12900,
            image: image11,
            rating: 4.7,
            reviews: 843,
            short_description: "Компактная беспроводная клавиатура Bluetooth",
            delivery_approx: "26 сентября",
            store: "A4Tech",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "LED лампа настольная с регулировкой яркости",
            id: 12,
            discount_price: 7600,
            actual_price: 11900,
            image: image12,
            rating: 4.9,
            reviews: 1526,
            short_description: "Настольная LED лампа с регулируемой яркостью",
            delivery_approx: "25 сентября",
            store: "Xiaomi",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Флешка USB 3.0 64GB",
            id: 13,
            discount_price: 4300,
            actual_price: 6900,
            image: image13,
            rating: 4.8,
            reviews: 2871,
            short_description: "USB 3.0 флеш-накопитель 64GB",
            delivery_approx: "24 сентября",
            store: "Kingston",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Карта памяти microSD 128GB",
            id: 14,
            discount_price: 5900,
            actual_price: 9500,
            image: image14,
            rating: 4.8,
            reviews: 3418,
            short_description: "Карта памяти microSD 128GB Class 10",
            delivery_approx: "24 сентября",
            store: "SanDisk",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Автомобильное зарядное устройство USB-C",
            id: 15,
            discount_price: 3900,
            actual_price: 6500,
            image: image15,
            rating: 4.7,
            reviews: 976,
            short_description: "Автомобильная зарядка USB-C с быстрой зарядкой",
            delivery_approx: "26 сентября",
            store: "Baseus",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Bluetooth колонка портативная",
            id: 16,
            discount_price: 12900,
            actual_price: 19900,
            image: image16,
            rating: 4.6,
            reviews: 1248,
            short_description: "Компактная портативная Bluetooth колонка",
            delivery_approx: "27 сентября",
            store: "JBL",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Умные часы Smart Watch",
            id: 17,
            discount_price: 17900,
            actual_price: 27900,
            image: image17,
            rating: 4.7,
            reviews: 2134,
            short_description: "Умные часы с мониторингом активности и уведомлениями",
            delivery_approx: "27 сентября",
            store: "Amazfit",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Коврик для мыши большой игровой",
            id: 18,
            discount_price: 3900,
            actual_price: 5900,
            image: image18,
            rating: 4.9,
            reviews: 1675,
            short_description: "Большой игровой коврик для мыши и клавиатуры",
            delivery_approx: "25 сентября",
            store: "Redragon",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Сетевой фильтр 5 розеток с USB",
            id: 19,
            discount_price: 6900,
            actual_price: 10900,
            image: image19,
            rating: 4.8,
            reviews: 1107,
            short_description: "Сетевой фильтр с защитой от перенапряжения и USB",
            delivery_approx: "26 сентября",
            store: "Defender",
            addedItem: false,
            wishedItem: false
        },

        {
            name: "Мини вентилятор USB настольный",
            id: 20,
            discount_price: 4500,
            actual_price: 7200,
            image: image20,
            rating: 4.6,
            reviews: 689,
            short_description: "Компактный USB вентилятор для рабочего стола",
            delivery_approx: "27 сентября",
            store: "Hoco",
            addedItem: false,
            wishedItem: false
        },

   
    ];
    return items;
}
