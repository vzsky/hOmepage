import { useState, useEffect } from 'react'
import * as Chakra from '@chakra-ui/core'
import ReactDraggable from 'react-draggable'

export type Prop = {[x:string]:any}

export const useWindowSize = () => {
    const isClient = typeof window === 'object';
  
    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => { 
        if (!isClient) {
            return;
        }
      
        function handleResize() {
            setWindowSize(getSize());
        }
  
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
}

export const Image = (props:Prop) => (
    <Chakra.Image 
        width='100%'
        src={props.src} 
        onClick={props.onClick}
        onDragStart={(e) => {
            e.preventDefault();
        }}
    />
)

export const Draggable = (props:Prop) => (
    <ReactDraggable
        handle='.drag'
        bounds = 'parent'
        {...props}
    />
)