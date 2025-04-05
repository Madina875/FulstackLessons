const text = document.getElementById("add");
const btn = document.getElementById("add-btn");
const items = document.getElementById("lists");

let lists = [
  {
    id: 1,
    text: "user12345",
  },
];

const add = () => {
  let item = text.value;
  if (item?.trim()) {
    lists.push({
      id: lists.length == 0 ? 1 : lists.at(-1)?.id + 1,
      text: item,
    });
    text.value = "";
    display();
  } else {
    alert("Ma`lumot kiritilishi shart");
  }
};

const remove = (id) => {
  lists = lists.filter((val) => val.id != id);
  display();
};

const put = (id) => {
  lists = lists.filter((val) => val.id != id);
  display();
};

const display = () => {
  let str = "";
  lists.map((val) => {
    str += `
       <div class="item">
          <div class="text">${val.text}</div>
          <div class="icons">
            <span class="material-symbols-outlined"> edit </span>
            <span class="material-symbols-outlined" onclick="remove(${val.id})"> delete </span>
          </div>
        </div>
    `;
  });
  items.innerHTML = str;
};
display();

//google phone items

// console.log(document.body.childNodes[1].childNodes[3].childNodes[1]);
