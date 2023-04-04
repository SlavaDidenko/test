const saveToServer = ( file, callback ) => {
    let csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    let formData = new FormData();

        formData.append('image', file)
        formData.append('_token', csrf)
        fetch(
            '/api/add-photo-to-post',
            {
            method: "POST",
            headers: {
                "X-CSRF-Token": csrf,
            },
            body: formData
            }
        )
        .then( res => res.json() )
        .then( callback );
}

export default saveToServer;
