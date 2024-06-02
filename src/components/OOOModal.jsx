import React, { useEffect } from 'react';
import Modal from 'react-modal';

const OutOfOfficeModal = () => {
const [isOpen, setIsOpen] = React.useState(false);

useEffect(() => {
setIsOpen(true);
}, []);

return (
<Modal
isOpen={isOpen}
ariaHideApp={false}
>
<div>
<h2>Out of Office Notice</h2>
<p>I will be out of office until June 10th with limited access to phone and email. I will return any inquiries when I return.</p>
<button onClick={() => setIsOpen(false)}>Close</button>
</div>
</Modal>
);
};

export default OutOfOfficeModal;
