import { useEffect } from "react";

export default function useOnClickOutside(ref, handler){
    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler();
        };

        document.addEventListener('mousedown', listener); // 웹
        document.addEventListener('touchstart', listener); // 모바일
        
    
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      }
    }, [ref, handler]);
    
}