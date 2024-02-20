// 初始變數
let list = document.querySelector('#my-todo')  // 待辦清單的父元素 (ul)
let addBtn = document.querySelector('#add-btn') // Add 按鈕
let input = document.querySelector('#new-todo') // 輸入框

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}


// write your code here
// 1. add new todo
// event object, this
addBtn.addEventListener('click', function () {
  let inputValue = input.value;

  //加入條件判斷(有輸入內容)，通過才執行新增
  if (inputValue.length > 0) {
    addItem(inputValue)
  }
})

// 2. 刪除 todo
// event delegation
list.addEventListener('click', function (event) {
  let target = event.target

  if (target.classList.contains('delete')) {
    let parentElement = target.parentElement
    parentElement.remove()
  } else if (target.tagName === 'LABEL') {  // 使用tagName查詢標籤名稱時，回傳值一律大寫
    target.classList.toggle('ckecked')
  }

})


