const mic = document.getElementById('mic');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Sorry, your browser doesn't support Speech Recognition.");
    } else {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      mic.addEventListener('click', () => {
        recognition.start();
      });

      recognition.onstart = () => {
        console.log("Listening...");
      };

      recognition.onresult = (event) => {
        const query = event.results[0][0].transcript;
        console.log("Recognized:", query);

        // Redirect to Google search
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      };

      recognition.onerror = (event) => {
        console.error("Error:", event.error);
        alert("Speech recognition error: " + event.error);
      };
    }