document.querySelectorAll(".btn-delete").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir la acción una vez completada!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "No, cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "El registro ha sido eliminado.",
                    icon: "success"
                });
            }
        });
    });
});