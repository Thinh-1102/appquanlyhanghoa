var inputName = document.querySelector('.input-name');
var goodsName = inputName.addEventListener('change', () => {
    goodsName = inputName.value;
})
var inputNote = document.querySelector('.input-note');
var goodsNote = inputNote.addEventListener('change', () => {
    goodsNote = inputNote.value;
});
var addInput = document.querySelector('.add-input')
var result = document.querySelector('.result')
var goods = [];
function goodsObj(name, note) {
    this.name = name,
        this.note = note
}
var resultFull = document.querySelector('.full-result')
//list btn
function list() {
    resultFull.classList.add('open')
}

//closebtn
function closebtn() {
    resultFull.classList.remove('open');
}

//access btn
function access() {
    goods.push(new goodsObj(goodsName, goodsNote));
    createListGoods(goods)
}

//cancer btn
// function cancer(){
//     result.classList.remove('open')
// }

//add btn
function add() {
    addInput.classList.add('open')
}

function addInputClose() {
    addInput.classList.remove('open')
}

//delete btn
function deletebtn(obj) {
    goods.splice(obj.parentElement.parentElement.parentElement.id, 1);
    obj.parentElement.parentElement.parentElement.remove();
}

//search btn
var inputItemSearch = document.querySelector('.input-item');
var searchValue = inputItemSearch.addEventListener('change',()=>{
    searchValue = inputItemSearch.value;
})
function search(){
    var resultValue = goods.filter((e,i,arr)=>{
        return e.name === searchValue
    })
    createListGoods(resultValue);
    resultFull.classList.add('open')
}

//edit btn
function edit(e) {
    let selectedTask = e.parentElement.parentElement;
    selectedTask.children[0].setAttribute('contenteditable',true);
    selectedTask.parentElement.children[1].setAttribute('contenteditable',true);
    // var nameValue = document.querySelector('.result__item-name');
    // nameValue.onkeyup = goods[selectedTask.parentElement.id].name;
    // console.log(goods[selectedTask.parentElement.id].name);
    // console.log(selectedTask.children[0].value);
}

//tạo trường infor
function createListGoods(arr) {
    result.innerHTML = '';
    arr.map((e, i) => {
        return result.innerHTML += `<div id="${i}" class="result__item">
        <div class="result__item-group">
            <div class="result__item-name">${arr[i].name}</div>
            <div class="result__item-icon">
                <i class="fa-solid fa-pencil" onclick="edit(this)"></i>
                <i class="fa-solid fa-trash-can" onclick="deletebtn(this)"></i>
            </div>
            </div>
            <div class="result__item-note">
                <span>${arr[i].note}</span>
            </div>
    </div>`
    })
}