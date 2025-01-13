"use client"

export default function Location({size} : {size?:number}) {
       return (
              <svg width={size} height={size} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width={23} height={23} rx="11.5" fill="#4C4848" />
              <path d="M11.9779 16.4485C14.2375 15.2959 16.0011 13.387 16.0011 11.0661C16.0011 8.59085 13.9953 6.58429 11.521 6.58429C9.04665 6.58429 7.04083 8.59085 7.04083 11.0661C7.04083 13.387 8.80437 15.2959 11.064 16.4485C11.3512 16.595 11.6908 16.595 11.9779 16.4485Z" fill="white" />
              <path d="M13.201 11.1402C13.201 12.0684 12.4488 12.8209 11.5209 12.8209C10.5931 12.8209 9.8409 12.0684 9.8409 11.1402C9.8409 10.212 10.5931 9.45953 11.5209 9.45953C12.4488 9.45953 13.201 10.212 13.201 11.1402Z" fill="#4C4848" />
              </svg>



       )
}
