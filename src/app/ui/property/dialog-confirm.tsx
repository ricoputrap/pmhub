'use client'

import { editPropertyStatus } from "@/app/lib/property/actions";
import { EnumAction, usePropertyStore } from "@/store/property";

export default function DialogConfirm() {
  const id = usePropertyStore((state) => state.id);
  const action = usePropertyStore((state) => state.action);
  const label = action === EnumAction.ACTIVATE ? 'Activate' : 'Deactivate';

  const closeDialog = () => {
    document?.getElementById('my_modal_1')?.classList.remove('modal-open');
  }

  const handleSubmit = async () => {
    await editPropertyStatus(id, action === EnumAction.ACTIVATE);
    closeDialog();
  }

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Warning!</h3>
        <p className="py-4">Are you sure want to {label.toLowerCase()} this property?</p>
        <div className="modal-action">
          <div className='flex gap-4'>
            <button className="btn btn-ghost" onClick={closeDialog}>Cancel</button>
            <button className="btn btn-neutral" onClick={handleSubmit}>{ label }</button>
          </div>
        </div>
      </div>
    </dialog>
  )
}