


export const PhoneValidator = () => {

    [...document.querySelectorAll('._validate_phone')].forEach( input => {

        console.log('i', input );

        input.addEventListener('input', ( e ) => {

            if( input.value.length <= 7 ){
                input.setCustomValidity("Phone is too short");
            } else {
                input.setCustomValidity("");
            }

            input.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё]/, '');

        });


    });


}