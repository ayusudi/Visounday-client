import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function SwallError(text) {
  MySwal.fire({
    text,
    position: "top-end",
    icon: "error",
    showConfirmButton: false,
    timer: 1500,
  })
}

export default SwallError