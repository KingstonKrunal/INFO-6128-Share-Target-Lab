const elements = {
  h1: document.querySelector('h1'),
  titleInput: document.querySelector('#title'), 
  textInput: document.querySelector('#text'), 
  urlInput: document.querySelector('#url'), 
  shareBtn: document.querySelector('#btn') 
}


const onShare = async() => {
  const title = elements.titleInput.value;
  const text = elements.textInput.value;
  const url = elements.urlInput.value;

   try {
     if(navigator.share){
       await navigator.share({
         title, text, url
       });

       console.log("Successful!", {title, text, url})
     }
   } catch (err) {
     console.error("Unsuccessful!!", err); 
   }
}

elements.shareBtn.addEventListener('click', onShare);
