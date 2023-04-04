export const cookieBlock = () => {
  const box = document.querySelector('#js-cookie-box');

  if(!box) return;

  // debugger
  if(document.cookie.toString().includes('cookies=accepted')) {
    box.style.display = 'none'
  } else {
    box.style.display = ''
  }

  box.querySelector('#js-cookie-button')
    .addEventListener('click', e => {
      let dontShowTo = new Date().getTime();
      let sevenDays = ((60 * 60 * 24)*1000 ) * 7;

      document.cookie = `cookies=accepted;expires=${  new Date( dontShowTo + sevenDays )}`;
      box.style.display = 'none'
    })

}