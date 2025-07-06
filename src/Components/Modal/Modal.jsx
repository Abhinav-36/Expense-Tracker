import ModalForm from "./ModalForm"
import "./Modal.css"

export default function Modal ({text,toggleModal,existingData}){
    return(
        <div className='Modal' onClick={toggleModal}>
            <div className='modalBody' onClick={e => e.stopPropagation()}>
                <div className='modalHead'>{text}</div>
                <ModalForm existingData={existingData} formType={text} toggleModal={toggleModal}/>
            </div>
        </div>
    );
}