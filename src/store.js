import { reactive } from 'vue';

export const store = reactive({
    iphoneList: [
        {
            name: 'iPhone 12 Pro Max',
            image: '../src/assets/images/devices/iphone/ip_12_pro_max.jpg',
            type: 'iphone',
            screenChange: '80.000',
            screenRenewal: '65.000',
            backChange: '25.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone 12 Pro',
            image: '../src/assets/images/devices/iphone/ip_12_pro.jpg',
            type: 'iphone',
            screenChange: '80.000',
            screenRenewal: '60.000',
            backChange: '24.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone 12',
            image: '../src/assets/images/devices/iphone/ip_12.jpg',
            type: 'iphone',
            screenChange: '80.000',
            screenRenewal: '60.000',
            backChange: '20.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone 12 Mini',
            image: '../src/assets/images/devices/iphone/ip_12_mini.jpg',
            type: 'iphone',
            screenChange: '70.000',
            screenRenewal: '55.000',
            backChange: '20.000',
            batteryChange: '22.000',
            active: false,
        },
        {
            name: 'iPhone SE 2020',
            image: '../src/assets/images/devices/iphone/ip_se_2020.jpg',
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
            image: '../src/assets/images/devices/iphone/ip_11_pro_max.jpg',
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
            image: '../src/assets/images/devices/iphone/ip_11_pro.jpg',
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
            image: '../src/assets/images/devices/iphone/ip_11.jpg',
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
            image: '../src/assets/images/devices/iphone/ip_11_xs_max.jpg',
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
            image: '../src/assets/images/devices/iphone/ip_11_xs.jpg',
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
            image: '../src/assets/images/devices/iphone/ip_11_xr.jpg',
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
            image: '../src/assets/images/devices/iphone/ip_x.jpg',
            type: 'iphone',
            screenChange: '40.000',
            screenRenewal: '30.000',
            backChange: '16.000',
            batteryChange: '15.000',
            active: false,
        },
        {
            name: 'iPhone 8',
            image: '../src/assets/images/devices/iphone/ip_8.jpg',
            type: 'iphone',
            screenChange: '18.000',
            screenRenewal: '16.000',
            backChange: '15.000',
            batteryChange: '12.000',
            active: false,
        },
        {
            name: 'iPhone 8 Plus',
            image: '../src/assets/images/devices/iphone/ip_8_plus.jpg',
            type: 'iphone',
            screenChange: '22.000',
            screenRenewal: '18.000',
            backChange: '18.000',
            batteryChange: '14.000',
            active: false,
        },
        {
            name: 'iPhone 7',
            image: '../src/assets/images/devices/iphone/ip_7.jpg',
            type: 'iphone',
            screenChange: '16.000',
            screenRenewal: '14.000',
            batteryChange: '10.000',
            active: false,
        },
        {
            name: 'iPhone 7 Plus',
            image: '../src/assets/images/devices/iphone/ip_7_plus.jpg',
            type: 'iphone',
            screenChange: '19.000',
            screenRenewal: '15.000',
            batteryChange: '12.000',
            active: false,
        },
        {
            name: 'iPhone 6s',
            image: '../src/assets/images/devices/iphone/ip_6_s.jpg',
            type: 'iphone',
            screenChange: '12.000',
            screenRenewal: '10.000',
            batteryChange: '8.000',
            active: false,
        },
        {
            name: 'iPhone 6s Plus',
            image: '../src/assets/images/devices/iphone/ip_6_s_plus.jpg',
            type: 'iphone',
            screenChange: '14.000',
            screenRenewal: '14.000',
            batteryChange: '10.000',
            active: false,
        },
        {
            name: 'iPhone 6',
            image: '../src/assets/images/devices/iphone/ip_6.jpg',
            type: 'iphone',
            screenChange: '10.000',
            screenRenewal: '9.000',
            batteryChange: '7.000',
            active: false,
        },
        {
            name: 'iPhone 6 Plus',
            image: '../src/assets/images/devices/iphone/ip_6_plus.jpg',
            type: 'iphone',
            screenChange: '12.000',
            screenRenewal: '10.000',
            batteryChange: '8.000',
            active: false,
        },
        {
            name: 'iPhone SE (1. generáció)',
            image: '../src/assets/images/devices/iphone/ip_se.jpg',
            type: 'iphone',
            screenChange: '8.000',
            screenRenewal: '7.000',
            batteryChange: '6.000',
            active: false,
        },
        {
            name: 'iPhone 5s',
            image: '../src/assets/images/devices/iphone/ip_5s.jpg',
            type: 'iphone',
            screenChange: '7.000',
            screenRenewal: '7.000',
            batteryChange: '6.000',
            active: false,
        },
        {
            name: 'iPhone 5c',
            image: '../src/assets/images/devices/iphone/ip_5c.jpg',
            type: 'iphone',
            active: false,
        },
        {
            name: 'iPhone 5',
            image: '../src/assets/images/devices/iphone/ip_5.jpg',
            type: 'iphone',
            batteryChange: '5.000',
            active: false,
        },
    ],
    applewatchList: [
        {
            name: "Apple Watch Series 7",
            image: "../src/assets/images/devices/watch/aw_7.jpg",
            type: "watch",
            screenRenewal: '50.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 6",
            image: "../src/assets/images/devices/watch/aw_6.jpg",
            type: "watch",
            screenRenewal: '40.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series SE",
            image: "../src/assets/images/devices/watch/aw_se.jpg",
            type: "watch",
            screenRenewal: '35.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 5",
            image: "../src/assets/images/devices/watch/aw_5.jpg",
            type: "watch",
            screenRenewal: '35.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 4",
            image: "../src/assets/images/devices/watch/aw_4.jpg",
            type: "watch",
            screenRenewal: '35.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 3",
            image: "../src/assets/images/devices/watch/aw_3.jpg",
            type: "watch",
            screenRenewal: '25.000',
            batteryChange: 0,
            active: false,
        },
        {
            name: "Apple Watch Series 2",
            image: "../src/assets/images/devices/watch/aw_2.jpg",
            type: "watch",
            active: false,
            screenRenewal: '25.000',
            batteryChange: 0,
        },
        {
            name: "Apple Watch Series 1",
            image: "../src/assets/images/devices/watch/aw_1.jpg",
            type: "watch",
            active: false,
            screenRenewal: '25.000',
            batteryChange: 0,
        }
    ],
});