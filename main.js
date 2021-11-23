var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add('success')
        status.innerHTML = "We will send email to you when the chat room is approved.";
        form.reset()
      }).catch(error => {
        status.classList.add('error')
        status.innerHTML = "Oh , I think you may have forgotten to include something."
      });
    }
    form.addEventListener("submit", handleSubmit)