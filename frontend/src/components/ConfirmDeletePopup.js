import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup(props) {

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onClose();
    props.onDeleteCard(props.card);

  }

  return (
    <PopupWithForm
      name="deleteCard"
      title="Вы уверены?" 
      buttonSubmitText="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default ConfirmDeletePopup;