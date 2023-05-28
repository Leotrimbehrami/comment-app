import React, { useState } from "react";
import "../styles/CommentList.css";

const CommentList = ({ comments, setComments }) => {
  const commentCount = comments.length;

    const handleDelete = (index) => {
      setComments(comments.filter((comment, i) => i !== index))
    }

  
    return(
      <div className="comment-list-container">
        {/* qitu vjen icon */}
        <h2>{commentCount} Kommentar</h2>
      {comments.map((comment, index) => (
        <div className="comment-container" key={index}>
          <p className="comment-name">{comment.name}</p>
          <p className="comment-date">{comment.date}</p>
          <p className="comment-message">{comment.message}</p>
          <button className="comment-delete-btn" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};




export default CommentList;
