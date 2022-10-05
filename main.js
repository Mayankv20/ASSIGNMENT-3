Vue.component('product-item', {
  props: ['item'],
  template: `
  <div id="item">
    <div id="product-image">
      <img :src="item.src">
    </div>
    <div id="product-details">
      <h2>{{item.name}}</h2>
      <p>{{item.des}}</p>
    </div>
    <h1 id="theprice">{{item.price}}</h1>
    <button @click="$emit('add',item.id)" id="cart-button">Add to cart</button>
    <button @click="$emit('remove',item.id)" id="cart-remove">Remove from cart</button>
  </div>`
})


var app = new Vue({
  el: '#app',
  data: {
    company: 'INDIAN GROCERY',
    ph: '+61 400232023221',
    email: 'verma@deakin.edu.au',
    isproduct: true,
    isabout: false,
    iscontact: false,
    isfeedback: false,
    islogin: false,
    issweets: true,
    isHealthandBeauty: false,
    isreadytoeat: false,
    isbeverages: false,
    iscart: false,
    cart: [],
    finalcart: [],
    products: [{ src: "https://talesofindia.com.au/wp-content/uploads/2021/10/6afff096c872d85e3fe7854ede6982f72c2da3dd.png", name: "Rasmalai 1kg (12 pieces) – Nanak", des: "For all of you who enjoy dessert, Nanak Rasmalai 12pcs is available to make your meals extra-special. Enjoy your favourite whenever you wish. The 12 pieces of Nanak Rasmalai have a fantastic flavour and are accessible right away..", price: "$3", type: "sweets", id: "A1", qty: 1 },
    { src: "hh.png", name: "Haldiram's Rasmalai 1kg", des: "Haldiram's Rasmalai 1kg is a product of India brought to you by Tales Of India. Get in touch with us for more information on Haldiram's Rasmalai 1kg.", price: "$4", type: "sweets", id: "A2", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/83806f99800d2c5062ed4658efcc170160cdece3.jpg", name: "Long Gulab Jamun 1kg – Haldirams", des: "Haldirams Long Gulab Jamun 1kg is a to go dessert after a meal. If you have a sweet tooth, Haldirams Long Gulab Jamun 1kg is a must try.", price: "$4", type: "sweets", id: "A3", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/Haldiram-s-Motichoor-Ladoo-.jpg", name: "Motichoor Laddoo 12pcs (360g) – Haldiram’s", des: "Haldiram's Motichoor Laddoo 12pcs (360g) is a product of India brought to you by Tales Of India. Get in touch with us for more information on Haldiram's Motichoor Laddoo 12pcs (360g).", price: "$1", type: "sweets", id: "A4", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/Bikaji-Meetha-Bandhan-Gift-Pack.jpg", name: "Meetha Bandhan Gift Pack 1.7kg – Bikaji", des: "Bikaji Meetha Bandhan Gift Pack (1.7kg) is a product of India brought to you by Tales Of India. Get in touch with us for more information on Bikaji Meetha Bandhan Gift Pack (1.7kg).", price: "$9", type: "sweets", id: "A5", qty: 1 },

    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/82e68e71564ce31de7fe4c9320bcacffd97126d2-1.png", name: "Coconut Hair Oil 200ml – Parachute", des: "Parachute Coconut Hair Oil 200ml is a product of India brought to you by Tales Of India. Get in touch with us for more information on Parachute Coconut Hair Oil 200ml.", price: "$3", type: "HealthandBeauty", id: "B1", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/11/amla-hair-oil-275ml.jpg", des:"Dabur Amla Hair Oil is enriched with the goodness of Amla that makes your hair long, strong and dark. It strengthens your hair from within and prevents pre-mature greying of hair. Dabur Amla Hair Oil makes your hair strong from root to tip. Massage a generous amount of oil on your scalp and hair and then wash it after one hour.", price: "$2", type: "HealthandBeauty", id: "B2", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/579411b0af0eaf5f1b73c77b91cd7b20ffc75205.jpg", name: "Bajaj Almond Oil Hair", des: "Bajaj Almond Oil Hair Drops 500ml non sticky hair oil have been famously known for their nourishing properties.  Bajaj Almond Oil Hair Drops 500ml is enriched with Vitamin E and Sweet Almond Oil.", price: "$4", type: "HealthandBeauty", id: "B3", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/11/Neem-Oil-100ml-Ashwin-download.jpg", name: "Ashwin Neem Oil 100ml is a product of India brought to you by Tales Of India. Ashwin Neem Oil is an amazing product which is used for multiple purposes. Get in touch with us for more information.", price: "$4", type: "HealthandBeauty", id: "B5", qty: 1 },

    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/162932658aef015d0070d375a4f1eca4e5eea254.jpg", name: "Deep Udupi Idli 255g", des: "Idli is a soft and moist steamed cake made from lentils and rice batter. It is one of the most healthiest protein packed breakfast option from South Indian food. Deep brings you Udupi Idli which is a South Indian vegetarian cuisine. Now you can enjoy idli at any time of the day without bothering about spending hours in kitchen. This rice and urid dal cake is simply irresistible.", price: "$4", type: "readytoeat", id: "C1", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/136ed9c9aca81caacd42c22c04f612b24f29757c.jpg", name: "Mysore Masala Dosa 4pc – Deep", des: "Dosa is a thin, crispy pancake originated from South India. It is a signature dish of South India which is usually served in breakfast. Deep brings you Mysore Masala Dosa that is crispy and soft dosa spiced with red chutney. It is spicy, has appetizing aroma and is stuffed with potatoes and onion. Deep Mysore Masala Dosa is ready-to-eat in 3-4 minutes. Serve it hot and enjoy it in breakfast with your family.", price: "$5", type: "readytoeat", id: "C2", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/082c1e877dd1ae333aeec2ff5118568f5fe0644c.png", name: "Mixed Veg Soup 42g – Knorr", des: "Knorr Mixed Veg Soup 42g is a healthy addition to your daily routine. Add in Knorr Mixed Veg Soup 42g for your general health maintenance now.", price: "$5", type: "readytoeat", id: "C3", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/Khaman-Dhokla-12pcs-256g-Haldiram-s-download.jpg", name: "VimKhaman Dhokla 12pcs (256g) – Haldiram’seral", des: "Dhokla is a vegetarian, steamed chick-pea cake found mainly in Gujarat, India. It is soft, spongy and has sweet and tangy taste. Haldiram’s brings you Khaman Dhokla that has authentic Gujarati taste. It minimizes your cooking efforts as it is ready-to-eat in minutes. Haldiram’s Khaman Dhokla can be eaten in breakfast, as a main course or as an evening snack.", price: "$7", type: "readytoeat", id: "C4", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/3a48c042a511cbfe9777bf026dde24faf494603e.jpg", name: "Masala Dosa 4Pc – Deep", des: "Deep Udupi Masala Dosa 4Pc is a variation of the poluar South Indian dosa and it is a delicacy of Karnataka cuisine. Deep Udupi Masala Dosa 4Pc is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar. It is popular in South India dish.", price: "$6", type: "readytoeat", id: "C5", qty: 1 },

    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/91a65901cadb82bed971c102e95e3cd1360f428d.png", name: "Thums up Can 300ml", des: "Thums Up is Indian carbonated drink that has strong spicy and fizzy taste. It is a bold and refreshing carbonated drink. It is one of the most loved soft-drink that is perfect for any gathering or can be enjoyed even in simple moments. Bring out the adventurous side of you with Thums Up. Also available in 2.25L pack", price: "$2", type: "beverages", id: "D1", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/Tang-Lemon-500g.jpg", name: "Tang Lemon 500g", des: "Make your summers cool with a chilled glass of Lemon Tang. It has a great lemon taste and is nutritious as well. It is enriched with iron, minerals and Vitamins that makes it a better choice than other drinks. This lemon-flavored drink is loved by both kids and adults. Enjoy Lemon Tang with your friends and family this summer. Comes in a powder form.", price: "$3", type: "beverages", id: "D2", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/b6966a3312fbdbc3114bf38adf9c2a3df0d1381e.png", name: "Hamdard Rooh Afza (India) 750ml", des: "Hamdard Rooh Afza is a cool blend of herbs. It is a refreshing drink that is a perfect treat on a hot summer day. Hamdard Rooh Afza is a nutritious drink that which is prepared from natural ingredients. You can add it in water to make a lal sharbat or can be added in milk. Hamdard Rooh Afza can also be used to make moctkatil, slush and other dessert of your choice.", price: "$2", type: "beverages", id: "D3", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/11/Frooti-Mango-Drink-200ml-Parle-Agro-download.jpg", name: "Frooti Mango Drink 200ml – Parle Agro", des: "Frooti Mango Juice is made from real mango pulp. It is full of flavor and so refreshing that every sip feels like eating real mango. It is rich in Vitamins so it is a fun way of giving your child all the energy he needs. Frooti Mango Juice can be used in your favorite dessert recipes. No artificial color or flavor added. Serve chilled.", price: "$4", type: "beverages", id: "D4", qty: 1 },
    { src: "https://talesofindia.com.au/wp-content/uploads/2021/10/c7f3bbe05f9bcf0485eb9657fe718dc8f292ee5b.jpg", name: "Pepsi Max [Sugar Free] 375ml (Can)", des: "Pepsi is an internationally recognized drink that compliments any food. It is a bold and refreshing carbonated cola drink. Pepsi is one of the most loved soft-drink that is perfect for any gathering or can be enjoyed even in simple moments. It is now available in sugar-free version for those who are calorie cautious. Pepsi Max has zero calories and is sugar-free.", price: "$4.5", type: "beverages", id: "D5", qty: 1 }]
  },
  methods: {
    toogleproduct: function () {
      this.isproduct = true;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = false;
    },
    toogleabout: function () {
      this.isproduct = false;
      this.isabout = true;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = false;
    },
    tooglecontact: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = true;
      this.isfeedback = false;
      this.islogin = false;
    },
    tooglefeedback: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = true;
      this.islogin = false;
    },
    tooglelogin: function () {
      this.isproduct = false;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = true;
    },
    toogleproduct: function () {
      this.isproduct = true;
      this.isabout = false;
      this.iscontact = false;
      this.isfeedback = false;
      this.islogin = false;
    },
    tooglesweets: function () {
      this.issweets = true;
      this.isreadytoeat = false;
      this.isHealthandBeauty = false;
      this.isbeverages = false;
    },
    tooglereadytoeat: function () {
      this.issweets = false;
      this.isreadytoeat = true;
      this.isHealthandBeauty = false;
      this.isbeverages = false;
    },
    toogleHealthandBeauty: function () {
      this.issweets = false;
      this.isreadytoeat = false;
      this.isHealthandBeauty = true;
      this.isbeverages = false;
    },
    tooglebeverages: function () {
      this.isb = false;
      this.isreadytoeat = false;
      this.isHealthandBeauty = false;
      this.isbeverages = true;
    },
    contains: function (obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }
      return false;
    },

    mounted() {
      const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = () => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      };
      loginBtn.onclick = () => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      };
      signupLink.onclick = () => {
        signupBtn.click();
        return false;
      };
      // login1.onclick = () => {
      //    @click="toogleproduct";
      // }
    },

    add: function (id) {
      for (let i = 0; i < this.products.length; i++) {
        var qty = 0;

        if (this.products[i].id == id) {
          if (this.contains(this.products[i], this.cart)) {
            for (let j = 0; j < this.cart.length; j++) {
              if (this.cart[j].id == id) {
                this.cart[j].qty += 1;
              }
            }

            console.log("alreay there");
          }
          else {
            this.cart.push(this.products[i]);
          }
        }
      }
    },
    remove: function (id) {
      for (let i = 0; i < this.products.length; i++) {
        var qty = 0;

        if (this.products[i].id == id) {
          if (this.contains(this.products[i], this.cart)) {
            for (let j = 0; j < this.cart.length; j++) {
              if ((this.cart[j].id == id) && (this.cart[j].qty >= 1)) {
                this.cart[j].qty -= 1;
                if (this.cart[j].qty == 0) {
                  this.cart.pop(this.products[j]);
                }
              }
            }
          }
          else {
            // this.cart.push(this.products[i]);
          }
        }
      }
    },
    myfunc: function() {
      alert("Thank you for shopping with us");
    }
  }
})
