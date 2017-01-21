
var log = function() {
    console.log.apply(console, arguments);
}

var templateItem = function(item, done) {
    var status = ''
    var checked = ''
    if (done) {
        status = 'task-done'
        checked = 'checked'
    }
    var item = `
                <li>
                    <input type="checkbox" name="" value="" ${checked}><label class="todo-item ${status}">${item}</label>
                </li>
    `
    return item
}

var addButton = function() {
    var list = document.querySelector('.todo-title')
    var itemEle = document.querySelector('#id-input-add')
    itemEle.addEventListener('keydown', function(event) {
        var key = event.key
        // log('event key', key)
        var task = itemEle.value
        var status = false
        if (event.key === 'Enter' && task != '') {
            insertItem(task, status)
            saveTodos()
        }
    })
}

var insertItem = function(task, done) {
    var list = document.querySelector('.todo-title')
    var template = templateItem(task, done)
    list.insertAdjacentHTML('afterend', template)
}

var checkButton = function() {
    // 这种写法如果后续又有 input 添加，无法对后续的 input 生效
    // 醒悟到这里应该用事件委托

    // var tasks = document.querySelectorAll('label')
    // var checkBoxes = document.querySelectorAll('input')
    // for (var i = 0; i < checkBoxes.length; i++) {
    //     var item = checkBoxes[i]
    //     var task = tasks[i]
    //     log('item', item)
    //     item.addEventListener('change', function(event) {
    //         log('change')
    //         for (var i = 0; i < tasks.length; i++) {
    //             var task = tasks[i]
    //             if (checkBoxes[i].checked) {
    //                 task.classList.add('task-done')
    //             } else {
    //                 task.classList.remove('task-done')
    //             }
    //         }
    //     })
    // }

    // 事件委托的写法
    var list = document.querySelector('ul')
    list.addEventListener('change', function(event) {
        var target = event.target
        // log('target', event)
        if (target.type === 'checkbox') {
            // log('in target', target)
            var label = target.nextSibling
            // log('label', label)
            toggleClass(label, 'task-done')
            saveTodos()
        }
    })
}

var toggleClass = function(ele, className) {
    if (ele.classList.contains(className)) {
        ele.classList.remove(className)
    } else {
        ele.classList.add(className)
    }
}

var saveTodos = function() {
    var contents = document.querySelectorAll('.todo-item')
    var todos = []
    for (var i = 0; i < contents.length; i++) {
        var c = contents[i]
        var status = c.classList.contains('task-done')
        var item = {
            done: status,
            content: c.innerHTML,
        }
        todos.push(item)
    }
    log('todos', todos)
    saveData(todos)
}

var loadTodos = function() {
    var todos = loadData()
    log('load todos', todos)
    for (var i = 0; i < todos.length; i++) {
        var task = todos[i].content
        var status = todos[i].done
        insertItem(task, status)
    }
}

var saveData = function(dataArray) {
    var strData = JSON.stringify(dataArray)
    localStorage.todos = strData
}

var loadData = function() {
    var strData = localStorage.todos
    return JSON.parse(strData)
}

var __main = function() {
    addButton()
    checkButton()
    loadTodos()
}

__main()
