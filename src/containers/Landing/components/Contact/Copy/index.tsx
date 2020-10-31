/**
 *
 *
 *    Copy
 *
 *
 */

import React, { useRef, memo } from 'react';
import styled from 'styled-components';

import CopyToClipboard from 'components/svg/Icons/CopyToClipboard';

import { toastSuccess } from 'utils/lib/Toastify';

const text = 'mikeschmerbeck@gmail.com';

const Copy = ({}: ICopyProps) => {
  const inputRef: any = useRef();
  const copyEmail = () => {
    /* Select the text field */
    inputRef.current.select();
    // inputRef.current.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand('copy');
    toastSuccess('Copied email to clipboard!');
  };

  return (
    <>
      <CopyButton type="button" onClick={copyEmail}>
        <CopyToClipboard width={25} height={25} />
      </CopyButton>
      <HiddenInput
        type="text"
        value={text}
        ref={inputRef}
        onChange={() => {}}
      />
    </>
  );
};

export default memo(Copy);

interface ICopyProps {}

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const CopyButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
