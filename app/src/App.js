import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Abstract, FormUsers, Header, Modal } from "./components";
import FormSchool from "./components/FormSchool";
import UserList from "./components/UserList";
import actions from "./redux/actions";

function App() {
  const showModal = useSelector((state) => state.showModal);
  const showModalSchool = useSelector((state) => state.showModalSchool);
  const showAbstract = useSelector((state) => state.showAbstract);
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllUsers());
  }, [showAbstract]);

  const close = () => {
    dispatch(actions.closeModal());
  };
  const schoolClose = () => {
    dispatch(actions.closeModalSchool());
  };
  const abstractClose = () => {
    dispatch(actions.closeAbstract());
  };
  return (
    <>
      <div className="App">
        <Header />
        <UserList users={allUsers} />
      </div>
      <Modal showModal={showModal} close={close}>
        <FormUsers />
      </Modal>
      <Modal showModal={showModalSchool} close={schoolClose}>
        <FormSchool />
      </Modal>
      <Modal showModal={showAbstract} close={abstractClose}>
        <Abstract />
      </Modal>
    </>
  );
}

export default App;
