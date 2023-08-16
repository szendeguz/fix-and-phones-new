import { reactive } from 'vue';

export const store = reactive({
    iphoneList: [
        {
            name: 'iPhone 12 Pro Max',
            image: '/fix-and-phones-new/images/devices/iphone/ip_12_pro_max.jpg',
            type: 'iphone',
            screenChange: '80.000',
            screenRenewal: '65.000',
            backChange: '25.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone 12 Pro',
            image: '/fix-and-phones-new/images/devices/iphone/ip_12_pro.jpg',
            type: 'iphone',
            screenChange: '80.000',
            screenRenewal: '60.000',
            backChange: '24.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone 12',
            image: '/fix-and-phones-new/images/devices/iphone/ip_12.jpg',
            type: 'iphone',
            screenChange: '80.000',
            screenRenewal: '60.000',
            backChange: '20.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone 12 Mini',
            image: '/fix-and-phones-new/images/devices/iphone/ip_12_mini.jpg',
            type: 'iphone',
            screenChange: '70.000',
            screenRenewal: '55.000',
            backChange: '20.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone SE 2020',
            image: '/fix-and-phones-new/images/devices/iphone/ip_se_2020.jpg',
            type: 'iphone',
            screenChange: '20.000',
            screenRenewal: '18.000',
            backChange: '15.000',
            batteryChange: '16.000',
            batteryChangeError: '12.000',
            active: false,
        },
        {
            name: 'iPhone 11 Pro Max',
            image: '/fix-and-phones-new/images/devices/iphone/ip_11_pro_max.jpg',
            screenChange: '70.000',
            screenRenewal: '50.000',
            backChange: '20.000',
            batteryChange: '28.000',
            batteryChangeError: '22.000',
            type: 'iphone',
            active: false,
        },
        {
            name: 'iPhone 11 Pro',
            image: '/fix-and-phones-new/images/devices/iphone/ip_11_pro.jpg',
            screenChange: '60.000',
            screenRenewal: '45.000',
            backChange: '20.000',
            batteryChange: '26.000',
            batteryChangeError: '20.000',
            type: 'iphone',
            active: false,
        },
        {
            name: 'iPhone 11',
            image: '/fix-and-phones-new/images/devices/iphone/ip_11.jpg',
            type: 'iphone',
            screenChange: '40.000',
            screenRenewal: '30.000',
            backChange: '18.000',
            batteryChange: '23.000',
            batteryChangeError: '17.000',
            active: false,
        },
        {
            name: 'iPhone Xs Max',
            image: '/fix-and-phones-new/images/devices/iphone/ip_11_xs_max.jpg',
            type: 'iphone',
            screenChange: '55.000',
            screenRenewal: '42.000',
            backChange: '18.000',
            batteryChange: '21.000',
            iphoneBatteryChangeError: '17.000',
            active: false,
        },
        {
            name: 'iPhone Xs',
            image: '/fix-and-phones-new/images/devices/iphone/ip_11_xs.jpg',
            type: 'iphone',
            screenChange: '45.000',
            screenRenewal: '35.000',
            backChange: '16.000',
            batteryChange: '20.000',
            iphoneBatteryChangeError: '16.000',
            active: false,
        },
        {
            name: 'iPhone Xr',
            image: '/fix-and-phones-new/images/devices/iphone/ip_11_xr.jpg',
            type: 'iphone',
            screenChange: '32.000',
            screenRenewal: '25.000',
            backChange: '16.000',
            batteryChange: '20.000',
            iphoneBatteryChangeError: '16.000',
            active: false,
        },
        {
            name: 'iPhone X',
            image: '/fix-and-phones-new/images/devices/iphone/ip_x.jpg',
            type: 'iphone',
            screenChange: '40.000',
            screenRenewal: '30.000',
            backChange: '16.000',
            batteryChange: '15.000',
            active: false,
        },
        {
            name: 'iPhone 8',
            image: '/fix-and-phones-new/images/devices/iphone/ip_8.jpg',
            type: 'iphone',
            screenChange: '18.000',
            screenRenewal: '16.000',
            backChange: '15.000',
            batteryChange: '12.000',
            active: false,
        },
        {
            name: 'iPhone 8 Plus',
            image: '/fix-and-phones-new/images/devices/iphone/ip_8_plus.jpg',
            type: 'iphone',
            screenChange: '22.000',
            screenRenewal: '18.000',
            backChange: '18.000',
            batteryChange: '14.000',
            active: false,
        },
        {
            name: 'iPhone 7',
            image: '/fix-and-phones-new/images/devices/iphone/ip_7.jpg',
            type: 'iphone',
            screenChange: '16.000',
            screenRenewal: '14.000',
            batteryChange: '10.000',
            active: false,
        },
        {
            name: 'iPhone 7 Plus',
            image: '/fix-and-phones-new/images/devices/iphone/ip_7_plus.jpg',
            type: 'iphone',
            screenChange: '19.000',
            screenRenewal: '15.000',
            batteryChange: '12.000',
            active: false,
        },
        {
            name: 'iPhone 6s',
            image: '/fix-and-phones-new/images/devices/iphone/ip_6_s.jpg',
            type: 'iphone',
            screenChange: '12.000',
            screenRenewal: '10.000',
            batteryChange: '8.000',
            active: false,
        },
        {
            name: 'iPhone 6s Plus',
            image: '/fix-and-phones-new/images/devices/iphone/ip_6_s_plus.jpg',
            type: 'iphone',
            screenChange: '14.000',
            screenRenewal: '14.000',
            batteryChange: '10.000',
            active: false,
        },
        {
            name: 'iPhone 6',
            image: '/fix-and-phones-new/images/devices/iphone/ip_6.jpg',
            type: 'iphone',
            screenChange: '10.000',
            screenRenewal: '9.000',
            batteryChange: '7.000',
            active: false,
        },
        {
            name: 'iPhone 6 Plus',
            image: '/fix-and-phones-new/images/devices/iphone/ip_6_plus.jpg',
            type: 'iphone',
            screenChange: '12.000',
            screenRenewal: '10.000',
            batteryChange: '8.000',
            active: false,
        },
        {
            name: 'iPhone SE (1. generáció)',
            image: '/fix-and-phones-new/images/devices/iphone/ip_se.jpg',
            type: 'iphone',
            screenChange: '8.000',
            screenRenewal: '7.000',
            batteryChange: '6.000',
            active: false,
        },
        {
            name: 'iPhone 5s',
            image: '/fix-and-phones-new/images/devices/iphone/ip_5s.jpg',
            type: 'iphone',
            screenChange: '7.000',
            screenRenewal: '7.000',
            batteryChange: '6.000',
            active: false,
        },
        {
            name: 'iPhone 5c',
            image: '/fix-and-phones-new/images/devices/iphone/ip_5c.jpg',
            type: 'iphone',
            active: false,
        },
        {
            name: 'iPhone 5',
            image: '/fix-and-phones-new/images/devices/iphone/ip_5.jpg',
            type: 'iphone',
            batteryChange: '5.000',
            active: false,
        },
    ],
    applewatchList: [
        {
            name: "Apple Watch Series 7",
            image: "/fix-and-phones-new/images/devices/watch/aw_7.jpg",
            type: "watch",
            screenRenewal: '50.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 6",
            image: "/fix-and-phones-new/images/devices/watch/aw_6.jpg",
            type: "watch",
            screenRenewal: '40.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series SE",
            image: "/fix-and-phones-new/images/devices/watch/aw_se.jpg",
            type: "watch",
            screenRenewal: '35.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 5",
            image: "/fix-and-phones-new/devices/watch/aw_5.jpg",
            type: "watch",
            screenRenewal: '35.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 4",
            image: "/fix-and-phones-new/images/devices/watch/aw_4.jpg",
            type: "watch",
            screenRenewal: '35.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 3",
            image: "/fix-and-phones-new/images/devices/watch/aw_3.jpg",
            type: "watch",
            screenRenewal: '25.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 2",
            image: "/fix-and-phones-new/images/devices/watch/aw_2.jpg",
            type: "watch",
            active: false,
            screenRenewal: '25.000',
            batteryChange: 0,
        },
        {
            name: "Apple Watch Series 1",
            image: "/fix-and-phones-new/images/devices/watch/aw_1.jpg",
            type: "watch",
            active: false,
            screenRenewal: '25.000',
            batteryChange: 0,
        }
    ],
    iphoneMotherboardList: [
        {
            name: 'iPhone 12 Pro Max',
            problems: [
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                }
            ],
            active: false,
        },
        {
            name: 'iPhone 12 Pro',
            problems: [
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                }
            ],
            active: false,
        },
        {
            name: 'iPhone 12',
            problems: [
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                }
            ],
            active: false,
        },
        {
            name: 'iPhone 12 Mini',
            problems: [
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                }
            ],
            active: false,
        },
        {
            name: 'iPhone 11 Pro Max',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '35-55.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '35-55.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '30-55.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '30-55.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '30-55.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30-55.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '45-55.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '35-55.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 11 Pro',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '35-55.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '35-55.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '30-55.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '30-55.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '30-55.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30-55.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '45-55.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '35-55.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 11',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '35-55.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '35-55.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '30-55.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '30-55.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '30-55.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30-55.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '45-55.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '35-55.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone SE 2020',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '25.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '25.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '25.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '22.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '22.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '25.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '30.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '20-30.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone Xs Max',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '35.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '35-40.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '30-35.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '30-35.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '30-40.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '40.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '30-45.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone Xs',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '35.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '35-40.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '30-35.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '30-35.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '30-40.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '40.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '30-45.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone Xr',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '35.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '35-40.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '30-35.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '30-35.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '30-40.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '40.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '30-45.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone X',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '30.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '30-35.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '30-35.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '30-35.000',
                },
                {
                    name: 'Face ID javítás',
                    desc: '(letiltott vagy nem beaktiválható arcfelismerés)',
                    price: '25-40.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '30-35.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '30.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '40.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '30-45.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 8 Plus',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '22.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '22.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '22.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '20.000',
                },
                {
                    name: 'Home gomb javítás',
                    desc: '(„bekeményedett” gomb, nincs ujjlenyomatolvasás)',
                    price: '20.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '24.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '20.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '30.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '20-30.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 8',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '22.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '22.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '22.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '20.000',
                },
                {
                    name: 'Home gomb javítás',
                    desc: '(„bekeményedett” gomb, nincs ujjlenyomatolvasás)',
                    price: '20.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '24.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '20.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '30.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '20-30.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 7 Plus',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '18.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '20.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '20.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '18.000',
                },
                {
                    name: 'Home gomb javítás',
                    desc: '(„bekeményedett” gomb, nincs ujjlenyomatolvasás)',
                    price: '18.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '22.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '20.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20-25.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-30.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 7',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '18.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '20.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '20.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '18.000',
                },
                {
                    name: 'Home gomb javítás',
                    desc: '(„bekeményedett” gomb, nincs ujjlenyomatolvasás)',
                    price: '18.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '22.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '20.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20-25.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-30.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 6s Plus',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '19.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '18.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '18.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '18.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '22.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '18.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-25.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 6s',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '18.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '17.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '17.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '17.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '22.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '18.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-25.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 6 Plus',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '17.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '17.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '17.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '17.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '17.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '17.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-25.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 6',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '16.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '16.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '16.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '16.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '16.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '16.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-25.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone SE (1. generáció)',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '15.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '16.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '15.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '15.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '16.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '16.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-25.000',
                },
            ],
            active: false,
        },
        {
            name: 'iPhone 5s',
            problems: [
                {
                    name: 'Töltővezérlő csere',
                    desc: '(nem megfelelően vagy egyáltalán nem tölt)',
                    price: '15.000',
                },
                {
                    name: 'Baseband IC csere',
                    desc: '(nem lehet beaktiválni, eltűnt IMEI szám)',
                    price: '16.000',
                },
                {
                    name: 'Audio IC csere',
                    desc: '(nincs hang)',
                    price: '15.000',
                },
                {
                    name: 'Touch IC csere',
                    desc: '(kijelző nem érint)',
                    price: '15.000',
                },
                {
                    name: 'Wi-Fi IC csere',
                    desc: '(nincs elérhető hálózat vagy Bluetooth)',
                    price: '16.000',
                },
                {
                    name: 'Kamera IC csere',
                    desc: '(kamera nem működik)',
                    price: '16.000',
                },
                {
                    name: 'Memória javítás, bővítés',
                    desc: '(adatmentés vagy tárhelybővítés esetén)',
                    price: '20.000',
                },
                {
                    name: 'Vízkár javítás',
                    price: '15-25.000',
                },
            ],
            active: false,
        },
    ],
    iphoneModularList: {
        powerButton: {
            name: 'Bekapcsoló gomb',
            problems: [
                {
                    name: 'iPhone 12 Pro Max',
                    price: '22.000',
                },
                {
                    name: 'iPhone 12 Pro',
                    price: '22.000',
                },
                {
                    name: 'iPhone 12',
                    price: '22.000',
                },
                {
                    name: 'iPhone 12 Mini',
                    price: '22.000',
                },
                {
                    name: 'iPhone 11 Pro Max',
                    price: '18.000',
                },
                {
                    name: 'iPhone 11 Pro',
                    price: '18.000',
                },
                {
                    name: 'iPhone 11',
                    price: '18.000',
                },
                {
                    name: 'iPhone SE 2020',
                    price: '12.000',
                },
                {
                    name: 'iPhone XS Max',
                    price: '16.000',
                },
                {
                    name: 'iPhone XS',
                    price: '15.000',
                },
                {
                    name: 'iPhone Xr',
                    price: '15.000',
                },
                {
                    name: 'iPhone X',
                    price: '14.000',
                },
                {
                    name: 'iPhone 8 Plus',
                    price: '9.000',
                },
                {
                    name: 'iPhone 8',
                    price: '9.000',
                },
                {
                    name: 'iPhone 7 Plus',
                    price: '9.000',
                },
                {
                    name: 'iPhone 7',
                    price: '9.000',
                },
                {
                    name: 'iPhone 6s Plus',
                    price: '8.000',
                },
                {
                    name: 'iPhone 6s',
                    price: '8.000',
                },
                {
                    name: 'iPhone 6 Plus',
                    price: '8.000',
                },
                {
                    name: 'iPhone SE',
                    price: '7.000',
                },
                {
                    name: 'iPhone 5s',
                    price: '6.000',
                },
                {
                    name: 'iPhone 5 / 5c',
                    price: '6.000',
                },   
            ],
            active: false,
    },
        chargerInput: {
        name: 'Töltő és adatátviteli csatlakozó',
        problems: [
            {
                name: 'iPhone 12 Pro Max',
                price: '22.000',
            },
            {
                name: 'iPhone 12 Pro',
                price: '22.000',
            },
            {
                name: 'iPhone 12',
                price: '22.000',
            },
            {
                name: 'iPhone 12 Mini',
                price: '22.000',
            },
            {
                name: 'iPhone 11 Pro Max',
                price: '18.000',
            },
            {
                name: 'iPhone 11 Pro',
                price: '18.000',
            },
            {
                name: 'iPhone 11',
                price: '18.000',
            },
            {
                name: 'iPhone SE 2020',
                price: '12.000',
            },
            {
                name: 'iPhone XS Max',
                price: '16.000',
            },
            {
                name: 'iPhone XS',
                price: '15.000',
            },
            {
                name: 'iPhone Xr',
                price: '15.000',
            },
            {
                name: 'iPhone X',
                price: '14.000',
            },
            {
                name: 'iPhone 8 Plus',
                price: '9.000',
            },
            {
                name: 'iPhone 8',
                price: '9.000',
            },
            {
                name: 'iPhone 7 Plus',
                price: '9.000',
            },
            {
                name: 'iPhone 7',
                price: '9.000',
            },
            {
                name: 'iPhone 6s Plus',
                price: '8.000',
            },
            {
                name: 'iPhone 6s',
                price: '8.000',
            },
            {
                name: 'iPhone 6 Plus',
                price: '8.000',
            },
            {
                name: 'iPhone SE',
                price: '7.000',
            },
            {
                name: 'iPhone 5s',
                price: '6.000',
            },
            {
                name: 'iPhone 5 / 5c',
                price: '6.000',
            },   
        ],
        active: false,
    },
        ringtoneSpeaker: {
        name: 'Csengő hangszóró',
        problems: [
            {
                name: 'iPhone 12 Pro Max',
                price: '20.000',
            },
            {
                name: 'iPhone 12 Pro',
                price: '20.000',
            },
            {
                name: 'iPhone 12',
                price: '20.000',
            },
            {
                name: 'iPhone 12 Mini',
                price: '20.000',
            },
            {
                name: 'iPhone 11 Pro Max',
                price: '15.000',
            },
            {
                name: 'iPhone 11 Pro',
                price: '15.000',
            },
            {
                name: 'iPhone 11',
                price: '15.000',
            },
            {
                name: 'iPhone SE 2020',
                price: '10.000',
            },
            {
                name: 'iPhone XS Max',
                price: '12.000',
            },
            {
                name: 'iPhone XS',
                price: '12.000',
            },
            {
                name: 'iPhone Xr',
                price: '12.000',
            },
            {
                name: 'iPhone X',
                price: '12.000',
            },
            {
                name: 'iPhone 8 Plus',
                price: '9.000',
            },
            {
                name: 'iPhone 8',
                price: '9.000',
            },
            {
                name: 'iPhone 7 Plus',
                price: '9.000',
            },
            {
                name: 'iPhone 7',
                price: '9.000',
            },
            {
                name: 'iPhone 6s Plus',
                price: '8.000',
            },
            {
                name: 'iPhone 6s',
                price: '8.000',
            },
            {
                name: 'iPhone 6 Plus',
                price: '8.000',
            },
            {
                name: 'iPhone SE',
                price: '7.000',
            },
            {
                name: 'iPhone 5s',
                price: '5.000',
            },
            {
                name: 'iPhone 5 / 5c',
                price: '5.000',
            },   
        ],
        active: false,
    },
        talkSpeaker: {
        name: 'Beszéd hangszóró',
        problems: [
            {
                name: 'iPhone 12 Pro Max',
                price: '20.000',
            },
            {
                name: 'iPhone 12 Pro',
                price: '20.000',
            },
            {
                name: 'iPhone 12',
                price: '20.000',
            },
            {
                name: 'iPhone 12 Mini',
                price: '20.000',
            },
            {
                name: 'iPhone 11 Pro Max',
                price: '15.000',
            },
            {
                name: 'iPhone 11 Pro',
                price: '15.000',
            },
            {
                name: 'iPhone 11',
                price: '15.000',
            },
            {
                name: 'iPhone SE 2020',
                price: '10.000',
            },
            {
                name: 'iPhone XS Max',
                price: '12.000',
            },
            {
                name: 'iPhone XS',
                price: '12.000',
            },
            {
                name: 'iPhone Xr',
                price: '12.000',
            },
            {
                name: 'iPhone X',
                price: '12.000',
            },
            {
                name: 'iPhone 8 Plus',
                price: '9.000',
            },
            {
                name: 'iPhone 8',
                price: '9.000',
            },
            {
                name: 'iPhone 7 Plus',
                price: '9.000',
            },
            {
                name: 'iPhone 7',
                price: '9.000',
            },
            {
                name: 'iPhone 6s Plus',
                price: '8.000',
            },
            {
                name: 'iPhone 6s',
                price: '8.000',
            },
            {
                name: 'iPhone 6 Plus',
                price: '8.000',
            },
            {
                name: 'iPhone SE',
                price: '7.000',
            },
            {
                name: 'iPhone 5s',
                price: '5.000',
            },
            {
                name: 'iPhone 5 / 5c',
                price: '5.000',
            },   
        ],
        active: false,
    },
    }
});