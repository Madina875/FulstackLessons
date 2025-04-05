//task1: vebsaytdagi sarlavha pastda yozilgan kodni deb o'zgardi :
console.log((document.querySelector("h1").textContent = "DOM bilan ishlash"));
//task2:
console.log(
  (document.querySelector("p").textContent = "Bu matn JS orqali o‘zgartirildi!")
);
//task3:
console.log(
  document.body.childNodes[5].replaceWith(
    Object.assign(document.createElement("img"), {
      src: "https://i.pinimg.com/736x/c3/d3/a3/c3d3a335cad0a773b023cbad31ed6c7c.jpg",
      alt: "New Image",
    })
  )
);
