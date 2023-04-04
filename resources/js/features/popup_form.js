

export const PopupForm = () => {


    console.log('[popup form]');
    const form_name = document.getElementById('form_name');

    document.querySelectorAll('.popup-action').forEach( popup_btn => {

        console.log('[btn]', popup_btn );

        let bannerForm = popup_btn.closest('._banner_form');

        if( bannerForm ){

            popup_btn.addEventListener('click', () => {
                let name = bannerForm.querySelector('p').innerText;
                form_name.value = name;
            });
        }
    });


}