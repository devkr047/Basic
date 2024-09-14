document.addEventListener('DOMContentLoaded', function () {
    const content = ["Developer", "Designer", "YouTuber"];
    var localVar;
    let i = 0;
    let j = 0;
    typingText()
    function typingText() {
        if (i < content[j].length) {
            document.getElementById('occup').textContent += content[j].charAt(i);
            i++;
            setTimeout(typingText, 100);
        }
        else {
            localVar = content[j];
            setTimeout(backspaceText, 1200);
        }
    }
    function backspaceText() {
        if (i != 0) {
            localVar = localVar.slice(0, -1);
            document.getElementById('occup').textContent = localVar;
            i--;
            setTimeout(backspaceText, 100);
        }
        else {
            if (j == content.length - 1) {
                j = 0;
            }
            else {
                j++;
            }
            setTimeout(typingText, 100);
        }
    }
});