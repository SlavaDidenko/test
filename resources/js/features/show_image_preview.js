



const showUploadedImage = ( inputObj, image, filename ) => {

    console.log('SHOW PREVIEW');
    const IMAGE_BLOCK_CONTAINER_CLASSNAME = "._showPreloadedImage";
    const IMAGE_INPUT = "._image-input";
    const IMAGE_SELECTOR = "._image-node";
    const FILENAME_SELECTOR = "._filename";

    const ChangeImage = ( image_node, filename ) => (e) => {
        let input = e.target,
        nameFile = e.target.files[0].name;
        
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.addEventListener('load', function (e) {
                image_node.setAttribute('src', e.target.result);
                if( filename ){
                    filename.innerText = '('+nameFile+')';
                }
            });
            reader.readAsDataURL(input.files[0]);
        }
    }


    const imagesBlocks = document.querySelectorAll( IMAGE_BLOCK_CONTAINER_CLASSNAME );

    imagesBlocks.forEach( imageBlock => {
        const image = imageBlock.querySelector( IMAGE_SELECTOR );
        const input = imageBlock.querySelector( IMAGE_INPUT );
        const filename = imageBlock.querySelector( FILENAME_SELECTOR );
        input.addEventListener( 'change', ChangeImage(image, filename )  );
    });


    // 

}

export default showUploadedImage;