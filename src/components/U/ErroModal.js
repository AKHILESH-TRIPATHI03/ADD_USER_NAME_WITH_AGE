import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErroModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />

      <Card cssclass={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.coontent}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button btndubao={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErroModal;
