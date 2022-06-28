import * as React from 'react';

export interface MessageProps {
  children: React.ReactNode;
}

export function Message(props: MessageProps) {
  return <p>{props.children}</p>;
}

Message.displayName = 'Message';
