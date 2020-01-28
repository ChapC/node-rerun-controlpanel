import React from 'react';

export function BoltIcon(props) {
    let colour = '#868686';
    if (props.style && props.style.color) {
        colour = props.style.color;
    }
    return (
        <svg className={'MuiSvgIcon-root ' + props.className} style={{...props.style}} height="512px" viewBox="-91 0 512 512.00141" width="512px">
            <g>
                <path d="m315 211h-124.144531l107.167969-188.558594c2.652343-4.644531 2.636718-10.34375-.042969-14.972656-2.695313-4.625-7.632813-7.46875-12.980469-7.46875h-180c-6.457031 0-12.1875 4.132812-14.222656 10.253906l-90 271c-1.539063 4.570313-.761719 9.609375 2.050781 13.519532 2.828125 3.914062 7.355469 6.226562 12.171875 6.226562h127.253906l-81.035156 190.097656c-2.902344 6.753906-.46875 14.621094 5.742188 18.558594 6.109374 3.90625 14.316406 2.878906 19.246093-2.691406l240-271c3.925781-4.410156 4.894531-10.726563 2.476563-16.101563-2.417969-5.390625-7.777344-8.863281-13.683594-8.863281zm0 0" fill={colour}/>
            </g>        
        </svg>
    );
}