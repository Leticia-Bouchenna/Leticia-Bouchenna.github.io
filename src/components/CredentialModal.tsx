import React, { useEffect, useRef } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Certification } from "../types/portfolio";

interface CredentialModalProps {
  certification: Certification | null;
  onClose: () => void;
}

function CredentialModal({ certification, onClose }: CredentialModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!certification) return undefined;
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => window.clearTimeout(focusTimer);
  }, [certification]);

  return (
    <Dialog
      open={Boolean(certification)}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      aria-labelledby="credential-modal-title"
      aria-describedby="credential-modal-description"
      className="credential-dialog"
    >
      {certification && (
        <>
          <div className="credential-modal-header">
            <div>
              <p>{certification.issuer}</p>
              <h2 id="credential-modal-title">{certification.title}</h2>
              <span id="credential-modal-description">{certification.year}</span>
            </div>
            <IconButton
              onClick={onClose}
              aria-label="Close credential viewer"
              className="credential-close"
              ref={closeButtonRef}
            >
              <CloseRoundedIcon />
            </IconButton>
          </div>
          <DialogContent className="credential-modal-content">
            <img
              src={certification.credentialImage}
              alt={certification.credentialAlt}
            />
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

export default CredentialModal;
