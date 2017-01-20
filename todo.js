
var log = function() {
    console.log.apply(console, arguments);
}

var templateItem = function(item) {
    var item = `
                <li>
                    <input type="checkbox" name="" value=""><label>${item}</label>
                </li>
    `
    return item
}

var addItem = function() {
    var list = document.querySelector('.todo-title')
    var itemEle = document.querySelector('#id-input-add')
    itemEle.addEventListener('keydown', function(event) {
        var key = event.key
        log('event key', key)
        var task = itemEle.value
        if (event.key === 'Enter' && task != '') {
            var template = templateItem(task)
            list.insertAdjacentHTML('afterend', template)
        }
    })
}

var checkTask = function() {
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

var __main = function() {
    addItem()
    checkTask()
}

__main()
