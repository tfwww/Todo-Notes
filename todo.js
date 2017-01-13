
var log = function() {
    console.log.apply(console, arguments);
}

var templateItem = function() {
    var t = `
            <div class="todo-item">
                <h3>TODAY</h3>
                <button type="button" name="button">+</button>
                <h3>TOMORROW</h3>
                <h3>UPCOMING</h3>
                <h3>SOMEDAY</h3>
            </div>
    `
    return t
}

var box = document.querySelector('.category')
box.addEventListener('click', function(event) {
    var template = templateItem()
    box.insertAdjacentHTML('beforeend', template)
})
var __main = function() {

}

__main()
