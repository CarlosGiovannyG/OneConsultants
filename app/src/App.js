import { useDispatch, useSelector } from "react-redux";
import { Abstract, FormUsers, Header, Modal } from "./components";
import FormSchool from "./components/FormSchool";
import actions from "./redux/actions";

function App() {
  const showModal = useSelector((state) => state.showModal);
  const showModalSchool = useSelector((state) => state.showModalSchool);
  const showAbstract = useSelector((state) => state.showAbstract);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(actions.closeModal());
  };
  const closeSchool = () => {
    dispatch(actions.closeModal());
  };
  const closeAbstract = () => {
    dispatch(actions.closeAbstract());
  };
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <Modal showModal={showModal} close={close}>
        <FormUsers />
      </Modal>
      <Modal showModal={showModalSchool} close={closeSchool}>
        <FormSchool />
      </Modal>
      <Modal showModal={showAbstract} close={closeAbstract}>
        <Abstract />
      </Modal>
    </>
  );
}

export default App;
