let users = (!localStorage.getItem('users'))?[]:JSON.parse(localStorage.getItem('users'));
let loggedUser=(localStorage.getItem('loggedUser'))?JSON.parse(localStorage.getItem('loggedUser')):{password:''};
let logged=(!localStorage.getItem('logged'))?false:JSON.parse(localStorage.getItem('logged'));
let siteRoute=(window.location.pathname == '/')?"/index.html" :window.location.pathname;
let accountLinks=document.querySelectorAll('a[href="account.html"]');
let accountName=document.getElementById('accountName');
let cartItems=(!localStorage.getItem('cartItems'))?[]:JSON.parse(localStorage.getItem('cartItems'));
const cartItemsNo=document.querySelectorAll('.cartItemsNo');
const noCartItems=document.getElementById('noCartItems');
let map;
let area;
let orders=[
   {
    id:3,
   itemType:"meal",mostRequested:true,categoryId:4,
popular:false,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
     bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"],
    name:"Dummy Food Item",
    price:30,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
},
  {
    id:3,
   itemType:"dish",
   mostRequested:true,
   ctaegoryId:1,
    popular:true,liked:false, 
    srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:30,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5
},
   {
    id:4,
   itemType:"meal",mostRequested:true,categoryId:4,
popular:false,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"],
    name:"Dummy Food Item",
    price:30,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
},
  {
    id:4,
   itemType:"dish",
   mostRequested:true,
   ctaegoryId:1,
   popular:false,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:30,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5
},
   {
    id:5,
   itemType:"meal",mostRequested:true,categoryId:4,
popular:false,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:30,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
},
  {
    id:5,
   itemType:"dish",
   mostRequested:true,
   ctaegoryId:1,
    popular:false,liked:false, 
    srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:30,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5
}
]
const initialMeals=[
    {
    id:5,
   itemType:"meal",mostRequested:true,categoryId:4,
popular:false,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"],
    name:"Dummy Food Item",
    price:30,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
    bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},{
    id:6,
  itemType:"meal",mostRequested:true,categoryId:5,
popular:false,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:70,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
     bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},
{
    id:7,
  itemType:"meal",mostRequested:true,categoryId:5,
popular:false,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ], 
   srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:100,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
     bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},{
    id:8,
  itemType:"meal",mostRequested:true,categoryId:5,
popular:true,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:50,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
     bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},{
    id:9,
  itemType:"meal",mostRequested:true,categoryId:5,
popular:true,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:30,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
     bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},                                 
{
    id:1,
  itemType:"meal",mostRequested:false,categoryId:6,
popular:true,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ], 
   srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:30,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
     bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},{
    id:2,
  itemType:"meal",mostRequested:false,categoryId:6,
popular:true,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:70,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
   bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},
{
    id:3,
  itemType:"meal",mostRequested:false,categoryId:6,
popular:true,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:100,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
    bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]

},{
    id:4,
  itemType:"meal",mostRequested:false,categoryId:6,
popular:true,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:50,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
    bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]

},{
    id:5,
  itemType:"meal",mostRequested:false,categoryId:6,
popular:true,liked:false, 
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
   reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    srcImage:"images/meal.png",
    name:"Dummy Food Item",
    price:30,
    details1:"Whole Onion Rings Stuffed With Cheese,",
    details2:"Served With Free Sauce",
    bannerImages:["images/meal.png","images/meal.png","images/meal.png","images/meal.png"]
},
] 
const initialDishes=[
    {
    id:5,
   itemType:"dish",mostRequested:true,ctaegoryId:2,
popular:true,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:30,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:3,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:2,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5,
},{
    id:6,
  itemType:"dish",mostRequested:true,ctaegoryId:2,
popular:true,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:70,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'60k',
    rate:4.6
},
{
    id:7,
  itemType:"dish",mostRequested:true,ctaegoryId:2,
popular:true,liked:false,  
    srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:100,
     fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'7k',
    rate:4.8
},{
    id:8,
  itemType:"dish",mostRequested:true,ctaegoryId:3,
popular:false,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:50,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'8k',
    rate:4.2
},{
    id:9,
  itemType:"dish",mostRequested:true,ctaegoryId:3,
popular:false,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:30,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'4k',
    rate:3
},                                 
{
    id:1,
  itemType:"dish",mostRequested:false,ctaegoryId:3,
popular:false,liked:false,  
    srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:30,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5
},{
    id:2,
  itemType:"dish",mostRequested:false,ctaegoryId:3,
popular:false,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:70,
     fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:4.6
},
{
    id:3,
  itemType:"dish",mostRequested:false,ctaegoryId:4,
popular:false,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:100,
    fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5
},{
    id:4,
  itemType:"dish",mostRequested:false,ctaegoryId:4,
popular:true,liked:false, 
     srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:50,
     fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5
},{
    id:5,
  itemType:"dish",mostRequested:false,ctaegoryId:4,
popular:true,liked:false, 
  srcImage:"images/dish.png",
    bannerImages:["images/dish.png","images/dish.png","images/dish.png","images/dish.png"],
    name:"Dummy Food Item",
    price:30,
   fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    dishComponents:['4 Piece Chicken',"4 Piece Chicken"],
      reviews:
   [
     {
        reviewerName:"Ahmed Mohamed",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Asmaa Hassan",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    },
    {
        reviewerName:"Taha Saas",
        rate:5,
        reviewMessage:"“There are many variations of passages of Lorem Ipsum available,to majority have into the find end to suffered.”"
    }
   ],
    noOfReviwes:'89k',
    rate:5
},
]

let meals;
if(localStorage.getItem('meals'))
    meals=JSON.parse(localStorage.getItem('meals'));
else{
    meals=initialMeals;
    localStorage.setItem("meals",JSON.stringify(initialMeals));
}

let dishes;
if(localStorage.getItem('dishes'))
    dishes=JSON.parse(localStorage.getItem('dishes'));
else{
    dishes=initialDishes;
    localStorage.setItem("dishes",JSON.stringify(initialDishes));
}

function findMostRequestedOrder(arrayName){
     const mostRequestedData= arrayName.filter(mostRequested);
   return mostRequestedData;
}
function mostRequested(item){
    
     return item.mostRequested;
}

let mostRequestedOrders=[...findMostRequestedOrder(meals),...findMostRequestedOrder(dishes)];

function getPopularDishes(){
 const popularDishes= dishes.filter(isPopular);
   return popularDishes;
}

function isPopular(item) {
     return item.popular;
}

let popularDishes=getPopularDishes();
    
let offers=[
    {id:1,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:70 ,
    srcImage:"images/offer.png"},
    {id:2,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:30 ,
    srcImage:"images/offer.png"},
    {id:3,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],

    offerTitle:"Save",
    offerPrecntage:75 ,
    srcImage:"images/offer.png"},
    {id:4,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:20 ,
    srcImage:"images/offer.png"},
    {id:5,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:65 ,
    srcImage:"images/offer.png"},
    {id:6,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:80 ,
    srcImage:"images/offer.png"},
    {id:7,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:35 ,
    srcImage:"images/offer.png"},
    {id:8,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:55 ,
    srcImage:"images/offer.png"},
    {id:9,
    name:"Dummy Offer Name",itemType:'offer', fullDetails1:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    fullDetails2:` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    bannerImages:["images/offer.png","images/offer.png","images/offer.png","images/offer.png"],
    offerTitle:"Save",
    offerPrecntage:65 ,
    srcImage:"images/offer.png"},
]

let categories=[
    {id:1,
    srcImage:"images/category.png",
    name:"Category 1",
    NoOfItems:25
    },
     {id:2,
    srcImage:"images/category.png",
    name:"Category 2",
    NoOfItems:40
    },
     {id:3,
    srcImage:"images/category.png",
    name:"Category 3",
    NoOfItems:12
    }, {id:4,
    srcImage:"images/category.png",
    name:"Category 1",
    NoOfItems:25
    }, {id:5,
    srcImage:"images/category.png",
    name:"Category 1",
    NoOfItems:25
    }, {id:6,
    srcImage:"images/category.png",
    name:"Category 1",
    NoOfItems:25
    }
];

if(logged){
    showNavProfileData();
     accountName.innerHTML=`${loggedUser.firstName} ${loggedUser.lastName}`
    if(siteRoute == '/newPassword.html' || siteRoute == '/foregtPassword.html' || siteRoute == '/VerificationCode.html' 
        || siteRoute == '/login.html' || siteRoute == '/signUp.html' )
        window.location.href="index.html";
}
else{
    showNavLoginOptions();
     if(siteRoute == '/account.html' || siteRoute == '/checkout.html')
                window.location.href="index.html";
}

displayCartNumbersPage();

//Navbar Controls
function showNavLoginOptions(){
        let profiles=document.querySelectorAll('.profile')
        profiles.forEach(profile => profile.classList.add('d-none'));
        let loginRegisters=document.querySelectorAll('.loginRegister');
        loginRegisters.forEach(loginRegister=> loginRegister.classList.remove('d-none'));  
}
function showNavProfileData(){
        let profiles=document.querySelectorAll('.profile')
        profiles.forEach(profile => profile.classList.remove('d-none'));
        let loginRegisters=document.querySelectorAll('.loginRegister');
        loginRegisters.forEach(loginRegister=> loginRegister.classList.add('d-none'));
}

//To set nav link partion to open on personal info section in account page
accountLinks.forEach(accountLink => {
    accountLink.addEventListener('click' ,(e)=>{
        e.preventDefault();
        localStorage.setItem('profileSectionName','personalInfo')
        window.location.href="account.html";
    })
});

                            
//Routes
switch(siteRoute){
     case "/index.html":
        index();
        break;
    case "/dishes.html":
        displayDishes();
        break;
    case "/menu.html":
        showMenu();
        break;
    case '/orders.html':
        showOrders();
        break;
    case "/categories.html":
        showCategories(categories);
        break;
    case "/offers.html":
          showAllOffers();
          break;
    case "/singleDish.html":
         displayDishPage();
         break;
     case "/singleOffer.html":
         displayOfferPage();
         break;
     case "/singleMeal.html":
         displayMealPage();
         break;
    case "/signUp.html" :
        signUpEvent();
        break;
    case "/login.html":
        login();
        break;
    case "/account.html":
        account();
        break;
    case '/cart.html':
        cart();
        break;
    case '/checkout.html':
        checkout();
        break;
    case "/payment.html":
        payment();
        break;
   case "/contact.html":
     contact();
    break;
    default:break;
}

//INdex page Creation
function index(){
    displayIndexCategories(categories);
    displayIndexOffers(offers);
    displayCards('ordersContainer',mostRequestedOrders);
    displayCards('dishesContainer',popularDishes);
}


function createIndexCard(data,className=""){
 const indexClass=(className)?className:"col-md-6  col-lg-4 col-xxl-3 ";
 const superNode=createElement('div',indexClass); 
 const parentContainer=createElement('div',"bg-white h-100 rounded-6 d-flex flex-column px-3 py-4 position-relative ",['id'],[`${data.itemType}_${data.id}`]);
 let InsideMealContainer=createElement('div',data.itemType);
 const generalMeaLImageContainer=createCardImage(data.srcImage,`${data.itemType} Photo`);
 InsideMealContainer.appendChild(generalMeaLImageContainer);
 switch(data.itemType){
    case "dish" :
        InsideMealContainer=createDishCard(data,InsideMealContainer);
        break;
    case "meal" :
            InsideMealContainer=CreateOrderCard(data,InsideMealContainer);
            break;
    default:break;
 }
 navigateToPageFullInfoAfterCardClicking(InsideMealContainer,data);
 const wishCartContainer=createElement('div',"");
 const addtOCartBtn=createAddToCartBtn(data);
 const wishlistIcon=createWishlistIcon(data);
 wishCartContainer.appendChild(addtOCartBtn);
 wishCartContainer.appendChild(wishlistIcon);
parentContainer.appendChild(InsideMealContainer);
parentContainer.appendChild(wishCartContainer);
superNode.appendChild(parentContainer);
return superNode;
}


function displayIndexCategories(categories){
   const displayedCategories=categories.splice(0,3);
   const seeAllCategories=document.getElementById('seeAllCategories');
   const categoriesParent=document.getElementById('categories');
   createAllCategories(displayedCategories,categoriesParent,seeAllCategories,true);
}
function createAllCategories(cateoriesInfo,categoriesContainer,seeAllCategories={},index=false){
    cateoriesInfo.forEach(category => {
    const categoryCard=createCategoryCard(category);
    if(index) categoriesContainer.insertBefore(categoryCard,seeAllCategories);
    else categoriesContainer.appendChild(categoryCard);
   })
}

function createCategoryCard(category){
    const categorySuperNode=createElement('div',"col-md-6 col-xl-3");
    const categoryParentContainer=createElement('div',"container-fluid bg-site rounded-6 category",["aria-label"],[`category_${category.id}`]);
    const categoryRow=createElement('div',"row  p-3 align-items-center gx-4");
    const categoryImage=addCategoryImage(category);
    categoryRow.appendChild(categoryImage);
    const categoryInfo=addCategoryInfo(category);
    categoryRow.appendChild(categoryInfo);
    categoryParentContainer.appendChild(categoryRow);
    categorySuperNode.appendChild(categoryParentContainer);
    return categorySuperNode;
}

function addCategoryImage(category){
const superNode=createElement('div',"col-2 col-md-3 col-lg-2 col-xl-4 col-xxl-3");
const imageParent=createElement('div',"");
const image=createElement('img',"W-100",["src","alt","id"],[category.srcImage,"category icon",`category_${category.id}`]);
imageParent.appendChild(image);
superNode.appendChild(imageParent);
return superNode;
}

function addCategoryInfo(category){
    const superNode=createElement('div',"col-10 col-md-9 col-lg-7 col-xl-8 col-xxl-9");
    const infoParent=createElement('div',"");
    const categoryName=createElement('h6',"text-black",[],[],category.name);
    const categoryItemsParent=createElement('p',"d-flex align-items-center fs-7 mb-0");
    const icon=createElement('i',"fa-solid fa-star text-link");
    const itemsNo=createElement('span',"text-muted fw-light ps-1",[],[],`${category.NoOfItems} Items`);
    categoryItemsParent.appendChild(icon);
    categoryItemsParent.appendChild(itemsNo);
    infoParent.appendChild(categoryName);
    infoParent.appendChild(categoryItemsParent);
    superNode.appendChild(infoParent);
    return superNode;
}

//offer part
function displayIndexOffers(offers){
    const carsouelContainer=document.getElementById("carsouelContainer");
    const displayedOffers=divideIntoSubarrays(offers,5);
    displayedOffers.forEach((displayOffer,index) => {
       const carsouelItem= createCarsouelOfferItem(index,displayOffer);
       carsouelContainer.appendChild(carsouelItem);
    })
    return carsouelContainer;
}                                                
                                                       
function divideIntoSubarrays(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
function createCarsouelOfferItem(index,carsouelOffersItems){
    const active=(index == 0 )?"active":"";
    const carsouelItemContainer=createElement('div',`carousel-item ${active}`);
    const carsouelRow=createElement('div',"row g-3 flex-nowrap");
    carsouelItemContainer.appendChild(carsouelRow);
    carsouelOffersItems.forEach((carsouelOffersItem,cardPosition) => {
        const offerCard=createOfferCard(carsouelOffersItem,cardPosition);
        carsouelRow.appendChild(offerCard);
    })
    return carsouelItemContainer;
}

// creat oFFER cRAD

function showAllOffers(){
    const offersContainer=document.getElementById('offersContainer');
    offers.forEach(offer => {
        const offerCard=createOfferCard(offer,4);
        offersContainer.appendChild(offerCard);
    })

}

function getSuperNodeClassValue(cardPosition){
    let superNodeClass;
    switch(cardPosition){
    case 0 : superNodeClass="col-md-6  col-lg-4 col-xxl-3 ";break;
    case 1 :superNodeClass="col-md-6  col-lg-4 col-xxl-3  d-none d-md-block";break;
    case 2 :superNodeClass="col-md-6  col-lg-4 col-xxl-3  d-none d-lg-block";break;
    case 3 :superNodeClass="col-md-6  col-lg-4 col-xxl-3  d-none d-xxl-block";break;
    case 4 :superNodeClass="col-md-6 col-lg-4 col-xxl-3 " ;break;
    case 5 :superNodeClass="col-12 col-sm-6 col-lg-12";break;
    default :superNodeClass="col-md-6  col-lg-4 col-xxl-3";break;
};
return superNodeClass;
}
function createOfferCard(offer,cardPosition=0){
const   superNodeClass=getSuperNodeClassValue(cardPosition);
const superNode=createElement('div',superNodeClass);
const parentContainer=createElement('div',"bg-white rounded-6 offer",['id'],[`${offer.itemType}_${offer.id}`]);
const innerContainer =createElement('div',"row py-4 rounded-5 align-items-center");
let offerInfoContainer=createElement('div',"col-5 offset-1");
const offerImageCon=createElement('div',"col-6");
offerImageCon- createOfferImage(offerImageCon,offer);
offerInfoContainer=createOfferCardDetails(offerInfoContainer,offer);
innerContainer.appendChild(offerInfoContainer);
innerContainer.appendChild(offerImageCon);
parentContainer.appendChild(innerContainer);
superNode.appendChild(parentContainer);
navigateToPageFullInfoAfterCardClicking(superNode,offer);
return superNode;
}

function createOfferCardDetails(offerInfoCon,offer){
     const offerInfoContainer=createElement('div',"fs-side-headers pt-3 pb-2 lh-sm text-main rounded-5 fs-1 fw-bold d-flex justify-content-center align-items-center flex-column shadow")
     const offerTitle=createElement('div',"",[],[],offer.offerTitle);
     const offerPrecntage=createElement('div',"",[],[],`${offer.offerPrecntage}%`);
     offerInfoContainer.appendChild(offerTitle);
     offerInfoContainer.appendChild(offerPrecntage);
     offerInfoCon.appendChild(offerInfoContainer);
   return offerInfoCon;
}
function createOfferImage(offerImageCon,offer){
    const parentNode=createElement('div',"");
    const image=createElement('img',"w-100",['src','alt'],[offer.srcImage,`${offer.itemType} image`]);
     parentNode.appendChild(image);
    offerImageCon.appendChild(parentNode);
 return offerImageCon;
}
function navigateToPageFullInfoAfterCardClicking(itemTag,Data){
           itemTag.addEventListener('click' ,()=> {
                        localStorage.setItem("itemPageType",Data.itemType);
                        localStorage.setItem("itemId",Data.id);
                        localStorage.setItem(`${Data.itemType}Info`,JSON.stringify(Data));
                        setTimeout(checkPage,0,Data);                    })
}


function checkPage(Data){
                    if(Data.itemType == 'meal')
                        window.location.href = 'singleMeal.html';
                    else if(Data.itemType == 'dish')
                         window.location.href = 'singleDish.html';
                     else
                        window.location.href = 'singleOffer.html';
}

function displayDishes(){
    displayCards('dishesContainer',dishes);   
}

function  showMenu(){
displayCards('dishesContainer',dishes); 
displayCards('mealContainers',meals);
}

function displayCards(containerId,displayedArray,className=""){
     const Container =document.getElementById(containerId);
        displayedArray.forEach(arrayItem=>{
        let itemCard=createIndexCard(arrayItem,className);
         Container.appendChild(itemCard);
    })
}

function showCategories(categories){
    const categoriesContainer=document.getElementById('categoriesContainer');
    createAllCategories(categories,categoriesContainer)
}

function showOrders(){
displayCards('latestOrders',mostRequestedOrders);
}

//display single meal details
function displayDishPage(){
    const relatedItems=dishes.slice(1,6);
    displaySingleItemPageDetails("dish",relatedItems);
  
}
function displaySinglePageName(mealDetails){
    const mealName=document.getElementById('singlePageName');
    mealName.innerHTML=mealDetails.name;
}
function displaySinglePageBannerPhoto(mealDetails){
     const mainBannerImage=document.getElementById('mainBannerImage');
    mainBannerImage.src=mealDetails.srcImage;
}
function displaySinglePagesBannersPhoto(mealDetails){
    const bannerImages=document.querySelectorAll('.singlePageImages');
    bannerImages.forEach((bannerImage,index) => {
            bannerImage.src=mealDetails.bannerImages[index];
    })
}
function displaySinglePageDeetails(mealDetails){
    const detailsPart1=document.getElementById('detailsPart1');
    detailsPart1.innerHTML=mealDetails.fullDetails1;
    const detailsPart2=document.getElementById('detailsPart2');
        detailsPart2.innerHTML=mealDetails.fullDetails2;
}

function displayMealReviews(reviews){
const reviewContainer=document.getElementById('reviewContainer');
reviews.forEach(review => {
    reviewContainer.appendChild(createMealReviewCard(review));
})
}
                                                      
function createMealReviewCard(review){
const reviewSuperNode=createElement('div',"comment col-12 border border-1 border-light-2 p-3 rounded-6 d-flex flex-column flex-md-row mb-3");
const parentNode=createElement('div',"row  align-items-center");
const reviewOwnerData=createReviewOwnerData(review);
parentNode.appendChild(reviewOwnerData);
const reviewMessage =displayReviewMessage(review);
parentNode.appendChild(reviewMessage);
reviewSuperNode.appendChild(parentNode);
return reviewSuperNode;
}
function createReviewOwnerData(review){
    const container=createElement('div',"col-md-4 col-lg-12 col-xxl-3");
    const reviewDataSuperNode=createElement('div',"d-flex align-items-center border-review");
    const reviewerUserICon=createReviewerUserICon();
    reviewDataSuperNode.appendChild(reviewerUserICon);
    const reviewOwnerNameAndRate=createReviewOwnerNameAndRate(review);
    reviewDataSuperNode.appendChild(reviewOwnerNameAndRate);
    container.appendChild(reviewDataSuperNode);
    return container;
}
function createReviewerUserICon(){

    const parentNode=createElement('div',"pe-3");
    const innerContainer=createElement('span',"rounded-circle  bg-site p-3 user-review-icon text-main");
    const userImageIcon=createElement('i',"fa-solid fa-lg py-2 fa-user");
    innerContainer.appendChild(userImageIcon);
    parentNode.appendChild(innerContainer);
    return parentNode;
}

function createReviewOwnerNameAndRate(review){
    const superNode=createElement('div',"d-flex flex-column align-items-start");
    const reviewerName=createElement('h6',"text-black fs-9 mb-2  no-wrap",[],[],review.reviewerName);
    superNode.appendChild(reviewerName);
    const rateContainer=createRateValue(review);
    superNode.appendChild(rateContainer);
    return superNode;
}
function createRateValue(review){
  let rateSuperNode=createElement('div',"d-flex align-items-center justify-content-center flex-nowrap");
 rateSuperNode =displayRateIcons(review,rateSuperNode);
  return rateSuperNode;
}
function displayRateIcons(review,rateSuperNode){
  
  for(let i=1 ; i<=5 ; i ++){
  if(i <= review.rate)
    rateSuperNode.appendChild(createElement('i',"fa-solid fa-star fa text-link"));
  else
      rateSuperNode.appendChild(createElement('i',"fa-regular fa-star fa text-link"));
  }
  return rateSuperNode;
}

function displayReviewMessage(review){
const container=createElement('div',"col-md-8 col-lg-12 mt-lg-3 mt-xxl-0 col-xxl-9");
const messageSuperNode=createElement('div',"fs-9 ps-3 pt-3 pt-md-0");
const message=createElement('p',"text-black mb-0",[],[],review.reviewMessage);
messageSuperNode.appendChild(message);
container.appendChild(messageSuperNode);
return container;
}

function displaySinglePageOffers(displayedOffers){
    const reviewOffersContainer=document.getElementById('reviewOffersContainer');
    displayedOffers.forEach(offer =>{
        const offerCard=createOfferCard(offer,5)
        reviewOffersContainer.appendChild(offerCard);
    })
}
////////
function displayOfferPage(){
        const relatedItems=meals.slice(1,6);
        displaySingleItemPageDetails("offer",relatedItems);
}

function displayMealPage(){
    const relatedItems=meals.slice(1,6);
    displaySingleItemPageDetails("meal",relatedItems);
}

function displaySingleItemPageDetails(item,relatedItems){
    const mealDetails=JSON.parse(localStorage.getItem(`${item}Info`));
    displaySinglePageName(mealDetails);
    displaySinglePageBannerPhoto(mealDetails);
    displaySinglePagesBannersPhoto(mealDetails);
    displaySinglePageDeetails(mealDetails);
    if(item != "offer")
        displayMealReviews(mealDetails.reviews);
    else
    {
        const offerPrecntage=document.getElementById('offerPrecntage');
        offerPrecntage.innerHTML=`${mealDetails.offerPrecntage}%`;
        const offerTitle=document.getElementById('offerTitle');
        offerTitle.innerHTML=mealDetails.offerTitle;
    }
    const displayedOffers=offers.slice(0,2);
    displaySinglePageOffers(displayedOffers);
    displayRelatedProducts(relatedItems);
}
function displayRelatedProducts(relatedItems){
    displayCards('relatedItemsContainer',relatedItems,"col-sm-6  col-lg-4 col-xxl-3");
}

//Commom Functions for all cards
function createCardImage(srcImage,altValue){
    const orderMeaLImageContainer=createElement('div',"text-center");
    let  OrderImage;
    if(altValue == "meal Photo")
     OrderImage=createElement('img',"meal-image mb-4 pb-3",["src","alt"],[srcImage],altValue);
    else  OrderImage=createElement('img',"meal-image pb-1",["src","alt"],[srcImage],altValue);
    // const  OrderImage=createElement('img',"meal-image",["src","alt"],[srcImage],altValue);
    orderMeaLImageContainer.appendChild(OrderImage);
    return orderMeaLImageContainer;
}
function createAddToCartBtn(ItemData){
   
    let container=createElement('div', "pt-3");
    const btn=createElement('button',"btn btn-light-2 w-100 rounded-6 addToCart");
    const cartIcon=createElement('i',"fa-solid fa-cart-shopping pe-2");
    const cartOption=createElement('span',"",[],[],"Add To Cart");
    btn.appendChild(cartIcon);
    btn.appendChild(cartOption);
    btn.addEventListener('click',()=>{
        addCartItem(ItemData)
    })
    container.appendChild(btn);
    return container;
}

function createWishlistIcon(ItemData){
    const wishListClass=(ItemData.liked)?'wishlist-icon-clicked':"wishlist-icon";
    const wishContainer=createElement('span',`border border-1  rounded-circle ${wishListClass}`);
    const wishICON=createElement('i',"fa-solid fa-heart text-main");
    wishContainer.appendChild(wishICON);
    wishContainer.addEventListener('click',()=>{
              wishContainer.classList.toggle('wishlist-icon');
              wishContainer.classList.toggle('wishlist-icon-clicked');
              if(ItemData.liked) ItemData.liked=false;
              else ItemData.liked=true;
             uodateLocalStorageDishesAndMenu(ItemData)
    })
    return wishContainer;
}

function uodateLocalStorageDishesAndMenu(ItemData){
  if(ItemData.itemType == "dish")
    localStorage.setItem('dishes', JSON.stringify(dishes));
  else if(ItemData.itemType == "meal"){
    localStorage.setItem('meals', JSON.stringify(meals));
     console.log('inside')
  }
  
}

function CreateOrderCard(orderData,InsideMealContainer){
 const orderMealInfoContainer=createElement('div',"d-flex justify-content-between fw-bolder py-3");
 const name=createElement('span',"text-black",[],[],orderData.name);
 const price=createElement('span',"text-main",[],[],`${orderData.price}$`);
 orderMealInfoContainer.appendChild(name);
 orderMealInfoContainer.appendChild(price);
 const orderMealDetailsContainer=createElement('div',"text-light-2 fs-7 d-flex flex-column");
 const details1=createElement('span',"",[],[],orderData.details1);
 const details2=createElement('span',"",[],[],orderData.details2);
 orderMealDetailsContainer.appendChild(details1);
 orderMealDetailsContainer.appendChild(details2);
 InsideMealContainer.appendChild(orderMealInfoContainer);
 InsideMealContainer.appendChild(orderMealDetailsContainer);
return  InsideMealContainer
}

//Create Dish Card
function createDishCard(data,InsideMealContainer){
    const priceReviewInCard=createPriceReviewInCard(data);
    InsideMealContainer.appendChild(priceReviewInCard);
    const foodCaption=createFoodCaption(data);
    InsideMealContainer.appendChild(foodCaption);
    return InsideMealContainer;
}
function createPriceReviewInCard(dishData){ 
  const PriceReviewContainer=createElement('div',"d-flex justify-content-between align-items-center fw-bolder pt-3 pb-1 border-bottom border-1");
  const priceTag=createElement('span',"text-main fs-5",[],[],`${dishData.price}$`);
  const reviewContainer=createElement('div',"d-flex align-items-center");
  const reviewIcon=createElement('i',"fa-solid  fa-star text-link");
  const rateContainer=createElement('div',"ps-1 fs-7 text-black fw-light");
  const rate=createElement('span',"",[],[],dishData.rate);
  const reviewedUsersN0=createElement('span',"",[],[],`(${dishData.noOfReviwes})`);
  rateContainer.appendChild(rate);
  rateContainer.appendChild(reviewedUsersN0);
  reviewContainer.appendChild(reviewIcon);
  reviewContainer.appendChild(rateContainer);
  PriceReviewContainer.appendChild(priceTag);
  PriceReviewContainer.appendChild(reviewContainer);
 return PriceReviewContainer;
}

function createFoodCaption(dishData){
    const foodCaptionContainer=createElement('div','food-caption');
    const foodName=createElement('h6',"text-black py-3",[],[],dishData.name);
        foodCaptionContainer.appendChild(foodName);
        dishData.dishComponents.forEach(dishItem => {
            let item=createDishComponents(dishItem);
        foodCaptionContainer.appendChild(item);
        })
    return foodCaptionContainer;
}

function createDishComponents(component){
    const container=createElement('div',"d-flex align-items-center");
    const icon=createElement('i',"fa-regular fa-circle-check text-link");
    const dishComponent=createElement('span',"ps-2 fs-7 text-black fw-light",[],[],component);
    container.appendChild(icon);
    container.appendChild(dishComponent);
    return container;
}


// sign up process
function signUpEvent(){
      const signUPForm=document.getElementById('signUPForm');
        checkInputValidation(signUPForm.children[0].children[0].children[1],validateName,signUPForm.children[0].children[1],signUPForm);
        checkInputValidation(signUPForm.children[1].children[0].children[1],validateName,signUPForm.children[1].children[1],signUPForm);
        checkInputValidation(signUPForm.children[2].children[0].children[1],validatePhoneNumber,signUPForm.children[2].children[1],signUPForm);
        checkInputValidation(signUPForm.children[4].children[0].children[1],ValidateMail,signUPForm.children[4].children[1],signUPForm);
        checkInputValidation(signUPForm.children[5].children[0].children[1],validatePassword,signUPForm.children[5].children[1],signUPForm);
        checkInputValidation(signUPForm.children[3].children[0].children[1],validateDate,signUPForm.children[3].children[1],signUPForm);
        signUPForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(validateName(signUPForm.children[0].children[0].children[1].value) && validateName(signUPForm.children[1].children[0].children[1].value) 
             && validatePhoneNumber(signUPForm.children[2].children[0].children[1].value)
             && ValidateMail(signUPForm.children[4].children[0].children[1].value) 
             &&validateDate(signUPForm.children[3].children[0].children[1].value) 
             && validatePassword(signUPForm.children[5].children[0].children[1].value)
             && signUPForm.children[5].children[0].children[1])
            {   if(!checkExistedUserByMail(signUPForm.children[4].children[0].children[1].value))
                {signUPForm.previousElementSibling.classList.add('d-none');
                signUp(signUPForm);
            }
                else{
                    signUPForm.previousElementSibling.classList.remove('d-none');
                    signUPForm.previousElementSibling.innerHTML=`User Already Exists.`
                }
            }
        else{
               signUPForm.previousElementSibling.innerHTML=`
                     Missing Data or Invalid Data Format.<br>
                     User hasn't been Added ! `
            signUPForm.previousElementSibling.classList.remove('d-none');
        }
    })
}

function checkExistedUserByMail(mail){
  let registeredUser=false;
  for(let user of users)
    if(user.mail==mail) {registeredUser=true;break;}
  return registeredUser;
}


function signUp(signUPForm){
       const userData = new FormData(signUPForm);
        const newUser={
            firstName :userData.get('firstName'),
            lastName: userData.get('lastName'),
            mail:userData.get('Mail'),
            phoneNumber:userData.get('phone'),
            birthDate:userData.get('birthDate'),
            gender:userData.get('gender'),
            password:userData.get('password'),
            getOfferDiscount:"No"
        }
        users.push({id:users.length+1,...newUser,addresses:[]});
        localStorage.setItem('users',JSON.stringify(users));
        window.location.href="login.html";
}


// login process
function login()
// if(siteRoute == '/login.html')
    {
        let loginForm=document.getElementById('loginForm');
        let mail= loginForm.children[0].children[0].children[1];
        let password=loginForm.children[2].children[0].children[1];
        let loginBtn=loginForm.children[4].children[0];
        let loggedPassword=false;
        let loggedMail=false;
        let userMail=false;
        mail.addEventListener('keyup',()=>{
           if( ValidateMail(mail.value)){
                    hideErrorBorder(mail);
                    hideElement(loginForm.children[1]);
                    loggedMail=true;
                    if(loggedMail && loggedPassword) loginBtn.disabled=false;

           }
           else{    showErrorBorder(mail);
                    hideErrorBorder(password);
                    showElement( loginForm.children[1],'Invalid E-mail Address');
                    hideElement(loginForm.children[3]);
                    loggedMail=false;
                    loginBtn.disabled=true
           }
        })
          password.addEventListener('keyup',()=>{
           if( validatePassword(password.value)){
                    hideErrorBorder(password);
                    hideElement( loginForm.children[3]);
                    loggedPassword=true;
                    if(loggedMail && loggedPassword) loginBtn.disabled=false;
           }
           else{  
                showErrorBorder(password);
                showElement(   loginForm.children[3],'Invalid Password');
                  loggedPassword=false;
                  loginBtn.disabled=true

           }
        })
     

          loginForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            for(const user of users){
               if(user.mail == mail.value){
                      hideErrorBorder(mail);
                      mail.classList.remove('border-error');
                      userMail=true;
                      if(user.password==password.value){
                          hideErrorBorder(password);
                          hideElement( loginForm.children[3]);
                          loggedUser=user;
                          localStorage.setItem('logged',true);
                          localStorage.setItem('loggedUser',JSON.stringify(loggedUser));
                          showNavProfileData();
                          accountName.innerHTML=`${loggedUser.firstName} ${loggedUser.lastName}`
                          window.location.href="index.html";
                      }else{
                          showErrorBorder(password);
                        showElement( loginForm.children[3],"Incorrect Password");
                      }
                      break;
               } else                       userMail=false;

            }
        // )   
            if(!userMail){
                    showErrorBorder(mail)
                    showElement( loginForm.children[1],"User doesn't exist");
                    hideElement( loginForm.children[3]);
                    hideErrorBorder(password);
            }  
        })
}

function signOut(){
                          localStorage.setItem('logged',false);
                          localStorage.removeItem('loggedUser');
                          showNavLoginOptions();
                          window.location.href='index.html';
}


async function account(){
    const currentSectionName=(localStorage.getItem('profileSectionName'))?localStorage.getItem('profileSectionName'):'personalInfo';
    const personalInformation=document.getElementById("personal-information");
    const addressDetails=document.getElementById("address-details");
    const editEmail=document.getElementById("edit-email");
    const changePassword=document.getElementById('change-password');
    const addNewAddress=document.getElementById('add-newAddress');
    const personalInfoBtn=document.getElementById('personalInfoBtn');
    const addressDetailsBtn=document.getElementById("addressDetailsBtn");
    const editEmailBtn=document.getElementById('editEmailBtn');
    const changePasswordBtn=document.getElementById('changePasswordBtn');
    const newAddressBtn=document.getElementById('newAddressBtn');
    const addAddressForm=document.getElementById('addAddressForm');
    const aptNo=document.getElementById('aptNo');
    const phone=document.getElementById("phone");
    const street=document.getElementById("street");
    const invalidData=document.getElementById('invalidData');
    const successMessage=document.getElementById('successMessage');
    const accountBtns=(document.querySelectorAll('button[id]'));
    const addressCards=document.getElementById("addressCards");
    const editEmailForm=editEmail.children[2];
    const noAddresse=addressDetails.children[0];
    const personalInfoForm=personalInformation.children[2];
    const changePassowrdForm=changePassword.children[2];
    displayActiveSectionLink(accountBtns,newAddressBtn);
    showLastProfileSection(noAddresse,currentSectionName,accountBtns,addressDetailsBtn,addressCards,personalInformation,addressDetails,editEmail,changePassword,addNewAddress);
    personalInfoBtn.addEventListener('click',()=> {setProfilePart('personalInfo',personalInformation,addressDetails,editEmail,changePassword,addNewAddress);
        checkPersonalInfoDataValidation(personalInfoForm);
        hideMessagesOnAccountSectionChoice(personalInfoForm.previousElementSibling.previousElementSibling,personalInfoForm.previousElementSibling);
        displayUserInfo(personalInfoForm);
    });
    addressDetailsBtn.addEventListener('click',()=>{
       displayAddressOrNoAddress(noAddresse,addressCards)
        setProfilePart('addressDetails',addressDetails,personalInformation,editEmail,changePassword,addNewAddress);
    });   
    editEmailBtn.addEventListener('click',()=> {setProfilePart('editEmail',editEmail,personalInformation,addressDetails,changePassword,addNewAddress);
        hideMessagesOnAccountSectionChoice(editEmailForm.previousElementSibling.previousElementSibling,editEmailForm.previousElementSibling);
        checkEditMailDataValidation(editEmailForm);
    });
    changePasswordBtn.addEventListener('click',()=> {setProfilePart('changePassword',changePassword,personalInformation,addressDetails,editEmail,addNewAddress);
        hideMessagesOnAccountSectionChoice(changePassowrdForm.previousElementSibling.previousElementSibling,changePassowrdForm.previousElementSibling)
        checkChangePasswordDataValidation(changePassowrdForm);
    });
    newAddressBtn.addEventListener('click',async ()=>{
         setProfilePart('addNewAddress',addNewAddress,changePassword,personalInformation,addressDetails,editEmail);
         validateAdderssInputs(aptNo,phone,street)
         clearForm(addAddressForm);
         const allAddressInputs =document.querySelectorAll('#addAddressForm input');
         allAddressInputs.forEach(addressInput=> 
            {
                hideErrorBorder(addressInput);
                hideElement(addressInput.parentNode.nextElementSibling);
            });
         hideElement(invalidData);
         hideElement(successMessage);
    });
  
    addAddressForm.addEventListener('submit' , (e)=>{
                e.preventDefault();
               
            if(validateNumber(aptNo.value) && validatePhoneNumber(phone.value) && street.value){
                const addressAreaElem=document.getElementById('area');
                let addressArea=(addressAreaElem.innerHTML == "Choose Area On Map")? "Unspecified Area":addressAreaElem.innerHTML;
                addNewAddressFunc(addAddressForm,addressArea);
                displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,"addNewAddress")
                displayElement(successMessage);
                hideElement(invalidData);
                clearForm(addAddressForm);
            }
            else {
                displayElement(invalidData);
                hideElement(successMessage);
            }
        });

    personalInfoForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        submitUserPersonalInfo(personalInfoForm)
    });
    editEmailForm.addEventListener('submit',(e)=>{
        e.preventDefault();
         submitEditMailForm(editEmailForm);
    });

    changePassowrdForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        submitChangPassword(changePassowrdForm);
    })
}

 //Display Account Section ON Section Choice and Refresh
 async function setProfilePart(sectionName,sectionName1,sectionName2,sectionName3,sectionName4,sectionName5){
    localStorage.setItem('profileSectionName',sectionName);
    displayAccountParts(sectionName1,sectionName2,sectionName3,sectionName4,sectionName5);
    if(sectionName == "addNewAddress")      await displayMap();

}
async function showLastProfileSection(noAddresse,sectionName,accountBtns,addressDetailsBtn,addressCards,personalInformation,addressDetails,editEmail,changePassword,addNewAddress){
    switch(sectionName){
        case 'personalInfo' :
            const personalInfoForm=personalInformation.children[2];
            displayAccountParts(personalInformation,addressDetails,editEmail,changePassword,addNewAddress);
            displayUserInfo(personalInfoForm);
            checkPersonalInfoDataValidation(personalInfoForm);
             hideMessagesOnAccountSectionChoice(personalInfoForm.previousElementSibling.previousElementSibling,personalInfoForm.previousElementSibling);
            displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,sectionName);
            break;
        case "addressDetails": 
             displayAccountParts(addressDetails,personalInformation,editEmail,changePassword,addNewAddress);
             displayAddressOrNoAddress(noAddresse,addressCards)
             displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,sectionName)
            break;
        case "editEmail" :
            const editEmailForm=editEmail.children[2];
            displayAccountParts(editEmail,personalInformation,addressDetails,changePassword,addNewAddress);
            checkEditMailDataValidation(editEmailForm);
            hideMessagesOnAccountSectionChoice(editEmailForm.previousElementSibling.previousElementSibling,editEmailForm.previousElementSibling);
            displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,sectionName)
            break;
        case "changePassword":
            const changePassowrdForm=changePassword.children[2];
            displayAccountParts(changePassword,personalInformation,addressDetails,editEmail,addNewAddress);
             hideMessagesOnAccountSectionChoice(changePassowrdForm.previousElementSibling.previousElementSibling,changePassowrdForm.previousElementSibling)
            checkChangePasswordDataValidation(changePassowrdForm);
             displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,sectionName)
            break;
        case "addNewAddress":
            const addAddressForm=addNewAddress.children[0].children[4].children[0];
             const aptNo=addAddressForm.children[1].children[0].children[0].children[0].children[0];
            const phone=addAddressForm.children[3].children[0].children[0].children[0].children[0];
            const street=addAddressForm.children[2].children[0].children[0].children[0].children[0];
             displayAccountParts(addNewAddress,changePassword,personalInformation,addressDetails,editEmail);
             validateAdderssInputs(aptNo,phone,street)
             displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,sectionName)
            await displayMap();
            break;
        default:
             const personalInfoForm2=personalInformation.children[2];
            setProfilePart('personalInfo',addNewAddress,changePassword,personalInformation,addressDetails,editEmail);
             displayUserInfo(personalInfoForm2);
             checkPersonalInfoDataValidation(personalInfoForm2);
            hideMessagesOnAccountSectionChoice(personalInfoForm.previousElementSibling.previousElementSibling,personalInfoForm.previousElementSibling);
             displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,sectionName)
             break;
    }
}


//Personal Info Section

function submitUserPersonalInfo(personalInfoForm){
        let firstName=personalInfoForm.children[0].children[0].children[0].children[1];
        let lastName =personalInfoForm.children[0].children[1].children[0].children[1];
        let mail=personalInfoForm.children[0].children[2].children[0].children[1];
        let phone=personalInfoForm.children[0].children[3].children[0].children[1];
        let birthDate=personalInfoForm.children[0].children[4].children[0].children[1];
        if(validateName(firstName.value) && validateName(lastName.value) && ValidateMail(mail.value) && validatePhoneNumber(phone.value) && validateDate(birthDate.value))
        {
            const personalData=new FormData(personalInfoForm);
            const userIndex=findUserIndex(loggedUser);
            const userInfo = Object.fromEntries(personalData.entries());
            updateUserByIndex(userInfo,userIndex);
            diplaySuccessMessageAndHideErrorMessage(personalInfoForm.previousElementSibling.previousElementSibling,"User Info has been Updated Successfully.",personalInfoForm.previousElementSibling);  
            accountName.innerHTML=`${loggedUser.firstName} ${loggedUser.lastName}` 
        }
        else{
             displayErrorMessageAndHideSuccessMessage(personalInfoForm.previousElementSibling,"User Info can't be Updated. <br> Missing Field Or Invalid Format.",personalInfoForm.previousElementSibling.previousElementSibling);   
        }
        
}       
function checkPersonalInfoDataValidation(personalInfoForm){
    const firstName=personalInfoForm.children[0].children[0].children[0].children[1];
    const lastName =personalInfoForm.children[0].children[1].children[0].children[1];
    const mail=personalInfoForm.children[0].children[2].children[0].children[1];
    const phone=personalInfoForm.children[0].children[3].children[0].children[1];
     const birthDate=personalInfoForm.children[0].children[4].children[0].children[1];
    checkInputValidation(firstName,validateName,personalInfoForm.children[0].children[0].children[1],personalInfoForm);
    checkInputValidation(lastName,validateName,personalInfoForm.children[0].children[1].children[1],personalInfoForm);
    checkInputValidation(mail,ValidateMail,personalInfoForm.children[0].children[2].children[1],personalInfoForm);
    checkInputValidation(phone,validatePhoneNumber,personalInfoForm.children[0].children[3].children[1],personalInfoForm);
    checkInputValidation(birthDate,validateDate,personalInfoForm.children[0].children[4].children[1],personalInfoForm);

}

function displayUserInfo(personalInfoForm){
    const inputsFields=['firstName','lastName','mail','phoneNumber','birthDate','gender'];
    inputsFields.forEach(input=>{
        if(input != 'gender')
        document.getElementById(input).value=loggedUser[input];
        else {
            if(loggedUser.gender == "male") 
                document.getElementById('male').checked=true;
            else   document.getElementById('female').checked=true;
        }
    })
    if(loggedUser['getOfferDiscount'] == "yes")
        document.getElementById('getOfferDiscount').checked=true;
    else 
         document.getElementById('getOfferDiscount').checked=false;

}

//Change Password Section
function checkChangePasswordDataValidation(changePassowrdForm){
const currentPassowrd=changePassowrdForm.children[0].children[0].children[0].children[1];
const newPassword=changePassowrdForm.children[1].children[0].children[0].children[1];
const reEnterPassword=changePassowrdForm.children[1].children[1].children[0].children[1];
checkInputValidation(currentPassowrd,validatePassword,changePassowrdForm.children[0].children[0].children[1],changePassowrdForm);
checkInputValidation(newPassword,validatePassword,changePassowrdForm.children[1].children[0].children[1],changePassowrdForm);
checkInputValidation(reEnterPassword,validatePassword,changePassowrdForm.children[1].children[1].children[1],changePassowrdForm);
}

function submitChangPassword(changePassowrdForm){
    let currentPassowrd=changePassowrdForm.children[0].children[0].children[0].children[1];
    let newPassword=changePassowrdForm.children[1].children[0].children[0].children[1];
    let reEnterPassword=changePassowrdForm.children[1].children[1].children[0].children[1];   
    if(validatePassword(currentPassowrd.value) && validatePassword(newPassword.value) && validatePassword(reEnterPassword.value))
    {
        if(loggedUser.password == currentPassowrd.value )
        {
            if(newPassword.value == reEnterPassword.value)
            {
                loggedUser.password=newPassword.value;
                    updateUser(loggedUser);
                    updateUsers(loggedUser);
                    clearFormWithIcons([currentPassowrd,newPassword,reEnterPassword]);
                    diplaySuccessMessageAndHideErrorMessage(changePassowrdForm.previousElementSibling.previousElementSibling,"User Password has been Updated Successfully.",changePassowrdForm.previousElementSibling);   
            }
            else
            displayErrorMessageAndHideSuccessMessage(changePassowrdForm.previousElementSibling,"User Password can't be Updated. <br>TWo Passwords must be identical.",changePassowrdForm.previousElementSibling.previousElementSibling);  
        }
        else        
         displayErrorMessageAndHideSuccessMessage(changePassowrdForm.previousElementSibling,"User Password can't be Updated. <br> Current Password is wrong.",changePassowrdForm.previousElementSibling.previousElementSibling);   
    }
    else
        displayErrorMessageAndHideSuccessMessage(changePassowrdForm.previousElementSibling,"User Password can't be Updated. <br> Missing Field Or Invalid Format.",changePassowrdForm.previousElementSibling.previousElementSibling);   
}

//Edit Mail Section Functions
function submitEditMailForm(editEmailForm){
        const mailValue=editEmailForm.children[0].children[0].children[0].children[0].children[1];
        const reEnteredMailValue=editEmailForm.children[0].children[1].children[0].children[0].children[1];
        const password=editEmailForm.children[0].children[2].children[0].children[1];
        if(ValidateMail(mailValue.value) && ValidateMail(reEnteredMailValue.value) && validatePassword(password.value)){
            if(mailValue.value == reEnteredMailValue.value){
                    if(loggedUser.password == password.value) 
                    {
                        loggedUser.mail=mailValue.value;
                        updateUser(loggedUser);
                        updateUsers(loggedUser);
                        clearFormWithIcons([mailValue,reEnteredMailValue,password]);
                        diplaySuccessMessageAndHideErrorMessage(editEmailForm.previousElementSibling.previousElementSibling,"User E-Mail has been Updated Successfully.",editEmailForm.previousElementSibling);
                    }
                    else
                        displayErrorMessageAndHideSuccessMessage(editEmailForm.previousElementSibling,"User E-Mail can't Updated. <br> Wrong Password.",editEmailForm.previousElementSibling.previousElementSibling);
                 }
            else{
                displayErrorMessageAndHideSuccessMessage(editEmailForm.previousElementSibling,"User E-Mail can't Updated. <br> Two E-Mails must be identical.",editEmailForm.previousElementSibling.previousElementSibling);
                 }
            }
        else{
            displayErrorMessageAndHideSuccessMessage(editEmailForm.previousElementSibling,"User E-Mail can't Updated. <br> Missing Fields Or Invalid Format",editEmailForm.previousElementSibling.previousElementSibling);
        }
}

function checkEditMailDataValidation(editEmailForm){
 checkInputValidation(editEmailForm.children[0].children[0].children[0].children[0].children[1],ValidateMail,editEmailForm.children[0].children[0].children[0].children[1],editEmailForm) ;  
 checkInputValidation(editEmailForm.children[0].children[1].children[0].children[0].children[1],ValidateMail,editEmailForm.children[0].children[1].children[0].children[1],editEmailForm) ;  
 checkInputValidation(editEmailForm.children[0].children[2].children[0].children[1],validatePassword,editEmailForm.children[0].children[2].children[1],editEmailForm) ;  
}





//Handle success and errors messages
function diplaySuccessMessageAndHideErrorMessage(displayedElement,displayedElementMessage,hiddenErrorElement){
                            displayedElement.innerHTML=displayedElementMessage;
                            displayElement(displayedElement);
                            hideElement(hiddenErrorElement);
}
function displayErrorMessageAndHideSuccessMessage(displayedErrorElement,displayedErrorElementMessage,hiddenSuccessElement){
            hideElement(hiddenSuccessElement);
            displayElement(displayedErrorElement);
            displayedErrorElement.innerHTML=displayedErrorElementMessage;
}

function hideMessagesOnAccountSectionChoice(successElement,ErrorElement){
        hideElement(successElement);
        hideElement(ErrorElement);   
}



//Address Section Functions

function validateAdderssInputs(aptNo,phone,street){
    aptNo.addEventListener('keyup',()=>{
        if(!validateNumber(aptNo.value)) {
            showAddressError(aptNo)
        }
        else {
            hdieAddressError(aptNo);
        }  
    });
    phone.addEventListener('keyup',()=>{
        if(!validatePhoneNumber(phone.value)) {
            showAddressError(phone)
        }
        else {
            hdieAddressError(phone);
        }  
    });
    street.addEventListener('keyup',()=>{
        if(!street.value) {
            showAddressError(street)
        }
        else {
            hdieAddressError(street);
        }  
    });
}

function displayAddresses(addressCards){
    addressCards.innerHTML='';
     loggedUser.addresses.forEach(address=>{
            const addressCard=createAddressCard(address);
            addressCards.appendChild(addressCard);
        })
}

function displayAddressOrNoAddress(noAddresse,addressCards){
      if(loggedUser.addresses.length == 0){
            displayElement(noAddresse);
            hideElement(addressCards);
        }
        else{
            displayElement(addressCards);
            hideElement(noAddresse);
            displayAddresses(addressCards);
        }
}
function addNewAddressFunc(addAddressForm,addressArea){
        const addressDataForm=new FormData(addAddressForm);
        let address={};
        for (const [key, value] of addressDataForm) {
            address[key]=value;
        }
        const userAddress={
            id:loggedUser.addresses.length+1,
            area:addressArea,
            ...address,
           default:(loggedUser.addresses.length <1) ? true : false}
        loggedUser['addresses'].push(userAddress);
        updateUser(loggedUser);
}
 async function displayMap(){
     area=document.getElementById('area');
     if (map) {
            map.remove();
            map=null;
            }
              map = L.map('map').setView([0, 0], 5)
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            setTimeout(() => {
                map.invalidateSize();
            }, 0);
                window.addEventListener('resize', () => {
                        map.invalidateSize();
                    });
            map.addEventListener('click',async (e)=>{
                    const lat = e.latlng.lat;
                    const lng = e.latlng.lng;
                    const areaName = await getAreaName(lat, lng);
                    area.innerHTML=areaName;
            })
}

async function getAreaName(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const areaName = data.address.city || data.address.town || data.address.village || data.address.suburb || "Unspecific Area";
        return areaName;
    } catch (error) {
        console.error('Error fetching reverse geocoding data:', error);
        return "Unspecific Area";
    }
}


function createAddressCard(address){
     let superNode=createElement('div',['col-12']);
     let parentNode=createElement('div',"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center rounded-6 p-3 border border-main address",['id'],[`address-${address.id}`]);
     let firstChildSuper=createElement('div',"d-flex flex-column text-black");
     const firstChildChildrenClasses=["fs-6 lh-1.5 fw-bold","fs-7","fs-7"];
    //  const firstChildChildrenText=[addressArea,addressStreet,addressPhone];
    const firstChildChildrenText=[address.area,`${address.aptNo} ${address.street} Street`,address.phone];
     firstChildChildrenClasses.forEach((addressClass,ind)=>{
        const child=createElement('span',addressClass,[],[],firstChildChildrenText[ind]);
        firstChildSuper.appendChild(child);
     });
     parentNode.appendChild(firstChildSuper);
     let secondChild;
     if(!address.default){
      secondChild=createElement('button',"btn btn-main mt-3 mt-sm-0 text-white fs-7 default",[],[],"Make As Default");
        secondChild.addEventListener('click',(e)=>{
        makeDefaultAddress(e.target);
        updateUserAddressData(e.target,address);
        updateUser(loggedUser);
     })}
    else
            secondChild=createElement('button',"btn btn-muted mt-3 mt-sm-0 text-white fs-7 default",[],[],"Default");
    
     parentNode.appendChild(secondChild);
     superNode.appendChild(parentNode);
     return superNode;
}

function makeDefaultAddress(button){
      const defaultBtns=document.querySelectorAll('.default');
        defaultBtns.forEach(defaultBtn =>{
            if(defaultBtn != button)  {
                defaultBtn.classList.add('btn-main');
                defaultBtn.classList.remove('btn-muted');
                defaultBtn.innerHTML='Make As Default';
            }
            else{
                defaultBtn.classList.remove('btn-main');
                defaultBtn.classList.add('btn-muted');
                defaultBtn.innerHTML='Default';
            }
        })
       
         
}

// Account page section Helpers

function displayActiveButton(element){
   element.classList.add('btn-active');
}
function hideActiveButton(element){
   element.classList.remove('btn-active');
}
function displayActiveSectionLink(accountBtns,newAddressBtn){
     accountBtns.forEach(accountBtn => {
        accountBtn.addEventListener('click',()=>{
                displayActiveButton(accountBtn); 
                accountBtns.forEach(btn => {
                    if(btn != accountBtn) hideActiveButton(btn);
                })
        if(accountBtn == newAddressBtn) displayActiveButton(addressDetailsBtn)
        })
    })
}
function displayRefreshActiveSectionLink(accountBtns,addressDetailsBtn,sectionName){
  for(const accountBtn of accountBtns){
       if(accountBtn.getAttribute('id') == sectionName+'Btn')  displayActiveButton(accountBtn); 
       else hideActiveButton(accountBtn);
       if(sectionName  == 'addNewAddress') displayActiveButton(addressDetailsBtn); 
    }
}

//Cart Gunction
function cart(){

 if(cartItems.length == 0)
    displayNoCartProducts(noCartItems,cartItemsContainer)
 else  showcartItems();
}
        
//create cart item
function createCartItem(cartItem,index){
    const cartSuperNode=createElement('div'," mx-auto border-cart pb-4 pb-lg-0 row gy-3 gy-lg-2 gy-xxl-0 align-items-center text-lg-center justify-content-center",["id"],[`item_${index+1}`]);
    const creataCardImageContainer=createElement('div'," col-12 col-lg-2 text-center");
    const imagePadding=(cartItem.itemType == 'meal') ? "py-4" :"";
    const cartImage=createElement('img',`cartImage ${imagePadding}`,["src","id"],[cartItem.srcImage,`${cartItem.itemType} Photo`]);
    creataCardImageContainer.appendChild(cartImage);
    cartSuperNode.appendChild(creataCardImageContainer);
    const cartName=createCartName(cartItem);
    cartSuperNode.appendChild(cartName);
    const  cartPrice=createCartPriceAndTotal(cartItem,"text-main fw-bold col-6 col-md-3  col-lg-2");
    cartSuperNode.appendChild(cartPrice);
    const cartQty=createCartQty(cartItem);
    cartSuperNode.appendChild(cartQty);
    const cartTotal=createCartPriceAndTotal(cartItem,"total text-main fw-bold col-md-3  col-6 col-lg-2 order-1 order-lg-0 text-center",`total_${index+1}`,"total");
    cartSuperNode.appendChild(cartTotal);
    const deleteIcon= createDeleteIcon(cartItem);
    cartSuperNode.appendChild(deleteIcon);
    return cartSuperNode;
}
function createCartName(cartItem){
   const nameSuperNode=createElement('div',"col-12  col-lg-3 text-center");
   const mealName=createElement('h6',"fw-bold",[],[],cartItem.name);
   nameSuperNode.appendChild(mealName);
   const mealSide=createElement('div',"fw-light fs-7",[],[]," Addon : Soft Drinks (+$30)");
   nameSuperNode.appendChild(mealSide);
   return nameSuperNode;
}
function createCartPriceAndTotal(cartItem,className,id="",total=""){
    const PriceAndTotalSuperNode=createElement('div',className,['id'],[id]);
    let spanTag;
    let priceWord;
    if(!total)
    {   priceWord=createElement('span',"d-lg-none text-black",[],[],"Price : ");
        spanTag=createElement('span',"",[],[],`${cartItem.price}$`);
    }
    else 
    {   priceWord=createElement('span',"d-lg-none text-black",[],[],"Total : ");
        spanTag=createElement('span',"",[],[],`${cartItem.price * cartItem.Qty}$`);}
     PriceAndTotalSuperNode.appendChild(priceWord);
    PriceAndTotalSuperNode.appendChild(spanTag);
    return PriceAndTotalSuperNode;
}

function createCartQty(cartItem){
const qtySuperNode=createElement('div',"col-6 col-md-3 col-lg-2 order-2 order-md-1 order-lg-0");
const parentNode=createElement('div',"d-flex justify-content-lg-center");
const qtySpan=createElement('span',"d-lg-none fw-bold text-black",[],[],"Qty : ");
parentNode.appendChild(qtySpan);
const controlQty=createElement('div',"border border-1 border-main rounded-6");
const DecreaseQtyNode=createDecreaseQty(cartItem);
controlQty.appendChild(DecreaseQtyNode);
const qtyNumber=createElement('span',"",[],[],cartItem.Qty);
controlQty.appendChild(qtyNumber);
const increaseQtyNode=createIncreaseQty(cartItem);
controlQty.appendChild(increaseQtyNode);
parentNode.appendChild(controlQty);
qtySuperNode.appendChild(parentNode);
return qtySuperNode;
}
function createDecreaseQty(cartItem){
const DecreaseQtyNode=createStackElement("fa-stack fa-sm text-link fa-1x rounded-6 decrease","fa-solid fa-square fa-stack-2x","fa-solid fa-minus fa-stack-1x fa-inverse"); 
decreaseQty(DecreaseQtyNode,cartItem)
return DecreaseQtyNode;
}

function createIncreaseQty(cartItem){
const increaseQtyNode=createStackElement("fa-stack fa-sm fa-1x rounded-6 text-main increase","fa-solid fa-square fa-stack-2x","fa-solid fa-plus fa-stack-1x fa-inverse");
increaseQty(increaseQtyNode,cartItem);
return increaseQtyNode;
}
function createDeleteIcon(cartItem){
    const superNode=createElement('div',"col-6 col-md-3  col-lg-1 order-3 order-lg-0 text-center");
    const firstSpan=createElement('span',"d-lg-none text-black fw-bold",[],[],"Action : ")
    const deleteICon=createStackElement("fa-stack fa-1x text-danger rounded-6 deleteIcon bg-danger","fa-solid fa-square fa-stack-2x","fa-solid fa-trash fa-stack-1x fa-inverse")
    superNode.appendChild(firstSpan);
    superNode.appendChild(deleteICon);   
    deleteCartItem(superNode,cartItem)                 
    return superNode;
}
function createStackElement(parentClass,childClass1,childClass2){
    const superNode=createElement('span',parentClass);
    const icon1=createElement('i',childClass1);
    superNode.appendChild(icon1);
    const icon2=createElement('i',childClass2);
    superNode.appendChild(icon2);
    return superNode;
}
// display cart and control function

function displayCartItems(){
const cartItemsContainer=document.getElementById('cartItemsContainer');
cartItems.forEach((cartItem,index)=>{
    const cartItemContainer=createCartItem(cartItem,index);
    cartItemsContainer.appendChild(cartItemContainer);
});
}
function displayNoCartProducts(){
     let noCartItems=document.getElementById('noCartItems');
    let cartItemsContainer=document.getElementById('cartItems');
     displayElement(noCartItems);
    hideElement(cartItemsContainer);
}
function showcartItems(){
    let noCartItems=document.getElementById('noCartItems');
    let cartItemsContainer=document.getElementById('cartItems');
    hideElement(noCartItems);
    displayElement(cartItemsContainer);
    displayCartItems();
}
function increaseQty(increaseIcon,cartItem){
     increaseIcon.addEventListener('click',()=>{
        let Qty=Number(increaseIcon.previousElementSibling.innerHTML);
        Qty=Qty+1;
        cartItem['Qty']=Qty;
        updateCartItem(cartItem);
       increaseIcon.previousElementSibling.innerHTML=Qty;
       increaseIcon.parentNode.parentNode.parentNode.nextElementSibling.innerHTML=`${(cartItem.price * cartItem.Qty)}$`
      displayCartNumbersPage();
    });
}


function decreaseQty(decreaseIcon,cartItem){
     decreaseIcon.addEventListener('click',()=>{
          let Qty=Number(decreaseIcon.nextElementSibling.innerHTML);
        Qty=(Qty ==1) ? 1 :Qty-1;
        decreaseIcon.nextElementSibling.innerHTML=Qty;
        cartItem['Qty']=Qty;
        updateCartItem(cartItem);
        decreaseIcon.parentNode.parentNode.parentNode.nextElementSibling.innerHTML=`${(cartItem.price * cartItem.Qty)}$`;
        displayCartNumbersPage();
    });
}
function deleteCartItem(deleteIcon,cartItem){
        deleteIcon.addEventListener('click',(e)=>{
        let deletedItemNode=e.target.parentNode.parentNode.parentNode; 
            deletedItemNode.remove();
            updateCartItem(cartItem,true);
            displayCartNumbersPage();
        })

}

function addCartItem(ItemData){
      const cardItemIndex=findCartItemIndex(ItemData);
      if(cardItemIndex == -1)
         cartItems.push({...ItemData,Qty:1});
      else 
          cartItems[cardItemIndex].Qty=cartItems[cardItemIndex].Qty+1;
       displayCartNumbersPage();
       updateCartLocalStorage()
}

function displayCartNumbersPage(){
         cartItemsNo.forEach(item => {
         item.innerHTML=`${calculateCartItemsNumber()}
            <span class="visually-hidden">Cart Items Numbers</span>`
         })
}

function calculateCartItemsNumber(){
     let allCartItemsNumber=0;
          cartItems.forEach(cartItem =>{
            allCartItemsNumber+=cartItem.Qty;
          });
    return allCartItemsNumber;
}
function findCartItemIndex(cartItem){
    for(const[ind,value] of  cartItems.entries()){
         if((value.id == cartItem.id) && (value.itemType == cartItem.itemType))
            return ind;
    }    
    return -1;
}


function updateCartItem(currentCartItem,del=false){
    const cartIndex=findCartItemIndex(currentCartItem);
    if(cartIndex != -1){
        if(!del)
        cartItems[cartIndex]=currentCartItem;
       else cartItems.splice(cartIndex,1);
        updateCartLocalStorage()
        if(cartItems.length == 0) displayNoCartProducts();
    }
}

function updateCartLocalStorage(){
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
}

//checkout 
async function checkout(){
const deliveryAddress=document.getElementById('deliveryAddress');
 displayCheckOutsItems();
 const totalPrice=calculateSubTotal();
 const feeValue = 20;
 const discount=50;
 displayTotalOrderPrice(totalPrice,discount,feeValue);
 displayDiscountValue(discount);
 displayDeliveryFeeValue(feeValue);
 displayDeFaultDeliveryAddress(deliveryAddress);
 handleGoToPaymentBtn(deliveryAddress);
 await displayMap();
}

function handleGoToPaymentBtn(deliveryAddress){
 const goToPaymentBtn=document.getElementById('goToPaymentBtn');
 goToPaymentBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   const shippingAddress=getShippingAddress(deliveryAddress);
   localStorage.setItem('shippingAddress',JSON.stringify(shippingAddress));
   window,location.href="payment.html";
 })
}
function getShippingAddress(deliveryAddress){
const addressForm=new FormData(deliveryAddress);
let shippingAddress={}
for(const [index,value] of addressForm)
 shippingAddress[index]=value  ;
return  shippingAddress;
}
function displayDeFaultDeliveryAddress(deliveryAddress){
    const bulidingName=deliveryAddress.children[0].children[0].children[0].children[0].children[0];
    const aptNo=deliveryAddress.children[1].children[0].children[0].children[0].children[0];
    const floor=deliveryAddress.children[1].children[1].children[0].children[0].children[0];
    const street=deliveryAddress.children[2].children[0].children[0].children[0].children[0];
    const additionDirection=deliveryAddress.children[2].children[1].children[0].children[0].children[0];
    const phone=deliveryAddress.children[3].children[0].children[0].children[0].children[0];
    const addressLabel=deliveryAddress.children[3].children[1].children[0].children[0].children[0];
    const area=document.getElementById('area')
   const defaultaddress=getUserDefaultAddress();
    if(logged && defaultaddress){
            area.innerHTML=defaultaddress.area;
           bulidingName.value=defaultaddress.buildingName;
           aptNo.value=defaultaddress.aptNo;
           floor.value=defaultaddress.floor;
           street.value=defaultaddress.street;
           additionDirection.value=defaultaddress.additionDirection;
           phone.value=defaultaddress.phone;
           addressLabel.value=defaultaddress.addressLabel
    }
}
function getUserDefaultAddress(){
    const userAddress=loggedUser.addresses;
    for(const add of userAddress) 
        if(add.default)  return add;
    return {};
}
function displayCheckOutsItems(){
    const checkoutItems=document.getElementById('checkoutItems');
    cartItems.forEach((cartItem,index)=>{
        const checkoutCard=createCheckoutCard(cartItem,index);
        checkoutItems.appendChild(checkoutCard);
    });
}
function calculateSubTotal(){
    const subtotal=document.getElementById("subtotal");
    let totalPrice=0;
     cartItems.forEach((cartItem,index)=>{
        totalPrice+=cartItem.price * cartItem.Qty;
    });
    subtotal.innerHTML=totalPrice;
    return totalPrice;
}
function calculateOrderFullPrice(totalPrice,discount=0,shippingFee=0){
    const discountValue=(totalPrice * discount)/100;
    const netvalue=totalPrice-discountValue;
    const requiredMoney=netvalue+shippingFee;
    return requiredMoney;
}
function displayDiscountValue(discount){
    const discountNode=document.getElementById("discount");
    discountNode.innerHTML=discount;
}
function displayDeliveryFeeValue(feeValue){
    const deliveryChrges=document.getElementById("deliveryChrges");
    deliveryChrges.innerHTML=feeValue;
}
function displayTotalOrderPrice(totalPrice,discount,shippingFee){
    const total=document.getElementById("total");
    const totalValue=calculateOrderFullPrice(totalPrice,discount,shippingFee);
    total.innerHTML=totalValue;
}
function createCheckoutCard(cartItem,index){
const superNode=createElement('div',"col-12");
const parentNode=createElement('div',"bg-site p-2 row gx-4 align-items-center rounded-6 cartItem",['id'],[`item_${index+1}`]);
const firstChildContainer=createElement('div',"col-3 col-sm-2 col-lg-4 bg-white rounded-6");
const firstChildImaage=createElement('img',"w-100",["src","alt","id"],[cartItem.srcImage,`${cartItem.itemType} Image`,`checkoutImage-${index+1}`]);
firstChildContainer.appendChild(firstChildImaage);
const secondChildContainer=createElement('div',"col-9 col-sm-10 col-lg-8 text-black");
const mealName=createElement('div',"",[],[],cartItem.name);
secondChildContainer.appendChild(mealName);
const totalmealPriceContainer=createElement('div','d-flex align-items-center justify-content-between');
const totalMealPrice=createElement('span',"fs-7 fw-bold text-main",[],[],`Price:${cartItem.price * cartItem.Qty}$`);
const mealQty=createElement('span',"fs-7 fw-bold text-black",[],[],`Qty:${cartItem.Qty}`);
totalmealPriceContainer.appendChild(totalMealPrice);
totalmealPriceContainer.appendChild(mealQty);
secondChildContainer.appendChild(totalmealPriceContainer);
parentNode.appendChild(firstChildContainer);
parentNode.appendChild(secondChildContainer);
superNode.appendChild(parentNode);
return superNode;
}


//payment
function payment(){
 displayCheckOutsItems();
 const totalPrice=calculateSubTotal();
 const feeValue = 20;
 const discount=50;
 displayTotalOrderPrice(totalPrice,discount,feeValue);
 displayDiscountValue(discount);
 displayDeliveryFeeValue(feeValue);
}
//user functions

function findUserIndex(userData){
    let userIndex = -1;
    for(let [index, user] of users.entries())
        if(user.id == userData.id)
            userIndex=index
    return userIndex;
}
function updateUserByIndex(userData,userIndex){
     for(const[key,value] of Object.entries(userData))
         loggedUser[key]=value;
    if(!userData["getOfferDiscount"])   loggedUser["getOfferDiscount"]="No";
    saveUserInLocalStorage(loggedUser);
    users[userIndex]=loggedUser;
    saveUsersInLocalStorage(users);

}
function updateUserAddressData(button,address){
 loggedUser.addresses.forEach(userAddress => {
    if(address.id == userAddress.id) userAddress.default=true;
    else userAddress.default=false;
})
}

function updateUser(loggedUser){
        saveUserInLocalStorage(loggedUser)
        updateUsers(loggedUser);
}
function updateUsers(loggedUser){
   for(let [index, user] of users.entries()){
    if(loggedUser['id'] == user['id']) users[index]=loggedUser;
   }
saveUsersInLocalStorage(users)
}

function saveUserInLocalStorage(loggedUser){
            localStorage.setItem('loggedUser',JSON.stringify(loggedUser))
}
function saveUsersInLocalStorage(users){
       localStorage.setItem('users',JSON.stringify(users));
}


// format input fields
(function(){
    var inputs=document.getElementsByTagName('input');
    if(inputs.length !=0 ){
    Array.from(inputs).forEach(input=> {
        if(input.previousElementSibling){
            input.addEventListener('focus',element=>{
            element.target.previousElementSibling.classList.add('d-none')
            element.target.setAttribute('placeholder','');
        });
        input.addEventListener('focusout',element=> {
            if(input.value == '')
                setEmptyPlaceholder(element.target);});
        
        input.addEventListener('keyup',element=>{
            if(input.value == '')
                setEmptyPlaceholder(element.target);
            else
                element.target.previousElementSibling.classList.add('d-none');});
        }
      
            
            });}
})();


// choose pickup option
(function(){
    localStorage.setItem('orderPickMethod','delivery');
    var deliveryMethods=document.getElementsByClassName('delivery');
    if(deliveryMethods.length != 0)
        Array.from(deliveryMethods).forEach((delivery)=>{
                delivery.addEventListener('click',e=> {
                    if(e.target === e.currentTarget){
                        Array.from(deliveryMethods).forEach(otherdDelivery=>{
                            otherdDelivery.classList.remove('btn-main');
                            otherdDelivery.classList.add('btn-white');
                        });
                        e.target.classList.remove('btn-white');
                        e.target.classList.add('btn-main');
                        localStorage.setItem('orderPickMethod',e.target.getAttribute('for'));
                    }
            })})
})();

//category hover
(function(){ var categories=document.querySelectorAll('.category');
 if(categories.length != 0){
 categories.forEach(category=>{
    category.addEventListener('mouseover' ,cat =>{
         var cartIcon=document.getElementById(category.getAttribute('aria-label'));
         cartIcon.setAttribute('src','images/category-hover.png')})
      
    category.addEventListener('mouseout' ,cat =>{
         var cartIcon=document.getElementById(category.getAttribute('aria-label'));
         cartIcon.setAttribute('src','images/category.png')})
 })
 }})();

//  show dish  images skides
((function(){ var slideImages=document.querySelectorAll('.slide-image');
 if(slideImages.length != 0){
    slideImages.forEach(image=> 
        image.addEventListener('click' ,()=> {
            var imageSrc=image.children[0].getAttribute('src');
            var mainImage=document.getElementById('main-image');
            mainImage.setAttribute('src',imageSrc);
        })
    )
 }}
))();



// contact us action


function contact(){
let contactDetailsBtn=document.getElementById('contactDetailsBtn');
let contactFormBtn=document.getElementById('contactFormBtn');
let contactForm=document.getElementById('contactForm');
const invalidData=document.getElementById('invalidData');
const successMessage=document.getElementById('successMessage');
checkInputValidation(contactForm.children[0].children[0].children[0],validateName,contactForm.children[0].children[0].children[1],contactForm);
checkInputValidation(contactForm.children[0].children[1].children[0],validateName,contactForm.children[0].children[1].children[1],contactForm);
checkInputValidation(contactForm.children[1].children[0].children[0],ValidateMail,contactForm.children[1].children[0].children[1],contactForm);
checkInputValidation(contactForm.children[2].children[0].children[0],validatePhoneNumber,contactForm.children[2].children[0].children[1],contactForm);
contactForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const formData = new FormData(contactForm);
                if(validateName(formData.get('First Name')) && validateName(formData.get('Last Name')) && ValidateMail(formData.get('Mail')) && validatePhoneNumber(formData.get('Phone Number')) )
                   {
                     if(await sendMail(`${formData.get('First Name')} ${formData.get('Last Name')}`,formData.get('Message'),formData.get('Mail')))
                        {displayElement(successMessage);
                         hideElement(invalidData);
                         clearForm(contactForm);}
                    else{
                        hideElement(successMessage);
                        displayElement(invalidData);}
                  }
                else {
                    hideElement(successMessage);
                    displayElement(invalidData);
                     }
            })
  
    contactDetailsBtn.addEventListener('click',()=>{
    var contactDetails=document.getElementById('contactDetails');
    var contactForm=document.getElementById('contactForm');
    hideElement(successMessage);
    hideElement(invalidData);
    contactForm.classList.add('d-none');
    contactDetails.classList.remove('d-none');
  
})

if((contactFormBtn)){
contactFormBtn.addEventListener('click',()=>{
    var contactDetails=document.getElementById('contactDetails');
    var contactForm=document.getElementById('contactForm');
    contactForm.classList.remove('d-none');
    contactDetails.classList.add('d-none');
})
}
}

       
        
async function sendMail(senderName,message,senderEmail){
          try{
               emailjs.init("o3-i7ksFLJZT2C6GV"); // Replace with your EmailJS user ID
                const templateParams = {
                to_name: "Green Land",
                from_name: senderName,
                message: message,
                reply_to:senderEmail
                };

                emailjs.send("service_e72r6p7", "Temp2", templateParams)
                .then(response => {
                    console.log("Email sent successfully!", response.status, response.text);
                })
                .catch(err => {
                    console.error("Failed to send email", err);
                });
                return true;
          }catch(error){
            return false;
          }
        
        }


function setEmptyPlaceholder(element){
            // element.target.previousElementSibling.classList.remove('d-none');
            // placeholderValue=element.target.getAttribute('aria-label');
            // element.target.setAttribute('placeholder',placeholderValue);
             element.previousElementSibling.classList.remove('d-none');
            placeholderValue=element.getAttribute('aria-label');
            element.setAttribute('placeholder',placeholderValue);
            }

function togglePassword(e){
                        var password =e.parentNode.children[1];
                        var type=password.getAttribute('type');
                        if(type == 'text')  password.setAttribute('type','password')
                        else  password.setAttribute('type','text');
                        password.nextElementSibling.classList.toggle('d-none')
                        password.nextElementSibling.nextElementSibling.classList.toggle('d-none');

                    }

// validation functions
function checkInputValidation(input,func,errorInput,formContainer){
input.addEventListener('keyup',(e)=>{
        hideElement(formContainer.previousElementSibling);
        if(formContainer.getAttribute('id') == "contactForm")
            hideElement(formContainer.previousElementSibling.previousElementSibling);
          if(!func(e.target.value))
            {   showErrorBorder(e.target);
                displayElement(errorInput);
                return false;
            }
            else{
                hideErrorBorder(e.target);
                hideElement(errorInput);
                return true;
            }
       })
}

function validatePhoneNumber(phone){
    const regex=/^01[0125][0-9]{8}$/
    return regex.test(phone);
}
function validateNumber(num){
    const regex=/^[1-9][0-9]?$/
    return regex.test(num);
}
function ValidateMail(mail){
            const mailRegex=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
          return  mailRegex.test(mail);
        }

function validatePassword(password){
            const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            return passwordRegex.test(password);
        }

function validateName(name){
    const regex=/^[a-zA-Z]{3,30}$/
    return regex.test(name);
}
function validateDate(date){
    const regex=/^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/
    return regex.test(date);
} 

     
                                                       
                                                      
                                                       
                                                      

    // Helpers Functions


function createElement(tagName,classesNames,attributeNames=[],attributeValues=[],text=''){
    let tagElement=document.createElement(tagName);
        tagElement=addElementClasses(tagElement,classesNames);
        tagElement=addElementAttribute(tagElement,attributeNames,attributeValues);
        if(text) tagElement=addElementText(tagElement,text);
    return tagElement;
}
function addElementAttribute(tagElement,attributeNames,attributeValues){
     attributeNames.forEach((attributeName,ind) =>  
     tagElement.setAttribute(attributeName,attributeValues[ind]));
     return tagElement;
}
function addElementText(tagElement,text){
      const tagText=document.createTextNode(text);
        tagElement.appendChild(tagText);
        return tagElement;
}
function addElementClasses(tagElement,classesNames){
        tagElement.className += classesNames;
        return tagElement;
}
function clearForm(formElement){
  formElement.reset();
}

function clearFormWithIcons(inputs){
    inputs.forEach(input => {
        input.value="";
        setEmptyPlaceholder(input);
    })
}

function showErrorBorder(element){
    element.classList.add('border-error');
}
function hideErrorBorder(element){
    element.classList.remove('border-error');
}
function showElement(element,message){
    displayElement(element);
    element.children[0].children[0].innerHTML=message;
}

function displayElement(element){
        element.classList.remove('d-none');
}
function hideElement(element){
    element.classList.add('d-none');
}
function showAddressError(element){
      showErrorBorder(element);
      displayElement(element.parentNode.nextElementSibling);
}
function hdieAddressError(element){
       hideErrorBorder(element);
      hideElement(element.parentNode.nextElementSibling);
}
function  displayAccountParts(partItem,...parts){
         displayElement(partItem);
        parts.forEach(part => hideElement(part));
}