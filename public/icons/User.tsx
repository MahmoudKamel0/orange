"use client"
export default function User({size} : {size?:number}) {
       return (
              <svg width={size} height={size} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M10 4C10 5.65685 8.6569 7 7 7C5.3431 7 4 5.65685 4 4C4 2.34315 5.3431 1 7 1C7.7956 1 8.5587 1.31607 9.1213 1.87868C9.6839 2.44129 10 3.20435 10 4Z" stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M10.5 10H3.5C2.11929 10 1 11.1193 1 12.5C1 13.8807 2.11929 15 3.5 15H10.5C11.8807 15 13 13.8807 13 12.5C13 11.1193 11.8807 10 10.5 10Z" stroke="#FF6600" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

       )
}
