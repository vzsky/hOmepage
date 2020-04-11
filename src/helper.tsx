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
        onDragStart={(e) => {
            e.preventDefault();
        }}
        {...props}
    />
)

export const Draggable = (props:Prop) => (
    <ReactDraggable
        handle='.drag'
        bounds = 'parent'
        {...props}
    />
)

import Codeforces from '@iconify/icons-simple-icons/codeforces'
import Github from '@iconify/icons-simple-icons/github'
import Facebook from '@iconify/icons-simple-icons/facebook'
import LinkedIn from '@iconify/icons-simple-icons/linkedin'
import Instagram from '@iconify/icons-simple-icons/instagram'
import Mail from '@iconify/icons-simple-icons/gmail'
import Telegram from '@iconify/icons-simple-icons/telegram'

export const IconMap = {
    'codeforces' : Codeforces,
    'github' : Github,
    'facebook' : Facebook,
    'linkedin' : LinkedIn,
    'instagram' : Instagram,
    'mail' : Mail,
    'telegram' : Telegram,
}