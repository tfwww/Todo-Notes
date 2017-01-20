
var log = function() {
    console.log.apply(console, arguments);
}

var templateBox = function() {
    var t = `
            <div class="todo-item">
                <h3>TODAY</h3>
                <button class="add-button" type="button" name="button">+</button>
                <h3>TOMORROW</h3>
                <h3>UPCOMING</h3>
                <h3>SOMEDAY</h3>
            </div>
    `
    return t
}

var templateItem = function() {
    var item = `
                <div class="checkoff-item">
                    <a href="#link" class="checkoff-link todo-item">
                        <img src="plus-icon.png">
                    </a>
                </div>
    `
    return item
}

var showDetails = function() {
    var box = document.querySelector('.category')
    box.addEventListener('click', function(event) {
        var target = event.target
        if (target.classList.contains('category')) {
            var template = templateBox()
            box.insertAdjacentHTML('beforeend', template)
        }
    })
}

var addItem = function() {
    var body = document.querySelector('body')
    body.addEventListener('click', function(event) {
        var button = event.target
        log('event target', button)
        if (button.classList.contains('add-button')) {
            var template = templateItem()
            var hideEle = document.querySelector('.todo-item')
            body.insertAdjacentHTML('beforeend', template)
            hideEle.classList.add('hide')
        }
    })
}

var __main = function() {
    showDetails()
    addItem()
}

__main()
