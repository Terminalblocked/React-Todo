import React, { useState } from "react";
import './TodoItem.scss';

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);

  const handleCheckboxClick = () => {
    props.onStatusChange(props.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    props.onEdit(props.id, editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(props.text);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.status}
        onChange={handleCheckboxClick}
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="todo-item-form">
          <input
            type="text"
            value={editedText}
            onChange={handleEditChange}
            className="todo-item-input"
          />
          <button type="submit" className="todo-item-button">
            Save
          </button>
          <button
            type="button"
            className="todo-item-button"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="todo-item-text" onDoubleClick={handleEditClick}>
          {props.text}
        </div>
      )}
      <button onClick={handleDeleteClick} className="todo-item-button">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
