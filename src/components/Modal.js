import './modal.css'
function Modal(props) {

//store props data in variable
  const imgUrl = props.data.filter((item) => item.id === props.imageId)[0].largeImageURL;

  return (
    <div className='modal-wrapper'>
      <div className="modal-content">
        <button onClick={() => props.show(false)}>X</button>
        <img src={imgUrl} alt="gallery pic" />
      </div>

    </div>
  )
}

export default Modal;
