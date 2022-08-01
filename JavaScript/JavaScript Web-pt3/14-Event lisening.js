const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')


const clickButton = () => {
    alert('O Botão foi clicado')
}



input.addEventListener('focus', () => {
    console.log('Dei um foco ')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

button.addEventListener('click', () => { 
    alert('O Botão foi clicado')
})