import React from 'react';


export default function AddFolder(props) {
    const { tag, className, childrenm, ...otherProps } = props
    return React.createElement(
        props.tag,
        {
          className: ['NavCircleButton', props.className].join(' '),
          ...otherProps
        },
        props.children
      )
}