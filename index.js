const model = [
    {type: 'title', value: 'Hello World form JS'},
    {type: 'text', value : 'here we go with some text'},
    {type: 'columns', value: [
        '111111',
        '222222',
        '333333'
    ]},
    {type: 'image', value: './assets/img/photo_2025-06-15_20-07-36.jpg'},
]

const $site = document.querySelector('#site')

const title = (block) => {
        return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `
}

const text = (block) => {
    return `
            <div class="row">
                <div class="col-sm">
                    <p>${block.value}</p>
                </div>
            </div>
        `
}

model.forEach(block => {
    let html = ''

    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    } else if (block.type === 'image') {
        html = image(block)
    }

    $site.insertAdjacentHTML('beforeend', html)
})

function columns (block) {
    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
        <div class="row">
            ${html.join('')}
        </div>
    `
}

function image (block) {
    return `
            <div class="row">
                <div class="col-sm">
                    <div>
                        <img src="${block.value}"/>
                    </div>
                </div>
            </div>
        `
}

