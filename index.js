function switchMode(isNightMode) {
  if (isNightMode) {
    // Night mode
    document.documentElement.style.setProperty('--color-body-light', '#050505');
    document.documentElement.style.setProperty('--color-text-forLight', '#FFFFFF');
    document.documentElement.style.setProperty('--color-searchbar-forLight', '#1f1f1f');
    $(".moon-icon path").css("stroke", "#8F19E8");
    $(".dropdown-content").css("box-shadow", "0px .25rem .5rem .25rem #8f19e8");
    $(".dropdown-content").css("background-color", "#383838");
    $(".search-bar").css("background-color", "#383838");
    $("body").css("--color-dividers", "#3a3a3a");
  } else {
    // Light mode
    document.documentElement.style.setProperty('--color-body-light', '#FFFFFF');
    document.documentElement.style.setProperty('--color-text-forLight', '#000000');
    document.documentElement.style.setProperty('--color-searchbar-forLight', '#f4f4f4');
    $("body").css("--color-dividers", "#e9e9e9");
    $(".search-bar").css("background-color", "#f4f4f4");
    $(".moon-icon path").css("stroke", "#838383");
    $(".dropdown-content").css("background-color", "#ffffff");
    $(".dropdown-content").css("box-shadow", "0px .25rem .5rem .25rem rgba(109,109,109,0.1)");
  }
}

$(document).ready(function() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
 
    $('#check').prop('checked', true);

    switchMode(true);
  } else {

    $('#check').prop('checked', false);

    switchMode(false);
  }
});

$("#check").change(function() {
  switchMode(this.checked);
});


$(document).ready(function() {
  $("#check").change(function() {
    if (this.checked) {
      // Night mode
      $("body").css("--color-body-light", "#050505");
      $("body").css("--color-text-forLight", "#FFFFFF");
      $("body").css("--color-searchbar-forLight", "1f1f1f");
      $("body").css("--color-dividers", "#3a3a3a");
      $(".search-bar").css("background-color", "#383838");
      $(".moon-icon path").css("stroke", "#8F19E8");
      $(".dropdown-content").css("background-color", "#383838");
      $(".dropdown-content").css("box-shadow", "0px .25rem .5rem .25rem #8f19e8");
    } else {
      // Light mode
      $("body").css("--color-body-light", "#FFFFFF");
      $("body").css("--color-text-forLight", "#000000");
      $("body").css("--color-searchbar-forLight", "f4f4f4");
      $("body").css("--color-dividers", "#e9e9e9");
      $(".search-bar").css("background-color", "#f4f4f4");
      $(".moon-icon path").css("stroke", "#838383");
      $(".dropdown-content").css("background-color", "#ffffff");
      $(".dropdown-content").css("box-shadow", "0px .25rem .5rem .25rem rgba(109,109,109,0.1)");
    }
  });
});

$(function dropDownMenu() {
  $(".dropbtn").click(function() {
    $(".dropdown-content").slideToggle();
  });
});

$(function fontSelector() {
    $(".font-button").click(function() {
      var font = $(this).attr("id");
      console.log(font);
      if (font === "Sans-Serif") {
        $("body").css("--ff-primary", "'Actor', sans-serif");
      } else if (font === "Serif") {
        $("body").css("--ff-primary", "'Lora', serif");
      } else if (font === "Mono") {
        $("body").css("--ff-primary", "'Inconsolata', monospace");
      }

      var lable = document.getElementById("dropbtn-lable");
        lable.textContent = font;
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    function searchAPI() {
  
      var form = document.querySelector('.search-form');
      var input = document.querySelector('.search-bar');
  
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (input.value === "") {
          var redSearchBar = document.getElementsByClassName("search-bar")[0];
        
          var rootStyles = getComputedStyle(document.documentElement);
          var errorColor = rootStyles.getPropertyValue('--color-error').trim();
        
          redSearchBar.style.border = "1px solid " + errorColor;
        
          var errorMessage = document.createElement("div");
          errorMessage.id = "error-message";
          errorMessage.innerText = "Whoops, cant be empty...";
        
          var searchContainer = document.getElementsByClassName("search-container")[0];
          searchContainer.appendChild(errorMessage);
        
          redSearchBar.addEventListener("input", function() {
            if (this.value !== "") {
              this.style.border = ""; 
              var errorElement = document.getElementById("error-message");
              if (errorElement) {
                errorElement.remove(); 
              }
            }
          });
          return;
        }
        
        var searchTerm = input.value;
        var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + searchTerm;


        //clear previous search
        var clearWordDisplay = document.getElementById("word-display");
        var clearPronunciationDisplay = document.getElementById("pronunciation-display");
        var clearNounDisplay = document.getElementById("noun-display");
        var clearVerbDisplay = document.getElementById("verb-display");
        var clearSourceDisplay = document.getElementById("source-display");
        var clearSynonymDisplay = document.getElementById("synonym-display");

        clearWordDisplay.innerHTML = "";
        clearPronunciationDisplay.innerHTML = "";
        clearNounDisplay.innerHTML = "";
        clearVerbDisplay.innerHTML = "";
        clearSourceDisplay.innerHTML = "";
        clearSynonymDisplay.innerHTML = "";

  
        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            // PROCESSING DATA
            console.log(data);
            // word
            var word = data[0].word;

            var wordDisplay = document.getElementById("word-display");

            console.log(wordDisplay);
            var paragraph = document.createElement("div");
            paragraph.innerText = word.charAt(0).toUpperCase() + word.slice(1); //capitalize first letter of word. taking rest of string and concatenating it back to the first letter

            wordDisplay.appendChild(paragraph);

            var playButton = document.createElement("button");
            playButton.id = "play-button";

              var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              svg.setAttribute("width", "75");
              svg.setAttribute("height", "75");
              svg.setAttribute("viewBox", "0 0 75 75");

              var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
              g.setAttribute("fill", "#A445ED");
              g.setAttribute("fill-rule", "evenodd");

              var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
              circle.setAttribute("cx", "37.5");
              circle.setAttribute("cy", "37.5");
              circle.setAttribute("r", "37.5");
              circle.setAttribute("opacity", ".25");

              var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
              path.setAttribute("d", "M29 27v21l21-10.5z");

              g.appendChild(circle);
              g.appendChild(path);
              svg.appendChild(g);

              playButton.appendChild(svg);

            wordDisplay.appendChild(playButton);

            //pronunciation
            var pronunciation = data[0].phonetics[0].text;

            var pronunciationDisplay = document.getElementById("pronunciation-display");

            console.log(pronunciationDisplay);
            var paragraph = document.createElement("div");
            paragraph.innerText = pronunciation;

            pronunciationDisplay.appendChild(paragraph);
            //phonetics
            var phonetics = data[0].phonetics[0].audio;

            var phoneticsDisplay = document.getElementById("play-button");

            console.log("phonetics is uploaded");
            var audio = document.createElement("audio");
            var source = document.createElement("source");
            source.setAttribute("src", phonetics);
            source.setAttribute("type", "audio/mpeg");
            
            var playButton = document.getElementById("play-button");
            playButton.addEventListener("click", function() {
              audio.play();
            });

            audio.appendChild(source);
            phoneticsDisplay.appendChild(audio);  

            //noun meaning
            try {
              var firstPartOfSpeech = data[0].meanings[0].partOfSpeech;
              var definitionOne = data[0].meanings[0].definitions[0].definition;
              var definitionTwo = data[0].meanings[0].definitions[1].definition;
              var definitionThree = data[0].meanings[0].definitions[2].definition;
            } catch (error) {
              console.error("An error occurred:", error);
            }

            try {
              var exampleOne = data[0].meanings[0].definitions[0].example;
              var exampleTwo = data[0].meanings[0].definitions[1].example;
              var exampleThree = data[0].meanings[0].definitions[2].example;
            } catch (error) {
              console.error("An error occurred for example query noun:", error);
            }

            firstPartOfSpeech.class = "part-of-speech";

            var nounDisplay = document.getElementById("noun-display");

            console.log(definitionOne);
            console.log(definitionTwo);
            console.log(definitionThree);
            console.log(exampleOne);
            console.log(exampleTwo);
            console.log(exampleThree);

            console.log(nounDisplay);

            var meaningOne = document.createElement("div");
            meaningOne.className = "meaning";

            var nounWord = document.createElement("div");
            var definitionList = document.createElement("ul");
            var listItemOne = document.createElement("li");

            if (definitionTwo === undefined) {
              definitionTwo = "";
            } else {
              var listItemTwo = document.createElement("li");
              listItemTwo.innerText = definitionTwo;
            }
            if (definitionThree === undefined) {
              definitionThree = "";
            } else {
              var listItemThree = document.createElement("li");
              listItemThree.innerText = definitionThree;
            }
           

            listItemOne.innerText = definitionOne;
            nounWord.innerHTML = "<i>" + firstPartOfSpeech + "</i>";
            meaningOne.innerText = "Meaning"

            nounWord.id = "noun-speech";

            
            nounDisplay.appendChild(nounWord);
            nounDisplay.appendChild(meaningOne);
            nounDisplay.appendChild(definitionList);
            definitionList.appendChild(listItemOne);

            if (definitionTwo !== "") {
            definitionList.appendChild(listItemTwo);
            }

            if (definitionThree !== "") {
            definitionList.appendChild(listItemThree);
            }


            if (exampleOne !== undefined) {
              var exampleItemOne = document.createElement("span");
              var exampleOneBreak = document.createElement("br");
              exampleItemOne.innerText = "''" + exampleOne + "''";
              listItemOne.appendChild(exampleOneBreak);
              listItemOne.appendChild(exampleItemOne);
              exampleItemOne.id = "example";
              console.log("example one added");
            } else {
              console.log("no example for definition one");
            } if (exampleTwo !== undefined) {
              var exampleItemTwo = document.createElement("span");
              var exampleTwoBreak = document.createElement("br");
              exampleItemTwo.innerText = "''" + exampleTwo + "''";
              listItemTwo.appendChild(exampleTwoBreak);
              listItemTwo.appendChild(exampleItemTwo);
              exampleItemTwo.id = "example";
              console.log("example two added");
            } else {
              console.log("no example for definition two");
            } if (exampleThree !== undefined) {
              var exampleItemThree = document.createElement("span");
              var exampleThreeBreak = document.createElement("br");
              exampleItemThree.innerText = "''" + exampleThree + "''";
              listItemThree.appendChild(exampleThreeBreak);
              listItemThree.appendChild(exampleItemThree);
              exampleItemThree.id = "example";
              console.log("example three added");
            } else {
              console.log("no example for definition three");
            }

            //synonyms
            var synonyms = data[0].meanings[0].definitions[0].synonyms;
            
            var synonymDisplay = document.getElementById("synonym-display");

            console.log(synonymDisplay);
            var synonymLabel = document.createElement("div");
            var synonymList = document.createElement("div");

            synonymList.id = "synonym-list";
            synonymLabel.id = "synonym-label";
            synonymLabel.innerText = "Synonyms ";
            if (synonyms.length === 0) {
              synonymList.innerText = "None";
            } else {
              synonymList.innerText = synonyms.join(", ");
            }

            synonymDisplay.appendChild(synonymLabel);
            synonymDisplay.appendChild(synonymList);
            

            //verb meaning

            try {
              var secondPartOfSpeech = data[0].meanings[1].partOfSpeech;
              var definitionFour = data[0].meanings[1].definitions[0].definition;
              var definitionFive = data[0].meanings[1].definitions[1].definition;
              var definitionSix = data[0].meanings[1].definitions[2].definition;
            } catch (error) {
              console.error("An error occurred:", error);
            }

            try {
              var exampleFour = data[0].meanings[1].definitions[0].example;
              var exampleFive = data[0].meanings[1].definitions[1].example;
              var exampleSix = data[0].meanings[1].definitions[2].example;
            } catch (error) {
              console.error("An error occurred for example query verb:", error);
            }

            if (definitionFour !== undefined) {
              var verbDisplay = document.getElementById("verb-display");
            
              console.log(definitionFour);
              console.log(definitionFive);
              console.log(definitionSix);
              console.log(exampleFour);
              console.log(exampleFive);
              console.log(exampleSix);
            
              console.log(verbDisplay);

              var meaningTwo = document.createElement("div");
              meaningTwo.className = "meaning";

              var verbWord = document.createElement("div");
              var verbDefinitionList = document.createElement("ul");
              var listItemFour = document.createElement("li");
            
              if (definitionFive === undefined) {
                definitionFive = "";
              } else {
                var listItemFive = document.createElement("li");
                listItemFive.innerText = definitionFive;
              }
              if (definitionSix === undefined) {
                definitionSix = "";
              } else {
                var listItemSix = document.createElement("li");
                listItemSix.innerText = definitionSix;
              }
              
              meaningTwo.innerText = "Meaning"
              listItemFour.innerText = definitionFour;
              verbWord.innerHTML = "<i>" + secondPartOfSpeech + "</i>";
            
              verbWord.id = "verb-speech";
              
              
              verbDisplay.appendChild(verbWord);
              verbDisplay.appendChild(meaningTwo);
              verbDisplay.appendChild(verbDefinitionList);
              verbDefinitionList.appendChild(listItemFour);
            
              if (definitionFive !== "") {
                verbDefinitionList.appendChild(listItemFive);
              }
            
              if (definitionSix !== "") {
                verbDefinitionList.appendChild(listItemSix);
              }
            }

            // QUERIES FOR VERB EXAMPLES

            if (exampleFour !== undefined) {
              var exampleItemFour = document.createElement("span");
              var exampleFourBreak = document.createElement("br");
              exampleItemFour.innerText = "''" + exampleFour + "''";
              listItemFour.appendChild(exampleFourBreak);
              listItemFour.appendChild(exampleItemFour);
              exampleItemFour.id = "example";
              console.log("example four added");
            } else {
              console.log("no example for definition four");
            } if (exampleFive !== undefined) {
              var exampleItemFive = document.createElement("span");
              var exampleFiveBreak = document.createElement("br");
              exampleItemFive.innerText = "''" + exampleFive + "''";
              listItemFive.appendChild(exampleFiveBreak);
              listItemFive.appendChild(exampleItemFive);
              exampleItemFive.id = "example";
              console.log("example five added");
            } else {
              console.log("no example for definition five");
            } if (exampleSix !== undefined) {
              var exampleItemSix = document.createElement("span");
              var exampleSixBreak = document.createElement("br");
              exampleItemSix.innerText = "''" + exampleSix + "''";
              listItemSix.appendChild(exampleSixBreak);
              listItemSix.appendChild(exampleItemSix);
              exampleItemSix.id = "example";
              console.log("example six added");
            } else {
              console.log("no example for definition six");
            }


            //source
            var source = data[0].sourceUrls[0];
            var sourceDisplay = document.getElementById("source-display");

            console.log(sourceDisplay);
            var link = document.createElement("a");
            link.id = "http-link";
            var sourceLink = document.createElement("a");
            sourceLink.innerText = "Source";
            link.innerText = source;
            link.setAttribute("href", source);
            link.setAttribute("target", "_blank");
            sourceLink.setAttribute("href", source);
            sourceLink.setAttribute("target", "_blank");

            var newIconWindow = document.createElement("div");
            newIconWindow.id = "new-icon-window";

            var svgTwo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgTwo.setAttribute("width", "14");
            svgTwo.setAttribute("height", "14");
            svgTwo.setAttribute("viewBox", "0 0 14 14");

            var pathTwo = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathTwo.setAttribute("fill", "none");
            pathTwo.setAttribute("stroke", "#838383");
            pathTwo.setAttribute("stroke-linecap", "round");
            pathTwo.setAttribute("stroke-linejoin", "round");
            pathTwo.setAttribute("stroke-width", "1.5");
            pathTwo.setAttribute("d", "M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5");

            svgTwo.appendChild(pathTwo);
            newIconWindow.appendChild(svgTwo);
                        
            sourceDisplay.appendChild(sourceLink);
            sourceDisplay.appendChild(document.createTextNode(" "));

            link.appendChild(newIconWindow);

            sourceDisplay.appendChild(link);
            // sourceDisplay.appendChild(newIconWindow);
          })
          .catch(function(error) {
            console.log(error);
          
            var errorDisplay = document.getElementById("noun-display");
            
            var errorEmoji = document.createElement("div");
            errorEmoji.innerHTML = "&#x1F614;"; // This is the Unicode for the disappointed face emoji
            var errorTitle = document.createElement("h3");
            var errorMessage = document.createElement("p");
            
            errorDisplay.id = "error-display";
            errorEmoji.id = "error-emoji";
            errorTitle.id = "error-title";
            errorMessage.id = "error-message";
          
            errorTitle.textContent = "No Definitions Found";
            errorMessage.innerHTML = "Sorry pal, we couldn't find definitions for the word you were looking for. You can try <br> the search again at later time or head to the web instead.";
          
            errorDisplay.appendChild(errorEmoji);
            errorDisplay.appendChild(errorTitle);
            errorDisplay.appendChild(errorMessage);
            var searchBar = document.getElementsByClassName("search-bar")[0]; 

            searchBar.addEventListener("focus", function() {
              errorDisplay.id = "noun-display"
              errorEmoji.remove();
              errorTitle.remove();
              errorMessage.remove();
            });
          });
      });
    }
  
    searchAPI();
  });

