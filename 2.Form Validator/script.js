
function LoadDOMpurify(){
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = "https://cdn.jsdelivr.net/npm/dompurify@2.4.3/dist/purify.min.js"
        script.onload = resolve
        script.onerror = reject

        document.head.appendChild(script)

    })
}



async function validate(){
    let user = document.getElementById("User").value
    let pass = document.getElementById("Pass").value

    let btn = document.getElementById("BtnSend").value

    if(btn === "press"){
        if(user === "" || user === null){
            alert("Please inform a username")
    
        }
    
    
        if(pass === "" || pass === null){
            alert("Please inform a password")
    
        }
    
        
        try {
            await LoadDOMpurify()
            
            const cleanUser = DOMPurify.sanitize(user)
            const cleanPass = DOMPurify.sanitize(pass)
    
            alert(`Sanitized\nUser: ${cleanUser}\nPass: ${cleanPass}`)
    
    
        }catch (error) {
            console.error("Error loading DOMPurify: ", error)
            

        }
    }
}