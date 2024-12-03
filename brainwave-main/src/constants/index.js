import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    img1,
    img2,
    img3,
    e,
    img4,
    img6,
    img5,
    example_img1,
    closed_hands,
    img_web,
    out_web,
    shirt,
    man,
    man2,
    exapmle2,
    g_ingo,
    final_info,
    linked_in,
    cat_sel,
    maya, shanaya, rohan,
    cxp,
    money,
    timesaver
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Features",
        url: "#features",
    },
    {
        id: "1",
        title: "How to use",
        url: "#how-to-use",
    },
    {
        id: "2",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "3",
        title: "Register",
        url: "/register",
        onlyMobile: true,
    },
    {
        id: "4",
        title: "Sign in",
        url: "/login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
    "Upload Your photo wearing t-shirt and full pants ",
    "Upload  cloth photo",
    "Select category and submit",
];

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    },
];

export const collabText =
    "Integrate our API to add virtual try-on functionality to your website. Let your customers see how clothes will look on them before they buy.";

export const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
    {
        id: "3",
        title: "Never share People's photos with Third Party",

    }
];

export const guide = [
    {
        id: "0",
        title: "Upload Photo in t-shirt and full pants (Don't upload photo in oversized t-shirt) ",

    },
    {
        id: "1",
        title: "Upload photo in shorts for short pant try on",
    },
    {
        id: "2",
        title: "Upload the photo of cloth",
    },
    {
        id: "3",
        title: "Photo should be clear and not blurry",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];



export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Ideal for small businesses and startups looking to try out Revachi AI’s try-on feature.",
    price: "0",
    features: [
      "50 try-ons per month",
      "Access to standard try-on features",
      "Community support"
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Perfect for growing businesses needing more try-ons and premium features.",
    price: "49.99",
    features: [
      "500 try-ons per month",
      "Priority support",
      "Analytics dashboard for try-on insights",
      "Customizable try-on interface"
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customized solution for large-scale businesses with high try-on needs and advanced customization.",
    price: null,
    features: [
      "Unlimited try-ons",
      "Dedicated account manager",
      "Advanced analytics and reporting",
      "API access and integration support",
      "Custom SLAs and enterprise-grade security"
    ],
  },
];




export const benefits = [
    {
        id: "0",
        title: "Enhanced Shopping Experience",
        text: "Allows users to virtually try on clothes, giving them a better idea of how items will look on them before purchasing.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: cxp,

    },
    {
        id: "1",
        title: "Increased Conversion Rates",
        text: "By reducing uncertainty, customers are more likely to make a purchase, leading to higher conversion rates.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: money,
        light: true,
    },
    {
        id: "2",
        title: "Time-Saving",
        text: "Eliminates the need for customers to visit physical stores, saving time by trying on clothes virtually from anywhere.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: timesaver,
    },
    {
        id: "3",
        title: "Shanaya Says: ⭐⭐⭐⭐",
        text: "It’s so sazy to see how clothes will look on me without trying them on physically. It’s made shopping so much easier, and I’ve been telling all my friends about it!",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: shanaya,
        light: true,
    },
    {
        id: "4",
        title: "Rohan Says: ⭐⭐⭐⭐⭐",
        text: "It helped me in buying clothes that look great on me from the comfort of my home.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: rohan,
        
    },
    {
        id: "5",
        title: "Maya Says: ⭐⭐⭐⭐",
        text: "I absolutely love this app! I can see how different styles look on me without the hassle of going to the store. It’s super user-friendly and I've discovered so many new outfits that I wouldn’t have tried otherwise!",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: maya,
    },
];

export const socials = [
  
    {
        id: "0",
        title: "LinkedIn",
        iconUrl: linked_in,
        url: "#",
    },
];


export const reactCode = `
import React, { useState } from 'react';

const App = () => {
  const [clothImageBase64, setClothImageBase64] = useState('');
  const [personImageBase64, setPersonImageBase64] = useState('');
  const [tryOnResult, setTryOnResult] = useState('');

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (event, setImageBase64) => {
    const file = event.target.files[0];
    const base64 = await toBase64(file);
    setImageBase64(base64);
  };

  const uploadImages = async () => {
    const apiKey = 'YOUR API KEY';
    const category = 'Cloth Category'; // Set this to the selected category

    const response = await fetch('https://api.revachiai.com/api/tryon/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        cloth_image: clothImageBase64,
        person_image: personImageBase64,
        category: category,
      }),
    });

    const responseData = await response.json();
    console.log('Try-On Result:', responseData);
    setTryOnResult("data:image/png;base64," + responseData.try_on_result); // Escape backticks
  };

  const downloadImage = (base64Image) => {
    const link = document.createElement('a');
    link.href = base64Image;
    link.download = 'try_on_result.png'; // Set the desired filename
    link.click();
  };

  return (
    <div>
      <h1>Convert Image to Base64</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => handleImageChange(event, setClothImageBase64)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(event) => handleImageChange(event, setPersonImageBase64)}
      />
      <button onClick={uploadImages}>Upload Images</button>

      {clothImageBase64 && (
        <div>
          <h2>Cloth Image:</h2>
          <img src={clothImageBase64} alt="Cloth" style={{ maxWidth: '300px' }} />
        </div>
      )}
      {personImageBase64 && (
        <div>
          <h2>Person Image:</h2>
          <img src={personImageBase64} alt="Person" style={{ maxWidth: '300px' }} />
        </div>
      )}
      {tryOnResult && (
        <div>
          <h2>Try-On Result:</h2>
          <img src={tryOnResult} alt="Try-On Result" style={{ maxWidth: '300px' }} />
          <button onClick={() => downloadImage(tryOnResult)}>Download Try-On Result</button>
        </div>
      )}
    </div>
  );
};

export default App;
`;




export const angularCode = `
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to Base64 Converter</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-controller="MainController">
 {/* CLOTH CATEGORY should be any one of the following :
   shirt
   hoodie
   sweater
   jacket
    Pants
    Shorts
    T-Shirt
    Dress
    crop-top
 */}
    <h1>Convert Image to Base64</h1>
    <input type="file" accept="image/*" ng-change="handleImageChange($event, 'cloth')">
    <input type="file" accept="image/*" ng-change="handleImageChange($event, 'person')">
    <button ng-click="uploadImages()">Upload Images</button>

    <script>
        angular.module('myApp', [])
            .controller('MainController', ['$scope', '$https', function($scope, $http) {
                $scope.clothImageBase64 = '';
                $scope.personImageBase64 = '';

                $scope.toBase64 = function(file) {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = (error) => reject(error);
                    });
                };

                $scope.handleImageChange = async function(event, type) {
                    const file = event.target.files[0];
                    const base64 = await $scope.toBase64(file);
                    if (type === 'cloth') {
                        $scope.clothImageBase64 = base64;
                    } else if (type === 'person') {
                        $scope.personImageBase64 = base64;
                    }
                };

                
                $scope.uploadImages = async function() {
                    const apiKey = 'YOUR API KEY';
                    const category = 'CLOTH CATEGORY';

                    const response = await $http.post('https:api.revachiai.com/api/tryon/', {
                        api_key: apiKey,
                        cloth_image: $scope.clothImageBase64,
                        person_image: $scope.personImageBase64,
                        category: category,
                    });

                    console.log('Try-On Result:', response.data);
                };
            }]);
    </script>
</body>
</html>
`

export const vueCode = `
<template>
 {/* CLOTH CATEGORY should be any one of the following :
   shirt
   hoodie
   sweater
   jacket
    Pants
    Shorts
    T-Shirt
    Dress
    crop-top
 */}
  <div>
    <h1>Convert Image to Base64</h1>
    <input
      type="file"
      accept="image/*"
      @change="handleImageChange($event, 'clothImageBase64')"
    />
    <input
      type="file"
      accept="image/*"
      @change="handleImageChange($event, 'personImageBase64')"
    />
    <button @click="uploadImages">Upload Images</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clothImageBase64: '',
      personImageBase64: '',
    };
  },
  methods: {
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async handleImageChange(event, imageType) {
      const file = event.target.files[0];
      const base64 = await this.toBase64(file);
      this[imageType] = base64;
    },
    async uploadImages() {
      const apiKey = 'YOUR API KEY';
      const category = 'CLOTH CATEGORY';

      const response = await fetch('https:api.revachiai/api/tryon/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          cloth_image: this.clothImageBase64,
          person_image: this.personImageBase64,
          category: category,
        }),
      });

      const responseData = await response.json();
      console.log('Try-On Result:', responseData);
    },
  },
};
</script>
`
