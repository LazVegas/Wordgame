$(document).ready(function(){
    // setup
    const underel = $("#underscores")
    const words = commonWords.filter(w => w.length > 3)
    const answer = words[Math.floor(Math.random() * words.length)].split("")
    let under = answer.map(l => "_")
    underel.html(under.join(" "))
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let buttons = ""
    alphabet.split("").forEach(l => {
       buttons += `<button>${l.toUpperCase()}</button>`
    })
    console.log(answer.join(""))
    let guesses = 10

    $("#buttons").html(buttons)

    $("#buttons").on("click", "button", function(e) {
        e.preventDefault()
        const guess = $(this)
            .html()
            .toLowerCase()
        $(this).attr("disabled", true)

        if (answer.includes(guess)) {
            under = under.map((l, i) => {
                if (l !== "_") {
                    return l
                } else {
                    return answer [i] === guess ? guess : "_"
                }
            })

            underel.html(under.join(" "))
        } else {
            guesses--
            if (guesses === 9) {
                $("#hangman").removeClass("one")
                $("#hangman").addClass("two")
            }
            if (guesses === 8) {
                $("#hangman").removeClass("two")
                $("#hangman").addClass("three")
            }
            if (guesses === 7) {
                $("#hangman").removeClass("three")
                $("#hangman").addClass("four")
            }
            if (guesses === 6) {
                $("#hangman").removeClass("four")
                $("#hangman").addClass("five")
            }
            if (guesses === 5) {
                $("#hangman").removeClass("five")
                $("#hangman").addClass("six")
            }
            if (guesses === 4) {
                $("#hangman").removeClass("six")
                $("#hangman").addClass("seven")
            }
            if (guesses === 3) {
                $("#hangman").removeClass("seven")
                $("#hangman").addClass("eight")
            }
            if (guesses === 2) {
                $("#hangman").removeClass("eight")
                $("#hangman").addClass("nine")
            }
            if (guesses === 1) {
                $("#game").html(`<h1 id="gameOver">GAME OVER</h1>`)
            }
        }
    })
})