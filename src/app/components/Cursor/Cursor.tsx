"use client"
import { useEffect } from 'react';
import './Cursor.scss'


export default function Cursor() {

       const handleEffectMouse = (elementTarget: React.MouseEvent<HTMLDivElement>)=> {
              const element = elementTarget.target as HTMLElement;
              document.addEventListener('mousemove', function(event){
                     element.style.cssText = `left: ${event.clientX}px; top: ${event.clientY}px;`
              })
       }

       useEffect(function(){
              const cursor = document.querySelector('.cursor') as HTMLElement;
              const cursor2 = document.querySelector('.cursor2') as HTMLElement;

              document.addEventListener('mousemove', function(event){
                     if (cursor && cursor2) {
                            cursor.style.cssText = cursor2.style.cssText = `left: ${event.clientX}px; top: ${event.clientY}px`;
                     } 
              })

              return ()=> {
                     document.removeEventListener('mousemove', function(event){
                            if (cursor && cursor2) {
                                   cursor.style.cssText = cursor2.style.cssText = `left: ${event.clientX}px; top: ${event.clientY}px`;
                            }
                     })
              }
                                                                           
       })


       return (
              <>
                     <div onMouseMove={(e)=> handleEffectMouse(e)} className="cursor"></div>
                     <div onMouseMove={(e)=> handleEffectMouse(e)} className="cursor2"></div>
              </>
       )
}
