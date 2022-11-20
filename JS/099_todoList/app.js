const main = document.querySelector('articl_main')
const userTask = main.querySelector('header input')
const addBtn = main.querySelector('header button')
const listTodo = main.querySelector('.list_todo')

// todo-list를 작성하고 등록
addBtn.addEventListener('click', createListItem)

// 등록 함수
function createListItem() {
    const val = userTask.value

    // 값이 있을 때, 없을 때
    if(val) {

    } else {
        errorMsg('내용을 작성해주세요');
    }
}

// 에러 메시지 함수
function errorMsg(msg) {
    throw Error(msg)
}