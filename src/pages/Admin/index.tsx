import { useEffect } from 'react';

export function AdminConfia(){

  useEffect(()=>{
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
  },[]);

  return(
    <h1>Se você viu isso, tu foi rickrollado</h1>
  );
}