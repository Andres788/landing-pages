
const winners = [

    {
        "name": "CEPILLO SECADOR IONICO",
        "desc":" El Cepillo Secador Iónico One-Step Hair Dry® se puede utilizar para secar, alisar, voluminizar y brillar tu cabello, logrando un look elegante de una forma rápida y sencilla. ", 

    },
    {
        "name": "MICROFONO PARLANTE WS-858",
        "desc":"Microfono inalambrico de mano ideal para usar en karaokes y fiestas , bluetooth, tiene cambio de voz y eco.",

    },
    {
        "name": "Pestañina 3D",
        "desc":"Máscara de pestañas de fibra de seda te proporciona una longitud y un volumen increíbles sin extensiones, rellenos ni falsificaciones. Esta fórmula profesional contiene fibras de alargamiento que se pueden aplicar en capas para crear pestañas que parecen seguir creciendo y creciendo. ",

    },
]

const Products= document.querySelector('.products__cards');
const Product= ()=>{
    const view = `    

    ${winners.map(winner =>`
    <div class="card">

    <div class="card__inner">
    <div class="card__face card__face--front"  ;>

        <div class="overlay" id="overlay-card">${winner.name}</div>
    </div>
    <div class="card__face card__face--back">
        <div class="card__title">
                <h2>${winner.name}</h2>
        </div>
        <div class="card__body">
           
            <div class="card__body--desc">
                <p>${winner.desc}</p>
            </div>
            <div class="card__body--btn">
                <a href="#">comprar</a>
            </div>
        </div>

    </div>
</div>
</div>

    `
    
    ).join('')}
    


    `;
    return view
}

console.log(Product())

Products.innerHTML=Product();



const card= document.querySelectorAll('.card__inner')


for(let i=0;i<3;i++ ){
    card[i].addEventListener('click',function(){
        card[i].classList.toggle('is-flipped')
    })


}





const openModalBtn= document.querySelectorAll('[data-modal-target]')
const closeModalBtn= document.querySelectorAll('[data-close-button]')
const overlay= document.getElementById('modal_overlay')

openModalBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)     
    })
})

closeModalBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal(modal)     
    })
})


function openModal(modal){
    if(modal==null) return
    modal.classList.add('active')
    overlay.classList.toggle('active')

}

function closeModal(modal){
    if(modal==null) return
    modal.classList.remove('active')
    overlay.classList.toggle('active')

}

