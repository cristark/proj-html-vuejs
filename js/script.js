let app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        mainMenu: ['Home','Order Online','About','News','Contact Us'],
        jumbotron: [
            {
                title: '24/7 delivery',
                icon: 'far fa-clock'
            },
            {
                title: 'over 100 dishes',
                icon: 'fas fa-hamburger'
            },
            {
                title: 'in app ordering',
                icon: 'fas fa-mobile-alt'
            },
            {
                title: 'fast delivery',
                icon: 'fas fa-car'
            }
        ],
        popularDishes: [
            {
                title: 'Skin On Fries',
                img: 'img/skin-on-fries-400x571.jpg',
                price: '3.00 - 6.00'
            },
            {
                title: 'Choco Cookie Frappe',
                img: 'img/choco-cookie-frappe-400x571.jpg',
                price: '4.99'
            },
            {
                title: 'The Donut Burger',
                img: 'img/donut-burger-400x571.jpg',
                price: '6.99'
            }
        ]
    },
    mounted() {

    },
    methods: {
        
    }
});