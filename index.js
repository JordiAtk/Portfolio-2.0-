//  
// 
// 

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendForm(
    //     'service_w55qni7',
    //     'template_zpy33oh',
    //     event.target,
    //     'FxsojxRC2otipimqB'
    // ).then(() => {
    //     console.log('this worked1')
    // })
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        console.log('it worked 1');
    }, 500);

    

    
}