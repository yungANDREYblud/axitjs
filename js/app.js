let btnLeft = document.querySelector('#btnLeft')
let btnRight = document.querySelector('#btnRight')
let iconsParent = document.querySelector('.item-icons div')


let arr = ['icon-facebook', 'icon-twitter', 'icon-google', 'icon-pinterest-squared', 'icon-instagram', 'icon-stumbleupon', 'icon-rss']

removeElements()
createElements()

function createElements() {
 for (let index = 0; index < arr.length - 2; index++) {
  let i = document.createElement('i')
  i.classList.add(arr[index])
  iconsParent.appendChild(i)
 }
}

function removeElements(){
 iconsParent.innerHTML = ''
}

function puzirLeft() {
 let firstItem = arr[0]
 for (let index = 0; index < arr.length - 1; index++) {
  arr[index] = arr[index + 1]
 }
 arr[arr.length - 1] = firstItem
 console.log(arr)
}

function puzirRight() {
 let lastItem = arr[arr.length - 1]
 for (let index = arr.length - 1; index > 0; index--) {
  arr[index] = arr[index - 1]
 }
 arr[0] = lastItem
 console.log(arr)
}

btnLeft.addEventListener('click', function () {
 puzirLeft()
 removeElements()
 createElements()
})

btnRight.addEventListener('click', function () {
 puzirRight()
 removeElements()
 createElements()
})

let btn_tabs = document.querySelectorAll(".tab-title li")
let tabs = document.querySelectorAll(".tab-content")

for (const item_tab of btn_tabs) {
    item_tab.addEventListener("click", function(){
        for (const item of btn_tabs) {
            item.classList.remove("active")
        }
        for (const item_content of tabs) {
            item_content.classList.remove("active")
        }
        for (const item_content of tabs) {
            if(item_tab.dataset.id == item_content.dataset.id){ 
            item_tab.classList.add("active")
                item_content.classList.add("active")    
            }    
        }
    })
}