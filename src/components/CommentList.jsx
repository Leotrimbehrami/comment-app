import React, { useState } from "react";
import CommentForm from "./CommentForm";

const CommentList = ({ comments, setComments }) => {
  const commentCount = comments.length;

    const handleDelete = (index) => {
      setComments(comments.filter((comment, i) => i !== index))
    }

  
    return(
      <div>
        {/* qitu vjen icon */}
      <h2> {commentCount} Kommentar</h2>
      {comments.map((comment, index)=> (
        <div key={index}>
          <p>Name:{comment.name}</p>
          <p>Datum;{comment.date}</p>
          <p>Nachricht{comment.message}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      </div>
    )
  };




export default CommentList;
