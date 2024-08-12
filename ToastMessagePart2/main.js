function toast({type='info', messages = '', title='', duration=3000}){
    const main = document.getElementById('toast');

    if(main){
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast--${type}`);

        const automatedReset = setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function(e){
            if(e.target.closest('.toast--close')){
                main.removeChild(toast);
                clearTimeout(automatedReset);
            }
        }


        const icons = {
            correct: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-circle-xmark',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation'
        };
        const delay = (duration/1000);
        const icon = icons[type];
        toast.style.animation = `slide 0.3s linear, fadeOut 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast--icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast--body">
                <div class="toast--title">
                    <h3>${title}</h3>
                </div>
                <div class="toast--content">
                    <p>${messages}</p>
                </div>
            </div>
            <div class="toast--close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        main.appendChild(toast);
    }
    
}

function showSuccessToast(){
    toast({
        type: 'success',
        messages: 'This is a success message',
        title:'Success',
        duration: 3000
    })
}

function showErrorToast(){
    toast({
        type: 'error',
        messages: 'This is a error message',
        title:'Error',
        duration: 3000
    })
}

function showInfoToast(){
    toast({
        type: 'info',
        messages: 'This is a info message',
        title:'Info',
        duration: 3000
    })
}

function showWarningToast(){
    toast({
        type: 'warning',
        messages: 'This is a warning message',
        title:'Warning',
        duration: 3000
    })
}