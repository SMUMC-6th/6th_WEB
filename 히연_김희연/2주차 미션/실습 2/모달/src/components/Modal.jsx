import React from "react";

export default function Modal({ setVisible }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-content">
          <h3>안녕하세요</h3>
          <p>모달 내용은 어쩌고 저쩌고..</p>
        </div>
        <button className="close" onClick={() => setVisible(false)}>
          닫기
        </button>
      </div>
    </div>
  );
}
