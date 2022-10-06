import React, { useState } from "react";
import Modal from "react-responsive-modal";
import CloseIcon from "@material-ui/icons/Close";
import "react-responsive-modal/styles.css";
import "./css/Staff.css";
import logo from "../logo_website.jpeg";
function Staff({ post }) {
  const [modal, setmodalopen] = useState(false);
  const Close = <CloseIcon />;

  return (
    <main>
      <article className="cocktail">
        <div className="img-container">
          <img
            src="https://images.news18.com/ibnlive/uploads/2022/01/narendra-modi-1-16420784564x3.jpg"
            alt="namo"
          />
        </div>
        <div className="cocktail-footer">
          <h3>{post.name}</h3>
          <h4>{post.position}</h4>
          <button className="detail-btn" onClick={() => setmodalopen(true)}>
            details
          </button>
        </div>
      </article>
      <Modal
        open={modal}
        closeIcon={Close}
        onClose={() => setmodalopen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "auto",
            background: "rgba(0,0,0, 0.75)",
          },
        }}
      >
        <article className="cocktail modal_cocktail">
          <img src={logo} alt="namo" className="img_modal" />
          <div className="cocktail-footer">
            <h3>{post.name}</h3>
            <h4>{post.positon}</h4>
            <p>{post.dob}</p>
            <h3>{post.department}</h3>
          </div>
        </article>
      </Modal>
    </main>
  );
}
export default Staff;
