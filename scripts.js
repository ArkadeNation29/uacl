document.addEventListener('DOMContentLoaded', () => {
    const combos = [
        { dad: 'Lion', mom: 'Tiger', result: 'Liger', video: 'https://www.youtube.com/embed/sample1' },
        { dad: 'Horse', mom: 'Donkey', result: 'Mule', video: 'https://www.youtube.com/embed/sample2' },
        // Add more combinations here
    ];

    const tableBody = document.querySelector('tbody');
    combos.forEach(combo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${combo.dad}</td>
            <td>${combo.mom}</td>
            <td>
                ${combo.result} 
                <button class="play-button" data-video="${combo.video}">Play Video</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', () => {
            videoFrame.src = button.getAttribute('data-video');
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
        videoFrame.src = "";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoFrame.src = "";
        }
    }
});
