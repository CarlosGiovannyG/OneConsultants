import { actionsModal } from "./actionsModal";
import { actionsUsers } from "./actionsUsers";

const actions = {
  openModal: actionsModal.open,
  closeModal: actionsModal.close,
  openModalSchool: actionsModal.openSchool,
  closeModalSchool: actionsModal.closeSchool,
  openAbstract: actionsModal.openAbstract,
  closeAbstract: actionsModal.closeAbstract,
  filledForm: actionsUsers.filledForm,
  filledFormSchool: actionsUsers.filledFormSchool,
  continueForm: actionsUsers.continueForm,
  registerUser: actionsUsers.registerUser,
  getAllUsers: actionsUsers.getAllUser,
  clearState: actionsUsers.clearState,
};

export default actions;
