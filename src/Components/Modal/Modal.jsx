import ModalForm from "./ModalForm"
import "./Modal.css"

export default function Modal ({text,toggleModal,existingData}){
    return(
        <div className='Modal' onClick={toggleModal}>
            <div className='modalBody' onClick={e => e.stopPropagation()}>
                <h2 className='modalHead'>{text}</h2>
                <ModalForm existingData={existingData} formType={text} toggleModal={toggleModal}/>
            </div>
        </div>
    );
}