let app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        alertSentinel: false,
        alertHeight: 0,
        imgIndex: -1,
        iconIndex: -1,
        iconMove: false,
        iconMove1: false,
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
        ],
        menuCat: [
            {
                name: 'Appetizers',
                img: 'img/appetizers-menu-background.jpg'
            },
            {
                name: 'Burgers',
                img: 'img/burgers-menu-background.jpg'
            },
            {
                name: 'Pizzas',
                img: 'img/pizza-menu-background.jpg'
            },
            {
                name: 'Fries',
                img: 'img/fries-menu-background.jpg'
            },
            {
                name: 'Sides',
                img: 'img/sides-menu-background.jpg'
            },
            {
                name: 'Desserts',
                img: 'img/desserts-menu-background.jpg'
            },
            {
                name: 'Beverages',
                img: 'img/beverages-menu-background.jpg'
            },
            {
                name: 'Specials',
                img: 'img/specials-menu-background.jpg'
            },
        ],
        allergens: [
            {
                title: 'Vegetarian',
                icon: 'img/leaf.svg'
            },
            {
                title: 'Gluten Free',
                icon: 'img/wheat.svg'
            },
            {
                title: 'Dairy Free',
                icon: 'img/milk.svg'
            },
            {
                title: 'Keto Friendly',
                icon: 'img/beef.svg'
            },
        ],
        latestNews: [
            {
                title: 'NEW: The Pancake Burger',
                img: 'img/pancake-burger-600x450.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales ipsum vel elementum vehicula. Suspendisse sit amet aliquet ex. Pellentesque commodo tortor vel mi'
            },
            {
                title: 'New Milkshake Menu',
                img: 'img/new-milkshake-menu-600x450.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales ipsum vel elementum vehicula. Suspendisse sit amet aliquet ex. Pellentesque commodo tortor vel mi'
            }
        ],
        orderOnline: ['Appetizers','Burgers','Pizza','Fries','Sides','Desserts','Beverages','Specials'],
        navigate: ['Home','Alternate Home','Menu','About','News','Contact Us','Cart'],
        info: ['My Account','Terms of Service','Privacy Policy'],
        openingHours: [
                    {
                        day: 'Mon',
                        hours: '10AM to 11PM'
                    },
                    {
                        day: 'Tue',
                        hours: '10AM to 11PM'
                    },
                    {
                        day: 'Wed',
                        hours: '10AM to 11PM'
                    },
                    {
                        day: 'Thur',
                        hours: '10AM to 11PM'
                    },
                    {
                        day: 'Fri',
                        hours: '10AM to 11PM'
                    },
                    {
                        day: 'Sat',
                        hours: '10AM to 11PM'
                    },
                    {
                        day: 'Sun',
                        hours: '11AM to 10PM'
                    }
        ],
        socialIcons: [
            {
                title: 'Facebook',
                icon: 'fab fa-facebook-f'
            },
            {
                title: 'Twitter',
                icon: 'fab fa-twitter'
            },
            {
                title: 'Instagram',
                icon: 'fab fa-instagram'
            },
            {
                title: 'Linkedin',
                icon: 'fab fa-linkedin-in'
            },
            {
                title: 'RSS',
                icon: 'fas fa-rss'
            },
            {
                title: 'You Tube',
                icon: 'fab fa-youtube'
            },
            {
                title: 'Mail',
                icon: 'far fa-envelope'
            }
        ]
    },
    methods: {
        scrollTop() {
            this.intervalId = setInterval(() => {
                if (window.pageYOffset === 0) {
                clearInterval(this.intervalId);
                }
            window.scroll(0, window.pageYOffset - 50);
            }, 10)
        },
        showAlert() {
            this.alertSentinel = !this.alertSentinel;

            if(this.alertSentinel) {
                this.alertHeight = 155;
            } else {
                this.alertHeight = 0;
            }
        },
        pointHover(indice) {
            this.imgIndex = indice;
            console.log(this.imgIndex);
        },
        iconHover(indice) {
            this.iconIndex = indice;
            console.log(this.iconIndex);
        }
    }
});