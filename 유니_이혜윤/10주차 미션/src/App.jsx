import Navbar from "./components/Navbar/Navbar";
import PlayList from "./components/PlayList/PlayList";
import Modal from "./components/PlayList/Modal";
import { useSelector } from "react-redux";
import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <PlayList />
              {isOpen && (
                <Modal>
                  <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
                </Modal>
              )}
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NotFound = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    alert('데이터 요청 경로를 확인해주세요😭');
    navigate('/');
  }, [navigate]);

  return null;
};

export default App;
