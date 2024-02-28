document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open");
    })
})

window.onload = function () {
    addTagsClickHandler();
}

const addTagsClickHandler = () => {
    document.querySelector('.region-tabs__list').addEventListener('click', (e) => {
        if(e.target.classList.contains('region-tabs__item')){
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            showGrid(clickedTag);
        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.region-tabs__list .region-tabs__item');
    tags.forEach(tag => {
        tag.classList.remove('item-active');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('item-active');
}

const showGrid = (clickedTag) => {
    let tags = document.querySelectorAll('.highpoints-grid .highpoints-list');
    tags.forEach(tag => {
        if (tag.classList.contains('list-enable')) {
            tag.classList.add('list-disable');
            tag.classList.remove('list-enable');
        }
    })
    if (clickedTag.classList.contains('central-FO')) {
        document.querySelector('.highpoints-grid .central-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .central-FO').classList.add('list-enable');
    }
    if (clickedTag.classList.contains('north-west-FO')) {
        document.querySelector('.highpoints-grid .north-west-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .north-west-FO').classList.add('list-enable');
    }
    if (clickedTag.classList.contains('south-FO')) {
        document.querySelector('.highpoints-grid .south-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .south-FO').classList.add('list-enable');
    }
    if (clickedTag.classList.contains('north-caucasus-FO')) {
        document.querySelector('.highpoints-grid .north-caucasus-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .north-caucasus-FO').classList.add('list-enable');
    }
    if (clickedTag.classList.contains('volga-FO')) {
        document.querySelector('.highpoints-grid .volga-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .volga-FO').classList.add('list-enable');
    }
    if (clickedTag.classList.contains('ural-FO')) {
        document.querySelector('.highpoints-grid .ural-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .ural-FO').classList.add('list-enable');
    }
    if (clickedTag.classList.contains('siberian-FO')) {
        document.querySelector('.highpoints-grid .siberian-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .siberian-FO').classList.add('list-enable');
    }
    if (clickedTag.classList.contains('far-eastern-FO')) {
        document.querySelector('.highpoints-grid .far-eastern-FO').classList.remove('list-disable');
        document.querySelector('.highpoints-grid .far-eastern-FO').classList.add('list-enable');
    }
}