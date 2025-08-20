console.log('Handler fiel added');
 document.getElementById('btn-update').addEventListener('click', function(){
            // console.log('button click');
            const pageTitleElement = document.getElementById('title-text');
            console.log(pageTitleElement); 
            pageTitleElement.innerText = "Upadtae heading tag"
        })