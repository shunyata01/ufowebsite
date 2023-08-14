        const scriptURL = 'https://script.google.com/macros/s/AKfycbyTb_Vmkj_qFEMoocp4lD4JwWlFq34LGPym_Bt0Fy4VYRrPNJN1Odsy67pIC5mTO4Tl/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Thank You For Subscribing!"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

        
        /* TEST JQUERY

        $(document).ready(function(){
            alert(1);
        });
        
        console.log($("#news").css("position"));
        
        */

        $(document).ready(function(){
            $("#news").hover(function(){
                
                $(this).css("color","transparent");
            },function(){
                $(this).css("color","white");
            });
        });

       /* WORK IN PROGRESS 
       
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecing) {
                    entry.target.classList.add('show');
                } else {
                   entry.target.classList.remove('show'); 
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
        
        */