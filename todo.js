
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
            list.insertAdjacentHTML('beforeend', template)
        }
    })
}

var checkTask = function() {
    var tasks = document.querySelectorAll('label')
    var checkBoxes = document.querySelectorAll('input')

    for (var i = 0; i < checkBoxes.length; i++) {
        var item = checkBoxes[i]
        var task = tasks[i]
        log('task', task)
        item.addEventListener('change', function(event) {
            log('change')
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i]
                if (checkBoxes[i].checked) {
                    task.classList.add('task-done')
                } else {
                    task.classList.remove('task-done')
                }
            }
        })
    }
}

var __main = function() {
    addItem()
    checkTask()
}

__main()
