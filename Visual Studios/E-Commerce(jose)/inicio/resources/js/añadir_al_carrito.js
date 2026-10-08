document.querySelectorAll(".go-to-product").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-primary mx-2",
                cancelButton: "btn btn-danger mx-2"
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "¿Confirmas La Compra?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, confirmar compra",
            cancelButtonText: "No, cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra Realizada",
                    text: "Tu pedido ha sido procesado correctamente.",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                    customClass: {
                        confirmButton: "btn btn-success"
                    },
                    buttonsStyling: false
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Compra Cancelada",
                    text: "No se realizó ninguna compra",
                    icon: "error",
                    confirmButtonText: "Entendido",
                    customClass: {
                        confirmButton: "btn btn-secondary"
                    },
                    buttonsStyling: false
                });
            }
        });

    });
});