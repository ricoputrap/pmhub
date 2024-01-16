'use client';

import { EnumAction, usePropertyStore } from '@/store/property';
import React from 'react'

interface Props {
  id: number,
  active: boolean;
}

const SwitchStatus: React.FC<Props> = ({ id, active }) => {
  const openDialog = usePropertyStore((state) => state.openDialog);

  const open = () => {
    const action = active ? EnumAction.DEACTIVATE : EnumAction.ACTIVATE
    openDialog(id, action)
    document?.getElementById('my_modal_1')?.classList.add('modal-open');
  }

  return (
    <input
      type="checkbox"
      className="toggle"
      checked={active}
      onClick={open}
      onChange={(e) => {
        e.preventDefault();
        return;
      }}
    />
  )
}

export default SwitchStatus