import { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
    };
  });

  return createPortal(
    <Dialog ref={dialog} onClose={onClose}>
      {children}
    </Dialog>,
    document.getElementById("modal-root")!
  );
});

const Dialog = styled.dialog`
  width: 90%;
  max-width: 35rem;
  background-color: #6b5e81;
  color: #edeaf3;
  border-radius: 8px;
  border: none;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
