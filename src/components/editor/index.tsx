import React from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});


interface IEditor {
  onChange: (data: string) => void;
}

export const Editor = ({ onChange }: IEditor) => {
  return (
    <div>
      <p>SunEditor</p>
      <SunEditor lang='pt_br' onChange={onChange} />
    </div>
  );
};