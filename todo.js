
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
        if (event.key === 'Enter') {
            var template = templateItem(task)
            list.insertAdjacentHTML('beforeend', template)
        }
    })
}

var __main = function() {
    addItem()
}

__main()
