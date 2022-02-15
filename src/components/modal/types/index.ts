export type ModalTypes = {
    isOpen: boolean;
    setModalIsOpen: Function;
    modalTitle: string;
    confirmationButtonText?: string;
    cancelButtonText?: string;
    children: React.ReactNode;
    handleConfirmAction?: Function;
    handleCancelAction?: Function;
    hasCloseIcon?: boolean;
};