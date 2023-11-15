const root = document.querySelector("#root");
root.classList.add("container");

const row = document.createElement("div");
row.classList.add("row");

/* Products part */

const productsSection = document.createElement("div");
productsSection.classList.add("col-sm-12");
productsSection.classList.add("col-md-12");
productsSection.classList.add("col-lg-6");
productsSection.classList.add("col-xs-12");

const productsTitle = document.createElement("h4");
productsTitle.classList.add("badge-lg");
productsTitle.classList.add("rounded-pill");
productsTitle.classList.add("bg-danger-subtle");
productsTitle.classList.add("mt-3");
productsTitle.classList.add("mb-3");
productsTitle.classList.add("p-2");
productsTitle.classList.add("text-center");
productsTitle.innerText = "Products";

/* First row */
const rowFirst = document.createElement("div");
rowFirst.classList.add("row"); 

/* Water Bottle */
const bottleSection = document.createElement("div");
bottleSection.classList.add("col-sm-6");
bottleSection.classList.add("col-md-6");
bottleSection.classList.add("col-lg-6");
bottleSection.classList.add("col-xs-6");

const bottleCard = document.createElement("div");
bottleCard.classList.add("shadow-sm");
bottleCard.classList.add("card");
bottleCard.classList.add("mb-3");
bottleCard.classList.add("product");

const bottleImg = document.createElement("img");
bottleImg.classList.add("product-img");
bottleImg.setAttribute("src", "./images/bottle.jpg");
bottleImg.setAttribute("alt", "prd1");

function cardBodyInput(cardTitleInput, cardTextInput) {
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.classList.add("text-info");
  cardTitle.classList.add("bold");
  cardTitle.classList.add("product-name");
  cardTitle.innerText = cardTitleInput;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.classList.add("text-success");
  cardText.classList.add("product-price");
  cardText.innerText = cardTextInput;

  const button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("badge");
  button.classList.add("badge-pill");
  button.classList.add("bg-secondary");
  button.classList.add("mt-2");
  button.classList.add("float-right");
  button.setAttribute("type", "button");
  button.setAttribute("data-action", "add-to-cart");
  button.innerText = "Add to cart";

  cardBody.append(cardTitle);
  cardBody.append(cardText);
  cardBody.append(button);

  return cardBody;
}

const bottleCardBody = cardBodyInput("Water Bottle", "200Tk.");

/* Phone Protector */

const protectorSection = document.createElement("div");
protectorSection.classList.add("col-sm-6");
protectorSection.classList.add("col-md-6");
protectorSection.classList.add("col-lg-6");
protectorSection.classList.add("col-xs-6");

const protectorCard = document.createElement("div");
protectorCard.classList.add("shadow-sm");
protectorCard.classList.add("card");
protectorCard.classList.add("mb-3");
protectorCard.classList.add("product");

const protectorImg = document.createElement("img");
protectorImg.classList.add("product-img");
protectorImg.setAttribute("src", "./images/protector.jpg");
protectorImg.setAttribute("alt", "prd2");

const protectorCardBody = cardBodyInput('Phone Protector','300Tk.');

 /* Second row */
 const rowSecond = document.createElement('div');
 rowSecond.classList.add('row');

 /* Boat Micro USB */
 const usbSection = document.createElement("div");
usbSection.classList.add("col-sm-6");
usbSection.classList.add("col-md-6");
usbSection.classList.add("col-lg-6");
usbSection.classList.add("col-xs-6");

const usbCard = document.createElement("div");
usbCard.classList.add("shadow-sm");
usbCard.classList.add("card");
usbCard.classList.add("mb-3");
usbCard.classList.add("product");

const usbImg = document.createElement("img");
usbImg.classList.add("product-img");
usbImg.setAttribute("src", "./images/usb.jpg");
usbImg.setAttribute("alt", "prd3");

const usbCardBody = cardBodyInput('Boat Micro USB','200Tk.');

/* Cart part */
const cartSection = document.createElement("div");
cartSection.classList.add("col-sm-12");
cartSection.classList.add("col-md-12");
cartSection.classList.add("col-lg-6");
cartSection.classList.add("col-xs-12");

const cartTitle = document.createElement("h4");
cartTitle.classList.add("badge-lg");
cartTitle.classList.add("rounded-pill");
cartTitle.classList.add("bg-danger-subtle");
cartTitle.classList.add("mt-3");
cartTitle.classList.add("mb-3");
cartTitle.classList.add("p-2");
cartTitle.classList.add("text-center");
cartTitle.innerText = "Cart";

const cartMain = document.createElement('div');
cartMain.classList.add('cart');


/* append */
root.append(row);
row.append(productsSection);
productsSection.append(productsTitle);
productsSection.append(rowFirst);

rowFirst.append(bottleSection);
bottleSection.append(bottleCard);
bottleCard.append(bottleImg);
bottleCard.append(bottleCardBody);

rowFirst.append(protectorSection);
protectorSection.append(protectorCard);
protectorCard.append(protectorImg);
protectorCard.append(protectorCardBody);

productsSection.append(rowSecond);
rowSecond.append(usbSection);
usbSection.append(usbCard);
usbCard.append(usbImg);
usbCard.append(usbCardBody);

row.append(cartSection);
cartSection.append(cartTitle);
cartSection.append(cartMain);


/* Cart functionality */

