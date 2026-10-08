document.getElementById('imagenReclamo').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const previewContainer = document.getElementById('imagenPrevia');
    const previewImage = document.getElementById('previaImagen');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewContainer.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        previewContainer.style.display = 'none';
        previewImage.src = '';
    }
});